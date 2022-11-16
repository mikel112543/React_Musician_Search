const express = require('express')
const fs = require('fs')
const audioDBAPI = require("../config/AudioDBAPI")
const {parse} = require('csv-parse')
const router = express.Router();
const cors = require('cors')
router.use(cors())

const getArtists = async () => {
    return new Promise((resolve) => {
        const artistNames = []
        fs.createReadStream("./10000-MTV-Music-Artists-page-1.csv")
            .pipe(parse({
                delimiter: ",",
                columns: true,
                ltrim: true,
            }))
            .on("data", function (row) {
                artistNames.push(row.name.trimEnd())
            })
            .on("error", function (error) {
                console.log(`Parse Error: ${error.message}`)
            })
            .on("end", async function () {
                console.log(`Parse complete`)
                let count = 0
                const artists = []
                while(count <= 10) {
                    await audioDBAPI.request({
                        url: `/search.php`,
                        method: 'get',
                        params: {s: artistNames[count]}}).then(
                        res => {
                            if(res.data.artists !== null) {
                                artists.push(res.data)
                            }
                            count++
                        }
                    )
                }
                console.log(`Array length ${artists.length}`)
                resolve(artists)
            })
    })
}

/* /artist/ */
router.get('/', async (req, res) => {
    const artists = await getArtists();
    res.send(artists)
})

module.exports = router
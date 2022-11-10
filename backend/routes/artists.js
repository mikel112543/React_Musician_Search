const express = require('express')
const fs = require('fs')
const {pipeline} = require('stream/promises')
const {parse} = require('csv-parse')
const router = express.Router();
const token = require('../config/token')
const cors = require('cors')
const {raw} = require("express");
const Artist = require("../models/Artist");
router.use(cors())
let artists = []

const getArtists = (spotifyAPI) => {
    const artistNames = []
    fs.createReadStream("./10000-MTV-Music-Artists-page-1.csv")
        .pipe(parse({
            delimiter: ",",
            columns: true,
            ltrim: true,
        }))
        .on("data", function (row) {
            artistNames.push(row.name)
        })
        .on("error", function (error) {
            console.log(`Parse Error: ${error.message}`)
        })
        .on("end", async function () {
            console.log(`Parse complete`)
            let count = 0
            artists = []
            while(count <= 10) {
                await spotifyAPI.searchArtists(artistNames[count], {limit : 1}).then(
                    async (data) => {
                        console.log(`Got Artist Info for ${artistNames[count]}: ${data.body}`)
                        console.log(data.body)
                        console.log()
                        const artist = new Artist(data.body.artists.items[0].name,
                                                    data.body.artists.items[0].genres,
                                                        data.body.artists.items[0].images[1].url)
                        artists.push(artist)
                    },
                    (err) => {
                        console.log(`Error getting specific artist ${JSON.stringify(err.body)}`)
                    }
                )
                count++
            }
            console.log(`Array length ${artists.length}`)
        })
}

/* /artist/ */
router.get('/', async (req, res) => {
    const spotifyApi = await token.getToken();
    await getArtists(spotifyApi);
    res.send(artists)
})

module.exports = router
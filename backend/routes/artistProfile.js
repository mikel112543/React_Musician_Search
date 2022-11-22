const cors = require('cors')
const express = require("express");
const audioDBAPI = require("../config/AudioDBAPI")
const router = express.Router();
router.use(cors())


router.get('/', async (req, res) => {
    const name = req.query.s
    console.log(name)
    const data = await getArtist(name)
    const artist = {
        name: data.artists[0].strArtist,
        genres: data.artists[0].strGenre,
        profileImage: data.artists[0].strArtistThumb,
        bannerImage: data.artists[0].strArtistFanart,
        country: data.artists[0].strCountry,
        countryCode: data.artists[0].strCountryCode,
        bio: data.artists[0].strBiographyEN
    }
    console.log(artist)
    res.send(artist)
})

const getArtist = async (name) => {
    try {
        const artist = await audioDBAPI.request({
            url: `/search.php`,
            method: `get`,
            params: {s: name}
        })
        return artist.data
    } catch (e) {
        console.error(`Could not get artist info: ${e}`)
    }
}

module.exports = router
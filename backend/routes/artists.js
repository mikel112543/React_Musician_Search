const express = require('express')
const router = express.Router();
const token = require('../config/token')
const cors = require('cors')
const {getAccessToken} = require("../config/token");
const SpotifyWebApi = require("spotify-web-api-node");
const {raw} = require("express");


router.use(cors())
/* /artist/*/
router.get('/', async (req, res) => {
    const spotifyApi = await token.getToken()
        spotifyApi.getArtist(req.query.artistId).then(
                (data) => {
                    console.log(`Got Info: ${data.body}`)
                    res.send(data.body)
                },
                (err) => {
                    console.error(`ERROR HERE ${JSON.stringify(err.b)}`)
                    res.send(err.body)
                }
    )
    console.log(`This is the userId from the frontend ${req.query.artistId}`)
})

module.exports = router;
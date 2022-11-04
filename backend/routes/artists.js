const express = require('express')
const router = express.Router();
const token = require('../config/token')

const spotifyApi = token.getAccessToken();

router.get('/', (req, res) => {
    spotifyApi.getArtist('0TnOYISbd1XYRBk9myaseg').then(
        (data) => {
            console.log(`Got Info: ${data.body}`)
            res.send(data.body)
        },
        (err) => {
            console.error(`ERROR HERE ${err.body}`)
            res.send(err.body)
        }
    );
})

module.exports = router;
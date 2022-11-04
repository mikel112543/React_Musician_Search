const SpotifyWebApi = require("spotify-web-api-node")
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_API_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

// Retrieve an access token
app.get('/api', (req, res) => {
    spotifyApi.clientCredentialsGrant().then(
        function(data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);

            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body['access_token']);
            res.send("Access Token" + data.body)
        },
        function(err) {
            console.log(
                'Something went wrong when retrieving an access token',
                err.message
            );
        }
    );
})

app.listen(1234)
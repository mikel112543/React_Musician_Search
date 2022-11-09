const SpotifyWebApi = require("spotify-web-api-node")
const dotenv = require('dotenv')
dotenv.config()


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_API_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

const getToken = async () => {
    await spotifyApi.clientCredentialsGrant().then(
        function(data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);
            spotifyApi.setAccessToken(data.body[`access_token`])
        },
        function(err) {
            console.log(
                'Something went wrong when retrieving an access token',
                err.message
            );
        }

    );
    return spotifyApi
}

module.exports = {getToken}
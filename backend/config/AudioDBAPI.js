const axios = require("axios")
const dotenv = require('dotenv')
dotenv.config()


const audioDBAPI  = axios.create({
    baseURL: `https://theaudiodb.p.rapidapi.com`,
    headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
});

audioDBAPI.defaults.headers.common['X-RapidAPI-Key'] = process.env.RAPIDAPI_KEY
audioDBAPI.defaults.headers.common['X-RapidAPI-Host'] = 'theaudiodb.p.rapidapi.com'

audioDBAPI.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        console.error('Looks like there was a problem. Status Code: ' + res.status);
        return Promise.reject(error);
    }
);

module.exports = audioDBAPI
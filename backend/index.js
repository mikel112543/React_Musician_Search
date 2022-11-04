const express = require('express')
const app = express()
const artist = require('./routes/artists');

app.use('/artist', artist)
app.listen(1234)
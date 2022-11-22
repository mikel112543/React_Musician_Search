const express = require('express')
const app = express()
const artists = require('./routes/artists');
const artistProfile = require('./routes/artistProfile')
const cors = require("cors")

app.use(cors())
app.use('/artists', artists)
app.use('/artist', artistProfile)
app.listen(1234)
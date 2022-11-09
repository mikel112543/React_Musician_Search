const express = require('express')
const app = express()
const artist = require('./routes/artists');
const cors = require("cors")

app.use(cors())
app.use('/artist', artist)
app.listen(1234)
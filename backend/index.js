const express = require('express')
const app = express()
const artists = require('./routes/artists');
const cors = require("cors")

app.use(cors())
app.use('/artists', artists)
app.listen(1234)
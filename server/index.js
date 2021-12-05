const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const addStegnoDataController = require('./controllers/controller.addStegnoData')
const getStegnoDataController = require('./controllers/controller.getStegnoData')
const addCryptoDataController = require('./controllers/controller.addCryptoData')
const getCryptoDataController = require("./controllers/controller.getCryptoData")

const app = express()
const port = 3004
const mongoURI ="mongodb+srv://vienshk:12345@cluster3.av3lb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .catch((err) => console.log(err))
  .then(() => console.log("DB CONNECTED"))

// API's
app.post('/api/stegno/post-data', addStegnoDataController.addData)
app.post('/api/stegno/get-data', getStegnoDataController.getData)
app.post('/api/crypto/post-data', addCryptoDataController.addData)
app.post('/api/crypto/get-data', getCryptoDataController.getData)

  
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
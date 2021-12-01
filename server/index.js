const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const addDataController = require('./controllers/controller.addData')
const getDataController = require('./controllers/controller.getData')

const app = express()
const port = 3004
const mongoURI = ""

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .catch((err) => console.log(err))
  .then(() => console.log("DB CONNECTED"))

app.use(cors())
app.use(
  bodyParser.urlencoded({extended: true})
)
app.use(bodyParser.json())

// API's
app.post('/api/post-data', addDataController.addData)
app.get('/api/get-data', getDataController.getData)

  
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
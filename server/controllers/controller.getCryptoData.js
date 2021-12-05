const CryptoData = require("../models/model.cryptoData")
const path = require("path")
const fs = require("fs")
const { spawn } = require("child_process")

exports.getData = (req, res) => {
  const runScript = (typeOfAlgo, key) => {
    return spawn("python3", [
      "-u",
      path.join(__dirname, "../Cryptography.py"),
      typeOfAlgo,
      key
    ])
  }
  CryptoData.findOne({ name: req.body.name }, (err, response) => {
    if (err) {
      return res.status(400).json({ error: err.message })
    }
    if (!response) {
      return res.status(200).json({ error: "Not found!" })
    }
    // res.contentType = response.image.contentType

    const base64String = Buffer.from(response.file.data).toString("base64")
    // res.send(base64String)
    fs.writeFile("encFile", base64String, "base64", function (err) {
      if (err) console.log(err)
    })
    console.log(req.body.key)
    const subprocess = runScript(response.typeOfAlgo=='DES'?2:4, req.body.key, req.body.key)
    let hiddenMsg = ""
    subprocess.stdout.on("data", (data) => {
      console.log(`${data}`)
      hiddenMsg = data
    })
    subprocess.stderr.on("data", (data) => {
      console.log(`error:${data}`)
    })
    subprocess.stderr.on("close", () => {
      console.log("Closed")
      res.send(hiddenMsg)
    })
  })
}

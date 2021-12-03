const CryptoData = require("../models/model.cryptoData")
const fs = require("fs")
const path = require("path")
const { spawn } = require("child_process")
const _ = require("lodash")

exports.addData = (req, res) => {
  const runScript = (typeOfAlgo, plainText, key) => {
    return spawn("python3", [
      "-u",
      path.join(__dirname, "../Cryptography.py"),
      typeOfAlgo,
      plainText,
      key
    ])
  }

  const {typeOfAlgo, plainText, key, name} = req.body

  

    if (!plainText || !key || !typeOfAlgo || !name) {
      return res.status(400).json({
        error: "All fields are compulsory",
      })
    }
    const subprocess = runScript( typeOfAlgo=='DES'?1:3, plainText, key)

    subprocess.stdout.on("data", (data) => {
      console.log(`${data}`)
    })
    subprocess.stderr.on("data", (data) => {
      console.log(`error:${data}`)
    })

    let data = new CryptoData({typeOfAlgo: typeOfAlgo, name: name})

    subprocess.stderr.on("close", () => {
      const file = fs.readFileSync(path.join(__dirname, '../encFile'))
      data.file.data = new Buffer(file.toString("base64"), "base64")
      // data.file.contentType = file.data.mimetype

      data.save((err, data) => {
        if (err) {
          res.status(400).json({
            error: "Saving data in DB failed",
          })
        }
        res.status(200).json({ message: "data saved successfully" })
      })
      console.log("Closed")
    })
}

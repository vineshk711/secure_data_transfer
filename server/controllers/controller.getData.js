const Data = require('../models/model.data')
const path = require("path")
const fs = require("fs")
const { spawn } = require("child_process")
const { decode } = require('punycode')


exports.getData = (req, res) => {

    const  runScript = (file) => {
      return spawn("python3", [
        "-u",
        path.join(__dirname, "../Steganography.py"),
        "decode",
        file
      ])
    }
    Data.findOne({name: req.body.name}, (err, response) => {
        if(err){
            return res.status(400).json({error: "not found!"})
        }
        if(!response){
            return res.status(404).json({error: "Not found"})
        }
        res.contentType = response.image.contentType
        const base64String = Buffer.from(response.image.data).toString("base64")
        // res.send(base64String)
        fs.writeFile(
          'output.jpg',
          base64String,
          "base64",
          function (err) {
            if(err) console.log(err)
          }
        )
        
        const subprocess = runScript(path.join(__dirname, '../output.jpg'))
        let hiddenMsg = ''
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

const Data = require('../models/model.data')
const formidable = require('formidable')
const fs = require('fs')
const path = require("path")
const { spawn } = require("child_process")
const _ = require("lodash")

exports.addData = (req, res) => {

    const  runScript = (file, msg, dest) => {
      return spawn("python3", [
        "-u",
        path.join(__dirname, "../Steganography.py"),
        "encode",
        file,
        msg,
        dest
      ])
    }
    
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, file) => {
      if (err) {
        return res.status(400).json({
          error: "problem with image",
        })
      }
      
      
      fields.name = fields.name + "." + file.image.originalFilename.split(".").pop()
      const { name, message } = fields
      
      if (!name || !message) {
        return res.status(400).json({ 
          error: "Please fill all the field",
        })
      }

      const subprocess = runScript(file.image.filepath, message, name)

      subprocess.stdout.on("data", (data) => {
        console.log(`${data}`)
      })
      subprocess.stderr.on("data", (data) => {
        console.log(`error:${data}`)
      })
  
      let data = new Data(fields)
      subprocess.stderr.on("close", () => {
        const img = fs.readFileSync(path.join(__dirname, `../${name}`))
         data.image.data = new Buffer(img.toString('base64'), "base64")
         data.image.contentType = file.image.mimetype

         data.save((err, data) => {
           if (err) {
             res.status(400).json({
               error: "Saving data in DB failed",
             })
           }
          //  fs.unlinkSync(`../${name}`)
           res.status(200).json({message: "data saved successfully"})
         })
        console.log("Closed")
      })
    })
}
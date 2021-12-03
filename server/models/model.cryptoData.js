const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cryptoDataSchema = new Schema(
  {
    name: {
      type: String
    },
    typeOfAlgo: {
      type: String,
    },
    file: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("CryptoData", cryptoDataSchema)

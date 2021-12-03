const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    name: {
        type: String
    },
    image: {
        data: Buffer,
        contentType: String
    }
}, {timestamps: true})

module.exports = mongoose.model('Data', dataSchema)    
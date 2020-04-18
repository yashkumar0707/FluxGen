const mongoose = require('mongoose')

const Schema = mongoose.Schema

const energySchema = new Schema({
    value: { type: Number, required: true },
    timeStamp: { type: Date, default: Date.now },
    plantId: { type: String, required: true }
})

module.exports = mongoose.model('Energy', energySchema)
// id is automatically generated
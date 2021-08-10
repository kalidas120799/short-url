const mongoose = require("mongoose")
const moment=require("moment")
const schema = mongoose.Schema

const shorurlSchema = new schema({
    originalurl: {
        type: String,
        required: true
    },
    shorturl: {
        type: String,
        required: true
    },
    date: {
        type: String,        
        default: moment().format()
    }
})

const shorurlschema = mongoose.model("shorurl", shorurlSchema)

module.exports = shorurlschema
const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@myprojects.d9pt5.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`${process.env.MONGODB_DATABASE} Database Connected`)
}).catch((err) => {
    console.log(err.message)
})

module.exports = mongoose
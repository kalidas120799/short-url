const shortURLs = require("../models/shorturl.model")

module.exports.checkShorturl = async (shorturl) => {
    const myshorturl = await shortURLs.find({ shorturl: shorturl }).then((res) => { return res }).catch((err) => { return err.message })
    return myshorturl
}
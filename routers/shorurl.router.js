const router = require("express").Router()

const shortURLs = require("../models/shorturl.model")
const { randomid } = require("../helpers/randomid")
const { checkShorturl } = require("../modules/shorturl.modules")

router.get("/", (req, res) => { return res.render("index") })

router.post("/shorturl", async (req, res) => {
    const { shorturl } = req.body
    try {
        var newshorturl = req.body
        const checkshorturl = await checkShorturl(shorturl)
        if (checkshorturl.length != 0) return res.status(406).send("Already Url Registered")
        var myshorturl = shorturl == null ? await randomid() : shorturl
        newshorturl["shorturl"] = myshorturl
        const newshorturls = await new shortURLs(newshorturl).save().then((res) => { return res }).catch((err) => { return err.message })
        return res.send(newshorturls)
    } catch (error) {
        return res.send(error)
    }
})

router.get("/:shorturl", async (req, res) => {
    const { shorturl } = req.params
    try {
        const checkshorturl = await checkShorturl(shorturl)
        if (checkshorturl.length == 0) return res.status(404).send("In-Valid Url")
        const { originalurl } = checkshorturl[0]
        return res.redirect(originalurl)
    } catch (error) {
        return res.send(error)
    }
})

module.exports = router
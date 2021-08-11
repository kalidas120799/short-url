const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv").config()
const port =process.env.PORT || 3001
var app = express()

//database
const mongodb = require("./database")

//view engine setup
app.set("view engine", "ejs")

//body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//morgan middleware
app.use(morgan("dev"))

//shorurl router
app.use("/", require("./routers/shorurl.router"))

//error router
app.get("/*", (req, res) => { return res.status(404).send("Page Not Found") })

app.listen(port, () => { console.log(`App Running On http://localhost:${port}`) })
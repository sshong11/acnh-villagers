require("dotenv").config()
const express = require("express")
const methodOverride = require("method-override")
const morgan = require("morgan")
const session = require("express-session")
const VillagerRouter = require("../controllers/villagers")

const middleware = (app) => {
    app.use(morgan("tiny")) // logging
    app.use(methodOverride("_method")) // override for put and delete requests from forms
    app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
    app.use(express.static("public"))
    // app.use(session({
    //     secret: process.env.SECRET,
    //     store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    //     saveUninitialized: true,
    //     resave: false,
    // }))
    app.use("/villagers", VillagerRouter)
}

module.exports = middleware
const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const {application} = require("express")

const router = express.Router()

// SIGNUP
router.get("/signup", (req, res) => {
    res.render("user/signup.ejs")
})

router.post("/signup", async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

    User.create(req.body, (err, user) => {
        res.redirect("/user/login")
    })
})


// LOGIN
router.get("/login", (req, res) => {
    res.render("user/signup.ejs")
})

router.post("/login", (req, res) => {
    const {username, password} = req.body
    User.findOne({username}, (err, user) => {
        // checking if user exists
        if (!user) {
            res.send("User doesn't exist")
        } else {
            // check if password matches
            const result = bcrypt.compareSync(password, user.password)
            if (result) {
                req.session.loggedIn = true
                req.session.username = username
                res.redirect("/villagers")
            } else {
                res.send("wrong password")
            }
        }
    })
})


module.exports = router
const express = require("express")
const Villager = require("../models/villagers")

const router = express.Router()

// INDEX
router.get("/", async (req, res) => {
    const villagers = await Villager.find({})
    res.render("villagers/index.ejs", {villagers})
})

// NEW
router.get("/new", (req, res) => {
    res.render("villagers/new.ejs")
})

// CREATE
router.post("/", (req, res) => {
    Villager.create(req.body, (err, villager) => {
        res.redirect("/villagers")
    })
})

// EDIT
router.get("/:id/edit", (req, res) => {
    Villager.findById(req.params.id, (err, villager) => {
        res.render("villagers/edit.ejs", {villager})
    })
})

// UPDATE
router.put("/:id", (req, res) => {
    Villager.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, villager) => {
        res.redirect("/villagers")
    })
})

// SHOW
router.get("/:id", (req, res) => {
    const id = req.params.id
    Villager.findById(id, (err, villager) => {
        res.render("villagers/show.ejs", {villager})
    })
})

// // test
// router.get("/test", async (req, res) => {
//     const villagers = await Villager.find({})
//     console.log(villagers[0].name['name-USen'])
// })

module.exports = router
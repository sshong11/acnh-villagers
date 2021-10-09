const express = require("express")
const Villager = require("../models/villagers")

const router = express.Router()

// INDEX
router.get("/", async (req, res) => {
    const villagers = await Villager.find({})
    res.render("villagers/index.ejs", {villagers})
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
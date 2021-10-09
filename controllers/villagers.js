const express = require("express")
const Villager = require("../models/villagers")

const router = express.Router()

// INDEX
router.get("/", async (req, res) => {
    const villagers = await Villager.find({})
    res.render("villagers/index.ejs", {villagers})
})

// test
router.get("/test", async (req, res) => {
    const villagers = await Villager.find({})
    console.log(villagers[0].name['name-USen'])
})

module.exports = router
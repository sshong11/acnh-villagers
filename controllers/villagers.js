const express = require("express")
const Villager = require("../models/villagers")

const router = express.Router()

router.get("/", async (req, res) => {
    const villagers = await Villager.find({})
    res.render("villagers/index.ejs", {villagers})
})

module.exports = router
const express = require("express")
const Villager = require("../models/villagers")

const router = express.Router()

router.get("/", async (req, res) => {
    res.render("villagers/index.ejs", {Villager})
})
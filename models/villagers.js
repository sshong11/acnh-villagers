const mongoose = require("./connection")

////////////////////////////////////////////////
// Models
////////////////////////////////////////////////
const {Schema, model} = mongoose

// make villagers schema
const villagersSchema = new Schema({
    name: String,
    personality: String,
    birthday_string: String,
    species: String,
    gender: String,
    hobby: String,
    icon_uri: String,
    image_uri: String,
    catch_phrase: String,
    saying: String,
})

// make villagers model
const Villager = model("Villager", villagersSchema)

module.exports = Villager
const mongoose = require("./connection")

////////////////////////////////////////////////
// Models
////////////////////////////////////////////////
const {Schema, model} = mongoose

// make villagers schema
const villagersSchema = new Schema({
    name: Object,
    personality: String,
    'birthday-string': String,
    species: String,
    gender: String,
    hobby: String,
    icon_uri: String,
    image_uri: String,
    'catch-phrase': String,
    saying: String,
})

// make villagers model
const Villager = model("Villager", villagersSchema)

module.exports = Villager
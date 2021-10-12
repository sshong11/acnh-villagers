const mongoose = require("./connection.js")

const {Schema, model} = mongoose

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, reuired: true}
})

const User = model("User", userSchema)

module.exports = User
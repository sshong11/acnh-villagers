const express = require("express")
const middleware = require("./utils/middleware")

const app = express()
middleware(app)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))
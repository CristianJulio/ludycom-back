require("dotenv").config()
const express = require('express')
const v1usersRouter = require('./v1/routes/usersRoutes')
require("../database/db")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/api/v1/users", v1usersRouter)

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})
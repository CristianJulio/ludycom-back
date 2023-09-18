require("dotenv").config()
require("../database/db")

const express = require('express')

const v1UsersRouter = require('./v1/routes/usersRoutes')
const v1AreasRouter = require('./v1/routes/areasRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api/v1/users", v1UsersRouter)
app.use("/api/v1/areas", v1AreasRouter)

app.listen(PORT, () => { console.log(`API is listening on port ${PORT}`) })
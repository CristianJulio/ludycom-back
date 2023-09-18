const express = require('express')
const v1usersRouter = require('./v1/routes/usersRoutes')

const app = express()
const PORT = process.env.PORT || 3000

// Just to test if the server is working fine
app.get("/", (req, res) => { res.send("<h2>It's working!</h2>") })

// V1 Routes
app.use("/api/v1/users", v1usersRouter)

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})
const express = require("express")
const cors = require("cors")

require("dotenv").config()

var app = express()

app.use(cors())

const route = require("./routes/route")

app.use(route)

const port = process.env.PORT || 3000


app.listen(port, () =>{
    console.log(`conectado à porta ${port}`)
})

require("./database/connection")
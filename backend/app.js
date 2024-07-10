const express = require("express")
const app = express()
const cors = require("cors")
require("./db").connectDb() // Connecting to the database
const  PORT = process.env.PORT || 9000



app.listen(PORT,()=>{
    console.log("Server running on port ", PORT)
})
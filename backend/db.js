const mongoose = require("mongoose")

const MONGODB_URL = "mongodb://localhost:27017/crypto_app"

async function connectDb() {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("Database connected")
    } catch (error) {
        console.error(`DB error: ${error}`)
        // process.exit(1)
    }
}

 function getDb(){
    return mongoose.connection.db;
}


module.exports = { connectDb, getDb}
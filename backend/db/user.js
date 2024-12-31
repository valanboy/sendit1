const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()


//connect to user db
const dbUrl = process.env.mongoDbUrl
const connectTomongoBd = async() => {
  try {
     await mongoose.connect(dbUrl)
   console.log("connected to mongodb database")

  } catch (error) {
    console.log(`could not connect to mongodb database: ${error}` )
  }
   
        }

module.exports = connectTomongoBd
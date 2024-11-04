const express = require("express")
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cron = require('node-cron')
const mongoose = require('mongoose')
const { sendWelcomeEmail } = require('./emailServices/welcomeEmail')
const { sendParcelPendingEmail } = require('./emailServices/pendingparcel')
const { sendParcelDliveredEmail } = require('./emailServices/deliveredparcel')


app.use(express.json())

//database connection
const dbConnection = async() => {
    try {
        const db = process.env.MongoDbUrl

        await mongoose.connect(db)
        console.log('connected to db successfully')
    } catch (error) {
        console.log("database connection error: ", error.message)
    }
}
dbConnection()

//task scheduler
const run = () => {
    cron.schedule('* * * * * *', ()=>{
sendWelcomeEmail()
sendParcelPendingEmail()
sendParcelDliveredEmail()
    })
}
run()

//server
const port = process.env.port

app.listen(port, ()=>{
    console.log(`background services is running on port ${port}`)
})
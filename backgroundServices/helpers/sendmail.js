const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
dotenv.config()

let testAccount = nodemailer.createTestAccount()


const createTransporter = (config)=>{
const transporter = nodemailer.createTransport(config)
return transporter;
}

let configurations = {
    host: "smtp-relay.brevo.com",
    port: 587,
    auth:{
        user: process.env.user,
        pass: process.env.PASSWORD
    },
    connectionTimeout: 10000 // Set timeout to 10 seconds
}

const sendMail = async(messageoption)=>{
    const transporter = await createTransporter(configurations)
    await transporter.verify()
    await transporter.sendMail(messageoption, (err, info)=>{
        if(err){
            console.log(err)
        }
        console.log(info.response)
    })
}

module.exports = sendMail
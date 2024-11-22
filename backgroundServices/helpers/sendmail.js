const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
dotenv.config()



const createTransporter = (config)=>{
const transporter = nodemailer.createTransport(config)
return transporter;
}

let configurations = {
    host: "smtp-relay.sendinblue.com",
    port: 587,
secure:false,
    auth:{
        user: process.env.user,
        pass: process.env.PASSWORD
    },
    connectionTimeout: 60 * 1000, //30 seconds
    // debug: true,
    // logger:true,
   }

const sendMail = async(messageoption)=>{
    try {
        
    const transporter = await createTransporter(configurations)
    // await transporter.verify()
    console.log("smtp server is ready to send messages!")
    await transporter.sendMail(messageoption)


    //close the connection after sending mail to avoid leaving it open
    transporter.close()
    } catch (error) {
        console.log(error)
    }

}

module.exports = sendMail
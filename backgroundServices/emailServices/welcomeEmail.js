const ejs = require("ejs");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/user");
const sendMail = require("../helpers/sendmail");

const sendWelcomeEmail = async (fullname, password, email) => {
  const users = await User.find({ status: 0 });
 

  if (users.length > 0) {
    for (let user of users) {
     
      ejs.renderFile(
        "templates/welcome.ejs",
        { fullname: user.fullname,password:user.password1, email: user.email },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: user.email,
            subject: "Welcome to SendIT",
            html: data,
          };

          try {
            sendMail(messageoption);
            await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });
            await User.findByIdAndUpdate(user._id, { $set: { password1: "" } });
          } catch (error) {
            console.log(err);
          }
        }
      );
    }
  }
};

module.exports = { sendWelcomeEmail };
const ejs = require("ejs");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/user");
const sendMail = require("../helpers/sendmail");

const sendWelcomeEmail = async () => {
  try {
    const users = await User.find({ status: 0 });

    if (users.length > 0) {
      for (let user of users) {
        try {
          //render the email template as a promise
          const data = ejs.renderFile("templates/welcome.ejs", {
            fullname: user.fullname,
            email: user.email,
            password: user.password1,
          });

          //set up the message options
          const messageoption = {
            from: process.env.EMAIL,
            to: user.email,
            subject: "Welcome to SendIT",
            html: data,
          };

          //send the email
          await sendMail(messageoption);

          //update the user status and clear the temporal password called password1
          await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });
          await User.findByIdAndUpdate(user._id, { $set: { password1: "" } });
        } catch (error) {
          `error sending email to ${user.email}: ${error.message}`;
        }
      }
    }
  } catch (error) {
    console.log("error fetching users: ", error.message);
  }
};

module.exports = { sendWelcomeEmail };

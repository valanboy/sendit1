const user = require("../models/user");
const jwt = require("jsonwebtoken");
const JwtSecret = process.env.JwtSecret;
const bcrypt = require("bcryptjs");

//create json token that we can call later in this script
const maxAge = 2 * 24 * 60 * 60;

const whatsapp_GET = (req, res) => {
  res.redirect("https://wa.me/+2349036454022?text=urlencodedtext");
};

const signup_POST = async (req, res) => {
  let { fullname, email, ...rest } = req.body;
  try {
    //check if the email already exists in the database
    const userExist = await user.findOne({ email: email });
    if (userExist) res.status(400).json("user already exists");
    else if (!userExist) {
      //create a user in database
      const User = await user.create({ fullname, email, ...rest });

      res.status(200).json(User);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const signin_POST = async (req, res) => {
  try {
    //get the email and password from the req body by destructuring
    let { email, password } = req.body;

    //check database to find user
    const User = await user.findOne({ email: email });

    //if no user is found throw an error and rerender signin page
    if (!User){
         res.status(401).json("you are not registered!")
        }
         let dbpassword = User.password
        let Comparedpassword = bcrypt.compare(password, dbpassword)
        if(Comparedpassword === false){
           res.status(401).json("incorrect username or password!")
        }else{
        let token = jwt.sign({_id:User._id, role:User.role}, JwtSecret, {expiresIn: maxAge})
        const {password, ...rest} = User._doc
        res.status(201).json({token, ...rest})
        }

    }catch (error) {
    res.status(500).json(error);
  }
}


const dashboard = async (req, res) => {
  //extract the username from the query parameter we were redirected from
  const username = req.query.username;
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const time = new Date().toLocaleTimeString();
  const day = days[new Date().getDay()];
  const date = new Date().toLocaleDateString();
  res.render("dashboard", {
    username: username,
    todayDate: date,
    day: day,
    time,
  });
};

const signout = async (req, res) => {
  res.cookie("jwt", " ", { maxAge: 1 });
  res.redirect("/");
};

module.exports = {
  whatsapp_GET,
  signin_POST,
  signup_POST,
  dashboard,
  signout,
};

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  country: {
    type: String,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
    temporapassword: {
    type: String,
     },
  role: {
    type: String,
    default: "user",
  },
});

//hash password before it is saved
userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    console.log("password is hashed just before saving this user");
    next();
  } catch (error) {
    console.log(error);
  }
});

const user = mongoose.model("user", userSchema);

module.exports = user;

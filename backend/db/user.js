const mongoose = require("mongoose");


//connect to user db
const dbUrl = process.env.mongoDbUrl
const connectTomongoBd = async() => {
    mongoose.connect(process.env.mongoDbUrl
, {
        useUnifiedTopology: true,
      })
        .then(() => console.log('Connected to MongoDB!'))
        .catch((error) => console.error('Error connecting to MongoDB:', error));
}

module.exports = connectTomongoBd
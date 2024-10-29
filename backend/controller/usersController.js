const User = require('../models/user')

const getUsers = async (req, res) => {
    try {
      const users = await User.find().sort({ createdAt: -1 });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  const deleteUsers =  async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
  
      res.status(200).json("The user has been deleted");
    } catch (error) {
      res.status(500).json("You are not authorized for this operation");
    }
  }

  module.exports = {getUsers, deleteUsers}
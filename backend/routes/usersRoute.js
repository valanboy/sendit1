const express = require("express");
const router = express.Router();
const usersController = require('../controller/usersController')

// DELETE 
router.delete("/:id", usersController.deleteUsers);

  //GET ALL USERS
router.get("/", usersController.getUsers);

module.exports = router;
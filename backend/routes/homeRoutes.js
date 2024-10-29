const homeController = require("../controller/homecontroller")
const express = require('express')
const router = express.Router()

router.get("/", homeController.home_GET)
router.get("/signin", homeController.signin_GET)
router.get("/signup", homeController.signup_GET)

module.exports = router
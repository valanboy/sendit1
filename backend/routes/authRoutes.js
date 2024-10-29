const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/authController");
const { verifyToken } = require('../middleware/verifyToken')


router.get("/whatsapp", authcontroller.whatsapp_GET);

router.post("/signup", authcontroller.signup_POST);

router.post("/signin", authcontroller.signin_POST);

router.get("/dashboard", verifyToken , authcontroller.dashboard);

router.get('/signout', authcontroller.signout)


module.exports = router;
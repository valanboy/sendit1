const parcelController = require("../controller/parcelController")
const express = require('express')
const router = express.Router()
const { verifyToken, verifyTokenAndAuthorization } = require('../middleware/verifyToken')

//add parcel
router.post('/', verifyToken, parcelController.addParcel)

//get all parcel
router.get('/', verifyTokenAndAuthorization, parcelController.getAllParcel)

//update parcel
router.put("/:id", parcelController.UpdateParcel)

//get one parcel
router.get("/find/:id", parcelController.getOne)

//get users parcels
router.post('/me', parcelController.getUsersParcel)

//delete parcel
router.delete('/:id', parcelController.deleteParcel)

module.exports = router;
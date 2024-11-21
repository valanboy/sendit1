const parcelController = require("../controller/parcelController")
const express = require('express')
const router = express.Router()
const { verifyToken, verifyTokenAndAuthorization } = require('../middleware/verifyToken')

//add parcel
router.post('/', parcelController.addParcel)

//get all parcel
router.get('/', parcelController.getAllParcel)

//update parcel
router.put("/:id", parcelController.UpdateParcel)

//update parcel status
router.put("/status/:id", parcelController.UpdateParcelStatus)

// update parcel feedback
router.put("/feedback/:id", parcelController.UpdateParcelFeeback)

//get one parcel
router.get("/find/:id", parcelController.getOne)

//get users parcels
router.post('/me', parcelController.getUsersParcel)

//delete parcel
router.delete('/:id', parcelController.deleteParcel)

module.exports = router;
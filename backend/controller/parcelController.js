const express = require("express");
const router = express.Router();
const Parcel = require("../models/parcel");

// ADD PARCEL

const addParcel = async (req, res) => {
  const newParcel = Parcel(req.body);
  try {
    const parcel = await newParcel.save();
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET ALL PARCELS

const getAllParcel = async(req, res) => {
  try {
    const parcels = await Parcel.find().sort({ createdAt: -1 });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE PARCEL

const UpdateParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
}

//update parcel status 
const UpdateParcelStatus = async (req, res) => {
  const { status1 } = req.body
  try {
    const parcel = await Parcel.findByIdAndUpdate(
      req.params.id,
      { $set: { status: status1} },
      {new: true}
      
    );
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json({error: "Internal server error! could not update status"});
  }
}


// GET ONE PARCEL

const getOne = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
}

// GET USERS PARCEL

const getUsersParcel = async (req, res) => {
  try {
    const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
      createdAt: -1,
    });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
}

// DELETE SHIFT

const deleteParcel = async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Parcel has been deleted!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {addParcel, getAllParcel, UpdateParcel, getOne,getUsersParcel ,deleteParcel, UpdateParcelStatus}
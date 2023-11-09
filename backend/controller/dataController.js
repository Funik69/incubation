const express = require('express');
//const app = express();
//const cors = require('cors');

const mongoose=require("mongoose");
require("../models/formDataModel.js");
const DataModel=mongoose.model("DataModel");
const app = express();

//app.use(express.json());
//app.use(cors({origin : 'http://localhost:5173'}));
//Data controller
 const DataSaveController = async (req, res) => {
    try {
      const {  startupName,
      founderName,
      mobileNumber,
      alternateNumber,
      email,
      location,
      state,
      pinCode,
      businessIdea,
      businessModelFile,
      whyJoinUs,
      registered,
      development,
      successful,
      linkedinProfile,
      ietDavvRights,
      sharewithmentor,
      status,} = req.body;
      

      const formDetail =  new DataModel({
      startupName,
      founderName,
      mobileNumber,
      alternateNumber,
      email,
      location,
      state,
      pinCode,
      businessIdea,
      businessModelFile,
      whyJoinUs,
      registered,
      development,
      successful,
      linkedinProfile,
      ietDavvRights,
      sharewithmentor,
      status
      }); 
      await formDetail.save();
      res.status(201).send({
        success: true,
        message: "Mail Sent Successfully",
        formDetail,
      });
     } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error in Registration",
          error,
        });
      }
    };
    //fetched all startup application
    const getData = async(req,res) => {
      try {
        const data = await DataModel.find({});
        res.status(200).send(data);
      }
      catch(error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
    };
  //startup fetched for particular user   
    const getSingleData = async (req, res) => {
      try {
        const data = await DataModel.find({email:req.params._id});
        res.status(200).send(data);
      }
      catch(error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
    };
//admin accept the startup idea
    const updateData = async (req, res) => {
      try {
        const data = await DataModel.findByIdAndUpdate(req.params._id, { status: 'accepted' }, { new: true });
        res.status(200).send('update data');
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
    };

//unregisterd the accepted startup
const UnRegister = async (req, res) => {
  try {
    const data = await DataModel.findByIdAndUpdate(req.params._id, { status: 'Inactive' }, { new: true });
    res.status(200).send('unregister data');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};    
    
//admin reject and delete idea     
    const deleteData = async(req, res) => {
      try{
        const data = await DataModel.findByIdAndDelete(req.params._id);
        res.status(200).send('delete data');
      } catch(error){
        console.error(error);
        res.status(500).send('Server Error');
      }
    }
    
    
  module.exports = {
    DataSaveController: DataSaveController , getData , getSingleData, updateData, deleteData, UnRegister
  };


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
    
    
  module.exports = {
    DataSaveController: DataSaveController , getData , getSingleData
  };


const { response } = require("express");
const mongoose=require("mongoose");
require("../models/formDataModel.js");
const DataModel=mongoose.model("DataModel");
const express = require('express');
const app = express();

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
      sharewithmentor} = req.body;
      

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
      sharewithmentor
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

    const getData = async(req,res)=>{
      try{
        const data = await DataModel.find({});
        res.status(200).send(data);
        // res.send.json(data);
      }
      catch(error){
        console.error(error);
        res.status(500).send('Server Error');
      }
    };

  module.exports = {
    DataSaveController: DataSaveController,getData
  };


const express = require('express');
const mongoose=require("mongoose");
require("../models/mentorModel.js");
const MentorModel=mongoose.model("MentorModel");
const app = express();
 const MentorSaveController = async (req, res) => {
    try {
      const {  mname,
      mcity,
      mstate,
      memail,
      mmobile,
      mconame,
      myear,
      msector,
      mlink,} = req.body;
      

      const mentorDetail =  new MentorModel({
      mname,
      mcity,
      mstate,
      memail,
      mmobile,
      mconame,
      myear,
      msector,
      mlink,
      }); 
      await mentorDetail.save();
      res.status(201).send({
        success: true,
        message: "Data Submitted Successfully",
        mentorDetail,
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
    module.exports = {
        MentorSaveController: MentorSaveController
      };
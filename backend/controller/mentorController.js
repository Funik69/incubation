const express = require('express');
const mongoose=require("mongoose");
require("../models/mentorModel.js");
const MentorModel=mongoose.model("MentorModel");
require("../models/userModel.js");
const userModel=mongoose.model("User");
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
      mlink,
      status
    } = req.body;
      

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
      status,
      }); 
      await mentorDetail.save();
      const value = await userModel.findOne({ email: memail });

// Update the user type to 'investor'
try {
  if(value.userType==='user'){
  const data = await userModel.findByIdAndUpdate(value._id, { userType: 'pseudo_mentor' },{new:true});
  console.log('Updated user data:');
  }
} catch (error) {
  console.error('Error updating user data:', error);
}
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


    const MentorGetController = async (req, res) => {
        try {
          const data = await MentorModel.find({});
          res.status(200).send(data);
        }
        catch(error) {
          console.error(error);
          res.status(500).send('Server Error');
        }
    };

    const updateData = async (req, res) => {
      try {
        const checkData = await MentorModel.findById(req.params._id);
        const data = await MentorModel.findByIdAndUpdate(req.params._id, { status: 'accepted' }, { new: true });
        const value = await userModel.findOneAndUpdate({ email: checkData.memail }, { userType: 'mentor' }, { new: true });

        console.log(data);
        console.log(value);
        res.status(200).send('update data');

      }
    catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };

  const deleteData = async (req, res) => {
    try {
      

    }
  catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
    module.exports = {
        MentorSaveController: MentorSaveController,
        MentorGetController:MentorGetController,
        updateData:updateData,
        deleteData:deleteData,
      };
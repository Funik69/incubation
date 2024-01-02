const express = require('express');
const mongoose=require("mongoose");
require("../models/investorModel.js");
const InvestModel=mongoose.model("InvestModel");
require("../models/userModel.js");
const userModel=mongoose.model("User");
const app = express();
 const InvestSaveController = async (req, res) => {
    try {
      const {  investorName,
      companyName,
      icity,
      istate,
      iemail,
      imobile,
      investInto,
      limit,
      linkedin,
      status,} = req.body;
      

      const investDetail =  new InvestModel({
        investorName,
        companyName,
        icity,
        istate,
        iemail,
        imobile,
        investInto,
        limit,
        linkedin,
        status,
      }); 
      await investDetail.save();
      const value = await userModel.findOne({ email: iemail });

// Update the user type to 'investor'
try {
  if(value.userType==='user'){
    const data = await userModel.findByIdAndUpdate(value._id, { userType: 'pseudo_mentor' },{new:true});
    console.log('Updated user data:');
    }
} catch (error) {
  console.error('Error updating user data:', error);
}

      return res.status(200).send({
        success: true,
        message: "Data Submitted Successfully",
        investDetail,
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

    const InvestorGetController= async (req, res) => {
      try {
        const data = await InvestModel.find({});
          res.status(200).send(data);
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error in getting products",
          error: error.message,
        });
      }
    };

    const updateData = async (req, res) => {
      try {
        const checkData = await InvestModel.findById(req.params._id);
        const data = await InvestModel.findByIdAndUpdate(req.params._id, { status: 'accepted' }, { new: true });
        const value = await userModel.findOneAndUpdate({ email: checkData.iemail }, { userType: 'mentor' }, { new: true });

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
      //logic resides here
      const id=req.params;


    }
  catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
    module.exports = {
        InvestSaveController: InvestSaveController,
        InvestorGetController:InvestorGetController,
        updateData:updateData,
        deleteData:deleteData


      };
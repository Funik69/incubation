const express = require('express');
const mongoose=require("mongoose");
require("../models/investorModel.js");
const InvestModel=mongoose.model("InvestModel");
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
      linkedin,} = req.body;
      

      const investDetail =  new InvestModel({
        investorName,
        companyName,
        icity,
        istate,
        iemail,
        imobile,
        investInto,
        linkedin
      }); 
      await investDetail.save();
      res.status(201).send({
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
        const investor = await InvestModel
          .find({})
          .sort({ createdAt: -1 });
          
        res.status(200).send({
          success: true,
          countTotal: investor.length,
          message: "All Investors ",
          investor,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error in getting products",
          error: error.message,
        });
      }
    };
    module.exports = {
        InvestSaveController: InvestSaveController,
        InvestorGetController:InvestorGetController

      };
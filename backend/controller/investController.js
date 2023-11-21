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
      limit,
      linkedin,} = req.body;
      

      const investDetail =  new InvestModel({
        investorName,
        companyName,
        icity,
        istate,
        iemail,
        imobile,
        investInto,
        limit,
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
    module.exports = {
        InvestSaveController: InvestSaveController
      };
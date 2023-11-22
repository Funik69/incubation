const express = require('express');
const mongoose=require("mongoose");
require("../models/formDataModel.js");
const DataModel=mongoose.model("DataModel");
const app = express();
const nodemailer = require('nodemailer');

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
      const existingName = await DataModel.findOne({ startupName });
      //exisiting user
      if (existingName) {
        return res.status(200).send({
          success: false,
          message: "Already Registered , Please choose a different name."
        });
      }
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
        const data = await DataModel.find(req.params._id);
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
        // console.log(data);
        // console.log(data.email)

        const emailContent = `
        <html>
          <body>
          <div style="padding:20px">
          <div style="background-color: white; padding:12px; margin:6px ">
            <h1 style="text-align:center; color:black">IET DAVV - Incubation Center</h1><br>
            <div style="display: block; margin-left: auto; margin-right: auto">
            </div>
            <p style="font-size:15px; color:black" >Dear <b>${data.founderName}</b></p>
            <p style="font-size:15px; color:black" >We are thrilled to inform you that your startup idea has been selected for incubation at IET-DAVV Incubation! This is a significant achievement, and we are excited to embark on this entrepreneurial journey with you.</p>
            <p style="font-size:15px; color:black" >The selection process was highly competitive, and your idea stood out due to its innovation, potential for growth, and the positive impact it can bring to the market. We believe that your vision aligns perfectly with the goals and objectives of our incubation program, and we are confident that this partnership will be mutually beneficial.</p>
            <p style="font-size:15px; color:black" >Once again, congratulations on being accepted into IET-DAVV Incubation. We are excited to be part of your entrepreneurial journey and look forward to helping you turn your startup idea into a successful business.</p>
            <p style="font-size:15px; color:black">If you have any questions or need further information, please do not hesitate to reach out to us at <a href='#'>abc@gmail.com</a></p>
          </div>
          </div>
            </body> 
        </html>
      `;
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: false, 
          service:'Gmail',
        auth: {
          user: process.env.SMTP_MAIL, 
          pass: process.env.SMTP_PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: data.email,
        subject:"Congratulations! Your Startup Idea has been accepted by IET-DAVV Incubation",
        html: emailContent,
      };
    
      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email: ', error);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent: ', info.response);
          res.status(200).send('Email sent successfully');
        }
      });
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
        console.log(data);
        console.log(data.email);

        const content = `
        <html>
          <body>
          <div style="padding:20px">
          <div style="background-color: white; padding:12px; margin:6px ">
            <h1 style="text-align:center; color:black">IET DAVV - Incubation Center</h1><br>
            <div style="display: block; margin-left: auto; margin-right: auto">
            </div>
            <p style="font-size:15px; color:black" >Dear <b>${data.founderName}</b></p>
            <p style="font-size:15px; color:black" >I hope this message finds you well. We appreciate the time and effort you invested in submitting your startup idea to the IET DAVV Incubation program.</p>
            <p style="font-size:15px; color:black" >Our team carefully reviewed each proposal, and I regret to inform you that your idea has not been selected for further advancement in the current round of evaluations.</p>
            <p style="font-size:15px; color:black" >Please understand that the selection process was highly competitive, with many innovative ideas vying for limited spots in the incubation program. Although your idea did not make it to the next stage, we commend your creativity and entrepreneurial spirit.</p>
            <p style="font-size:15px; color:black">Thank you again for considering the IET DAVV Incubation program for your startup idea. We wish you the best in all your future entrepreneurial pursuits</p>
            <p style="font-size:15px; color:black">If you have any questions or would like feedback, please feel free to reach out to us <a href='#'>abc@gmail.com</a></p>
          </div>
          </div>
            </body> 
        </html>
      `;
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: false, 
          service:'Gmail',
        auth: {
          user: process.env.SMTP_MAIL, 
          pass: process.env.SMTP_PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: data.email,
        subject:"[Update] IET-DAVV Incubation",
        html: content,
      };
    
      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email: ', error);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent: ', info.response);
          res.status(200).send('Email sent successfully');
        }
      });

      } catch(error){
        console.error(error);
        res.status(500).send('Server Error');
      }
    }
    
    
  module.exports = {
    DataSaveController: DataSaveController , getData , getSingleData, updateData, deleteData, UnRegister
  };


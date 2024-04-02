const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const nodemailer = require('nodemailer');
require("../models/formDataModel.js");
const DataModel=mongoose.model("DataModel");
const VerificationToken=require('../models/verificationToken.js')
const VerificationModel=mongoose.model("VerificationToken")
require("../models/userModel.js");
const userModel=mongoose.model("User");
const JWT=require("jsonwebtoken");
const {isValidObjectId}=require("mongoose");
const { generateOTP, mailTransport } = require("../utils/mail.js");
const verificationToken = require("../models/verificationToken.js");

//register controller
 const registerController = async (req, res) => {
    try {
      const { fname,lname, email, password , userType} = req.body;
      const hashedPassword= await bcrypt.hashSync(password, 10);
      //validations
      if (!fname) {
        return res.send({ message: "Name is Required" });
      }
      if (!lname) {
        return res.send({ message: "Name is Required" });
      }
      if (!email) {
        return res.send({ message: "Email is Required" });
      }
      if (!password) {
        return res.send({ message: "Password is Required" });
      }
      
      //check user
      const existingUser = await userModel.findOne({ email });
      //exisiting user
      if (existingUser) {
        return res.status(200).send({
          success: false,
          message: "Already Register please login"
        });
      }
      //save
      const user =  new userModel({
        fname,
        lname,
        email,
        password:hashedPassword,
        userType,
      });

      const OTP=generateOTP();
      const hashedToken= await bcrypt.hashSync(OTP, 10);
      const verificationToken=new VerificationToken({
        owner:user._id,
        token:hashedToken
      })
      await verificationToken.save();
      await user.save();
      const unqId = hashedPassword.toString();
      const sendId = unqId.substring(29,37);
      
      // mailTransport().sendMail({
      //   from:"priyashivhare2003@gmail.com",
      //   to:user.email,
      //   subject:"Verify your email account",
      //   html:`<h1>${OTP}</h1>`
      // })
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
      to: user.email,
      subject:"Welcome to IET DAVV Incubation - Account Verification",
      html:`
      <p><b>Dear ${fname+" "+lname}</b><p>
      <p>Welcome to IET DAVV Incubation! To get started and ensure the security of your account, we require you to complete the verification process.</p>
      <p><b>Your verification credentials for <a href="mailto:${user.email}">${user.email}</a> are: <b></p>
      <p><b>Unique id : ${sendId}</b></p>
      <p><b>OTP : ${OTP}</b></p>
      <p>Thank you for choosing IET DAVV Incubation. We look forward to supporting your innovative journey. 
      If you have any questions or require assistance, please do not hesitate to contact us.</p>
      <p><b>Best Regards<b></p>
      <p><b>IET DAVV Incubation<b></p>
      <p><b>Contact No 123456789<b></p>
      <p><b><a href="#">Visit us on link</a><b><p>
`,
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
      res.status(201).send({
        success: true,
        message: "Mail Sent Successfully",
        user,
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

  //POST LOGIN
 const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(200).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email:email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not registered",
      });
    }
    if(!user.verified){
      return res.status(203).send({
        success: false,
        message: "Email is not verified,verify please",
      }); 
    }
    if(!user.verified){
      return res.status(203).send({
        success: false,
        message: "Email is not verified,verify please",
      }); 
    }
    
    const match = await bcrypt.compareSync(password, user.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Invalid Password",
      });
    }
    
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(201).send({
      success: true,
      message: "login successful",
      user: {
        _id: user._id,
        fname: user.name,
        email: user.email,
        
      },
      token,
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};



//verify email
const verifyEmail= async(req,res)=>{
  try{
  const {userId,otp}=req.body;
  const regex = userId.toString();
  if(regex.length!=8){
    return res.status(404).send({
      success:false,
      message:"Invalid UniqueId"
    });
  }
  // if (!userId || !otp) {
  //   return res.status(404).send({
  //     success: false,
  //     message: "Not",
  //   });
  // }
  // if(!isValidObjectId(userId)){
    
  //     return res.status(401).send({
  //       success: false,
  //       message: "Invalid userid",
  //     });
    
  // }
  const sdata=await userModel.find({password:{$regex:regex}});
  if(sdata.length == 0 ){
    return res.status(401).send({
      success: false,
      message: "Invalid UniqueId",
    });
  }
  const newuser = sdata[0];
  if(!newuser)return res.status(402).send({
    success: false,
    message: "Invalid UniqueId",
  });
  
  if(newuser.verified)
  return res.status(200).send({
    success: false,
    message: "Account Verified Already",});

  const token = await VerificationToken.findOne({owner:newuser._id})
  if(!token)return res.status(204).send({
    success: false,
    message: "Invalid OTP",
  });
  const match = await bcrypt.compare(otp.toString(), token.token.toString());

  if(!match){
    return res.status(203).send({
      success: false,
      message: "Invalid OTP",
    });
  }
  newuser.verified=true;
  const search_user=await VerificationModel.findOne(process.env.userId);
  let counter=search_user.ucounter;
  counter++;
  await VerificationModel.findByIdAndUpdate(
    search_user._id,  
    { $set: { ucounter: counter } },
    { new: true }  
  );
  const currentTime = new Date();
const lastTwoDigitsOfYear = currentTime.getFullYear().toString().slice(-2);
 newuser.user_id = "DAVV" + lastTwoDigitsOfYear + counter.toString();
  await VerificationToken.findByIdAndDelete(token._id);
  await newuser.save();

  // mailTransport().sendMail({
  //   from:"priyashivhare2003@gmail.com",
  //   to:newuser.email,
  //   subject:"Verify your email account",
  //   html:`<h1>Email Verified Successfully</h1>`
  // })
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
      to: newuser.email,
      subject:"Email Verified Successfully",
      html:`Email Verified.<br> Here is your Unique Id ${newuser.user_id}`,
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

  res.status(201).send({
    success: true,
    message: "Verified",
    newuser:newuser.name,
    newuser:newuser.email,
    
  });
}
catch (error) {
  console.log(error);
  res.status(500).send({
    success: false,
    message: "Error in Registration",
    error,
  });
}

}



//forgot password
const forgotPassword = async (req, res) => {
    const {email}=req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(201).send({
        success: false,
        message: "Email is not registered",
      });
    }
      const token = await JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
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
      to: user.email,
      subject:"Reset Your Password",
      text:`incubation.vercel.app/reset-password/${user._id}/${token}`,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email: ', error);
        res.status(500).send('Error sending email');
      } else {
        return res.status(200).send({
          success: true,
          message: "Email Sent Successfully",
        });
      }
    });

    }


    //reset password
    const resetPassword = async (req, res) => {
    const{id,token}=req.params;
    const {password}=req.body;
    JWT.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
      if(err){
        return res.json({Status:"Error with token"})
      }
      else{
        bcrypt.hash(password,10)
        .then(hash=>{
           userModel.findByIdAndUpdate({_id:id},{password:hash})
          .then(u=>res.send({Status:"Success"}))
          .catch(err=>res.send({Status:err}))
        })
        .catch(err=>res.send({Status:err}))
      }
    })
    }
    const getUser = async (req, res) => {
      try {
        const data = await userModel.find({});
        res.status(200).send(data);
      }
      catch(error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
    };


    const reVerifyMail = async (req, res) => {
    const {email}=req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(202).send({
        success: false,
        message: "Email is not registered",
      });
    }
    try{
    const OTP=generateOTP();
      const hashedToken= await bcrypt.hashSync(OTP, 10);
      const verificationToken=new VerificationToken({
        owner:user._id,
        token:hashedToken
      })
      await verificationToken.save();
      await user.save();
      
      // mailTransport().sendMail({
      //   from:"priyashivhare2003@gmail.com",
      //   to:user.email,
      //   subject:"Verify your email account",
      //   html:`<h1>${OTP}</h1>`
      // })
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
      to: user.email,
      subject:"Welcome to IET DAVV Incubation - Account Verification",
      html:`
      <p><b>Dear </b><p>
      <p>Welcome to IET DAVV Incubation! To get started and ensure the security of your account, we require you to complete the verification process.</p>
      <p><b>Your verification credentials for <a href="mailto:${user.email}">${user.email}</a> are: <b></p>
      <p><b>Unique id : ${user._id}</b></p>
      <p><b>OTP : ${OTP}</b></p>
      <p>Thank you for choosing IET DAVV Incubation. We look forward to supporting your innovative journey. 
      If you have any questions or require assistance, please do not hesitate to contact us.</p>
      <p><b>Best Regards<b></p>
      <p><b>IET DAVV Incubation<b></p>
      <p><b>Contact No 123456789<b></p>
      <p><b><a href="#">Visit us on link</a><b><p>
`,
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
      res.status(201).send({
        success: true,
        message: "Mail Sent Successfully",
        user,
      });
    }
    catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Registration",
        error,
      });
    }
    }   


    //delete user
    const deleteController = async (req, res) => {
      try{
        console.log(req.params.id);
        const user=await userModel.findById(req.params.id);
        console.log(user);
        await userModel.findByIdAndDelete(req.params.id);
         return res.json({
          success: true,
          message: "entries deleted successfully.",
        });
     
        
      

        // return res.status(200).send({
        //   success: true,
        //   message: "done",
          
        // });
        // await DataModel.deleteMany(user.email);


      }
      catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error in Deletion",
          error,
        });
      }

    }

    const getAnnouncement = async (req, res) =>{
      try{
        const data = await VerificationToken.findById({_id:process.env.objId});
        res.status(200).send(data);
      }
      catch(error){
        console.error(error);
        res.status(500).send('Information Server Error');
      }
    }
    
    const updateAnnouncement = async (req, res) => {
      const { selectedOption,message} = req.body;
      try {
        const data = await verificationToken.updateOne(
         { _id:process.env.objId},
         {$set:{[selectedOption]:message}}
        );
        console.log(data);
        if (!data) {
          return res.status(404).send('Document not found');
        }
        res.status(200).send(data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Update Server Error');
      }
    };
    
    const getUserByEmail = async (req, res) => {
      try {
        const { email } = req.params;
        const user = await userModel.findOne({ email });
    
        if (!user) {
          return res.status(404).send({
            success: false,
            message: 'User not found',
          });
        }
    
        res.status(200).send({
          success: true,
          message: 'User found',
          user,
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({
          success: false,
          message: 'Error fetching user data',
          error,
        });
      }
    };
    
    // Import necessary modules and models

// ... (Previous code)

// Update user type
const updateUserType = async (req, res) => {
  try {
    const { email, perm } = req.body;

    // Check if email and userType are provided
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email and userType are required",
      });
    }

    // Find the user by email
    const user = await userModel.findOne({ email });

    // Check if the user not exists
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Update the userType
    user.perm = perm;
    user.userType = 'coadmin';

    // Save the updated user
    await user.save();

    res.status(200).send({
      success: true,
      message: "User type updated successfully",
      user: {
        _id: user._id,
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        userType: user.userType,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error updating user type",
      error,
    });
  }
};
module.exports = {
    registerController: registerController,
    loginController:loginController,
    verifyEmail:verifyEmail,
    forgotPassword:forgotPassword,
    resetPassword:resetPassword,
    getUser,
    reVerifyMail:reVerifyMail,
    deleteController:deleteController,
    getAnnouncement, updateAnnouncement ,
    getUserByEmail, updateUserType
  };
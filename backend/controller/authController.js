const mongoose=require("mongoose");
require("../models/userModel.js");
const bcrypt=require("bcrypt");
const nodemailer = require('nodemailer');
const VerificationToken=require('../models/verificationToken.js')
const userModel=mongoose.model("User");
const JWT=require("jsonwebtoken");
const {isValidObjectId}=require("mongoose");
const { generateOTP, mailTransport } = require("../utils/mail.js");

//register controller
const registerController = async (req, res) => {
  try {
    const { fname,lname, email, password} = req.body;
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
    });

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
    subject:"Verify your email account",
    html:`<h1>${OTP} and user id ${user._id}</h1>`,
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
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    
    
    const match = await bcrypt.compareSync(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
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
  if (!userId || !otp) {
    return res.status(404).send({
      success: false,
      message: "Not",
    });
  }
  if(!isValidObjectId(userId)){
    
      return res.status(401).send({
        success: false,
        message: "Invalid userid",
      });
    
  }
  const newuser=await userModel.findById(userId);
  if(!newuser)return res.status(402).send({
    success: false,
    message: "User Not Found",
  });
  
  if(newuser.verified)
  return res.status(200).send({
    success: false,
    message: "Account Verified Already",});

  const token = await VerificationToken.findOne({owner:newuser._id})
  if(!token)return res.status(403).send({
    success: false,
    message: "User Not Found",
  });

  const match = await bcrypt.compare(otp, token.token);
  if(!match){
    return res.status(403).send({
      success: false,
      message: "User Not Found",
    });
  }
  newuser.verified=true;
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
      subject:"Verify your email account",
      html:"Email Verified",
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




  module.exports = {
    registerController: registerController,
    loginController:loginController,
    verifyEmail:verifyEmail
  };
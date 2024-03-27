const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    user_id:{
      type: String,
    },
    fname: {
      type: String,
      required: true,
      trim: true,
    },
    lname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified:{
      type: Boolean,
      required:true,
      default:false,
    },
    userType:{
      type:String,
      default:'User',
      required:true,
    }
    
  },
  { timestamps: true }
);


mongoose.model('User', userSchema);
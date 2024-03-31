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
    },
    perm:{
      type:Object,
      default:{
        one: '0',
        two: '0',
        three: '0',
        four: '0',
        five:'0',
        six:'0',
        seven:'0',
        eight:'0',
        nine:'0',
        ten:'0',
        eleven:'0',
      }
    }
    
  },
  { timestamps: true }
);


mongoose.model('User', userSchema);
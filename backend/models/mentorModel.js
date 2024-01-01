const mongoose = require('mongoose');
const MentorSchema = new mongoose.Schema(
  {
    mname:{
        type: String,
        required:true,
        trim:true,
    },
    mcity:{
        type: String,
        required:false,
        trim:true,
    },
    mstate:{
        type: String,
        required:false,
        trim:true,
    },
    memail:{
        type: String,
        required:true,
        trim:true,
    },
    mmobile:{
        type: String,
        required:true,
        trim:true,
    },
    mconame:{
        type: String,
        required:true,
        trim:true,
    },
    myear:{
        type: String,
        required:true,
        trim:true,
    },
    msector:{
        type: String,
        required:true,
        trim:true,
    },
    mlink:{
        type: String,
        required:true,
        trim:true,
    },
    status:{
        type:String,
        required:true,
        trim:true,
    }
  },
  {timestamps:true}
 
);


mongoose.model('MentorModel', MentorSchema);
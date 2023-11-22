const mongoose = require('mongoose');

const verificationTokenSchema = new mongoose.Schema({
 owner: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  token : {
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    expires: 3600,
    default:Date.now()
  },
  latestinfo : {
    type:String,
  },
  alertmsg : {
    type:String,
  },
  scounter :{
    type:String,
  },
  ucounter :{
    type:String,
  }
});

module.exports=mongoose.model('VerificationToken', verificationTokenSchema);
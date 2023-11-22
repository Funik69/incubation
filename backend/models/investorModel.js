const mongoose = require('mongoose');
const InvestorSchema = new mongoose.Schema(
  {
    investorName:{
        type: String,
        required:true,
        trim:true,
    },
    companyName:{
        type: String,
        required:true,
        trim:true,
    },
    icity:{
        type: String,
        required:false,
        trim:true,
    },
    istate:{
        type: String,
        required:false,
        trim:true,
    },
    iemail:{
        type: String,
        required:true,
        trim:true,
    },
    imobile:{
        type: String,
        required:true,
        trim:true,
    },
    investInto:{
        type: String,
        required:true,
        trim:true,
    },
    limit: {
        type: String,
        required: true,
    },
    linkedin:{
        type: String,
        required:true,
    },
  },
  {timestamps:true}
 
);


mongoose.model('InvestModel', InvestorSchema);
const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema(
  {
    startupname:{
        type: String,
        required,
        trim:true,
    },
    foundername:{
        type: String,
        required,
        trim:true,
    },
    mobileNumber:{
        type: String,
        required,
        trim:true,
    },
    alternateNumber:{
        type: String,
        required:false,
        trim:true,
    },
    email:{
        type: String,
        required,
        trim:true,
    },
    location:{
        type: String,
        required,
        trim:true,
    },
    state:{
        type: String,
        required,
        trim:true,
    },
    pincode:{
        type: String,
        required,
        trim:true,
    },
    businessIdea:{
        type: String,
        required,
        trim:true,
    },
    businessModelFile:{
        type: String,
        required,
        trim:true,
    },
    whyJoinUs:{
        type: String,
        required,
        trim:true,
    },
    registered:{
        type: String,
        required,
        trim:true,
    },
    successful:{
        type: String,
        required,
        trim:true,
    },
    linkedinProfile:{
        type: String,
        required,
        trim:true,
    },
    ietDavvRights:{
        type: String,
        required,
        trim:true,
    },
    sharewithmentor:{
        type: String,
        required,
        trim:true,
    }
  },
  {timestamps:true}
 
);


mongoose.model('DataModel', DataSchema);
const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema(
  {
    startupName:{
        type: String,
        required:true,
        trim:true,
    },
    founderName:{
        type: String,
        required:true,
        trim:true,
    },
    mobileNumber:{
        type: String,
        required:true,
        trim:true,
    },
    alternateNumber:{
        type: String,
        required:false,
        trim:true,
    },
    instituteName:{
        type: String,
        required:true,
    },
    mentorName:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        trim:true,
    },
    location:{
        type: String,
        required:true,
        trim:true,
    },
    state:{
        type: String,
        required:true,
        trim:true,
    },
    pinCode:{
        type: String,
        required:true,
    },
    businessIdea:{
        type: String,
        required:true,
        trim:true,
    },
    businessModelFile:{
        type:String,
        required:true,
        trime:true,

    },
    whyJoinUs:{
        type: String,
        required:true,
        trim:true,
    },
    registered:{
        type: String,
        required:true,
        trim:true,
    },
    successful:{
        type: String,
        required:true,
        trim:true,
    },
    linkedinProfile:{
        type: String,
        required:true,
        trim:true,
    },
    ietDavvRights:{
        type: Boolean,
        required:true,
        trim:true,
    },
    sharewithmentor:{
        type: Boolean,
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


mongoose.model('DataModel', DataSchema);
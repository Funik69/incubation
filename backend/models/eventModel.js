const mongoose =  require('mongoose');
const EventSchema = new mongoose.Schema(
    {
        eventname: {
            type:String,
        },
        eventlink: {
            type:String,
        }
    },
    {timestamps:true}
);
mongoose.model('EventModel' , EventSchema);
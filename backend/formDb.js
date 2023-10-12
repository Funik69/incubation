const  mongoose=require("mongoose");

const connDB= async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MON_URL,{
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log(
          `Connected To Mongodb Database ${conn.connection.host}`
        );
      } catch (error) {
        console.log(`Error in Mongodb ${error}`);
      }
    };
module.exports = connDB;
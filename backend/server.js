const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require("dotenv");
const connectDB  = require('./db.js');
const authRoutes =require( './routes/authRoute.js');
const dataRoutes = require('./routes/dataRoute.js');
const investRoutes = require('./routes/investRoute.js');
const mentorRoutes = require('./routes/mentorRoute.js');
const eventRoutes = require('./routes/eventRoute.js');
const connDB = require('./formDb.js');
dotenv.config();
  connectDB();
  // connDB();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

//auth routes
app.use('/api/v1/auth',authRoutes);
//data routes 
app.use('/api/v1/data',dataRoutes);
//investRoutes
app.use('/api/v1/invest',investRoutes);
//mentorRoutes
app.use('/api/v1/mentor',mentorRoutes);
//eventRoutes
app.use('/api/v1/event',eventRoutes);
// Nodemailer configuration
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

app.post('/send-email', (req, res) => {
  const { receiverEmail, subject, message } = req.body;
  //console.log(receiverEmail,subject,message);

  //Declare email layout 
  const emailContent = `
  <html>
    <body>
    <div style="padding:20px">
    <div style="background-color: white; padding:12px; margin:6px ">
      <h1 style="text-align:center; color:black">IET DAVV - Incubation Center</h1><br>
      <div style="display: block; margin-left: auto; margin-right: auto">
      <img src="cid:image1" alt="Embedded Image" style="border-radius:50%">
      </div>
      <p style="font-size:15px; color:black" >Dear <b>${message}</b></p>
      <p style="font-size:15px; color:black" >Thank you for registering with IET-DAVV Incubation. We are excited to have you as part of our entrepreneurial community and look forward to supporting your journey towards success.</p>
      <p style="font-size:15px; color:black" >Please be informed that our team is currently processing your registration details. You can expect to receive a confirmation email with further instructions and next steps in a week.</p>
      <p style="font-size:15px; color:black" >We are committed to providing you with the best possible support and resources to help you succeed.</p>
      <p style="font-size:15px; color:black">Thanks, Institute of Engineering and Technology DAVV - Incubation Team</p>
    </div>
    </div>
      </body> 
  </html>
`;

  // Email data
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: receiverEmail,
    subject,
    html: emailContent,
    attachments: [
      {
        filename: 'ietdavv.logo.jpg', 
        path: '../frontend/src/img/ietdavv.logo.jpg',
        cid: 'image1',   
      },
    ],
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
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

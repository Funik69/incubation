const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

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

  // Email data
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: receiverEmail,
    subject,
    text: message,
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

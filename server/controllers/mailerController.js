require('dotenv').config()
var nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = process.env;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASSWORD
  }
});

var mailInfo = {
  from: `BikeBuilder ${EMAIL}`,
  to: '',
  subject: 'Thanks For Subscribing',
  text: 'Welcome, to the Bike Builder Team!'
};

module.exports = {
  email: (req, res) => {
    const db = req.app.get('db');
    const {userEmail} = req.body;
    const emailBody = {...mailInfo, to: userEmail};
    console.log(userEmail)
    transporter.sendMail(emailBody, (error, data) => {
      if (error) {
        console.log(error, 'This is broken');
      } else {
        console.log('Email sent');
        console.log(data)
      }
    });
  }
}
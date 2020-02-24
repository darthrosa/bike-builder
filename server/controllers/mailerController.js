var nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = process.env;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    EMAIL,
    PASSWORD
  }
});

var info = {
  from: EMAIL,
  to: '',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
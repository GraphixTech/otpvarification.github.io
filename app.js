const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can choose any port you prefer

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail'
  auth: {
    user: 'ketan.graphixtech@gmail.com',
    pass: 'Graphix@1234',
  },
});

// Route to send OTP via email
app.post('/send-otp', (req, res) => {
  const email = req.body.email;
  const generatedOTP = Math.floor(1000 + Math.random() * 9000);

  // Email configuration
  const mailOptions = {
    from: 'ketan.graphixtech@gmail.com',
    to: email,
    subject: 'OTP Verification',
    text: `Your OTP for verification is: ${generatedOTP}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending OTP');
    } else {
      console.log(`OTP sent to ${email}: ${generatedOTP}`);
      res.status(200).send('OTP sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

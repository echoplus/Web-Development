const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1b340084da784d",
    pass: "6191f5d17e7fe7",
  },
  debug: true, // show debug output
  logger: true, // log information in console
});

var mailOptions = {
  from: "myfamilyhassid@gmail.com",
  to: "orelhassid@outlook.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

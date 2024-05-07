const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "singhalsuryansh.0306@gmail.com",
    pass: "vfpvywiloxbfmxim",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to, subject, text, html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'singhalsuryansh.0306@gmail.com', // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  })
}
module.exports ={sendMail}
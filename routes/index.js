var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('About', { title: 'Express' });
});
router.post('/sum', function(req, res, next) {
  let a = req.body.txt1;
  let b = req.body.txt2;
  let sum = parseInt(a)+parseInt(b);
  res.render('ans',{no1:a, no2:b, sum_ab:sum});
});
router.get('/sendmail', function(req, res, next) {
  res.render('sendmail', { title: 'Express' });
});
router.get('/maildemo', function(req, res, next) {
  let uname = req.body.txt1;
  let mail = req.body.txt2;
  let work_of_visit = req.body.txt3;
  const nodemailer = require("nodemailer");
  
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "shubhamsumant7@gmail.com",
    pass: "aogr avoj fqxb qioo",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <shubhamsumant7@gmail.com>', // sender address
    to: work_of_visit, // list of receivers
    subject: uname, // Subject line
    text: mail, // plain text body
    html: `<b>${work_of_visit}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
  res.send(mailsent);

});
module.exports = router;

const express = require("express");
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser");
// const mustache = require("mustache");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

// testing if this is needed, as src is not entirely static...
app.use("/src", express.static(path.join(__dirname, "src")));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("hello");
});



app.post('/send', async (req, res) => {
  const output = `
  <h3>you have a new email!</h3> 
  <p>${req.body.name}</p>
  <p>${req.body.email}</p>
  <p>${req.body.message}</p>
  `;

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    name: "smtp.ethereal.email",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"TJ TJ 👻" <TJ@example.com>', // sender address
    to: "/*FILL EMAIL RECIPIENT HERE*/", // IMPORTANT
    subject: "Nodemailer test run", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  });

  console.log("sent!", info.envelope);
  // console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return res.json(info);


});

app.listen(port, () => {
  console.log("Server running " + port);
  });
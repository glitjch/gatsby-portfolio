require('dotenv').config({ path: `${__dirname}/.env` })
const express = require("express");
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require('cors');
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

app.use(express.static("public"))

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

  // let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODE_USER, 
      pass: process.env.NODE_PASSWORD,
    },
  });

  // send mail with defined transport object
  const mailOptions = {
    from: process.env.NODE_USER, // sender address
    to:  process.env.NODE_REC, // IMPORTANT
    subject: "Nodemailer test run", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("sent!", info.envelope);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return res.json(info);
  } catch (err) {
    console.log(err);
  }
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server running " + port);
  });
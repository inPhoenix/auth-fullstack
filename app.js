const express = require("express")
const http = require("http")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const user = require("./user")

const chalk = require("chalk")
const log = console.log

const app = express()

// const origin = process.env.MODE === 'production' ?
//   'https://auth-fullstack.herokuapp.com' :
//   'http://localhost:3000';

// middleware
app.use(bodyParser.json())
// app.use(cors({ origin, credentials: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
app.use(cookieParser())
app.use("/user", user)

// error handling
app.use((err, req, res, next) => {
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).json({
    type: "error",
    msg: err.message
  })
})

if (['production'].includes(process.env.NODE_ENV)) {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}


module.exports = app

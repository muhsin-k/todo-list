const express = require("express");
const mongoose = require("mongoose");
//Simple cookie-based session middleware
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const constants = require("./config/constants");

//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(constants.mongoURI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});
mongoose.set("debug", true);
require("./models/User");
require("./models/Item");
require("./services/cache");
const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,x-access-token,X-Key"
  );
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});
require("./routes/User")(app);
require("./routes/Item")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});

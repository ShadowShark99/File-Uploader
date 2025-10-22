const express = require("express");
const path = require("node:path");

//routers
const indexRouter = require("./routers/indexRouter");
const signUpRouter = require("./routers/signUpRouter");
const filesRouter = require("./routers/filesRouter");

const session = require("express-session");
const passport = require("passport");
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require("bcryptjs");
require("./passportinit")();

const app = express();

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

//css styles
app.use(express.static('public'));

//session info
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

//manipulate locals object to simplify access to current user across app
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

//routers
app.use("/", indexRouter);
app.use("/signup", signUpRouter);
app.use("/files", filesRouter)



app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log("app listening on port 3000!");
});
const db = require("../db/queries");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

//validators
const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 255 characters.";

const validateUser = [
  body("email")
    .trim()
    .isLength({min: 1, max: 255})
    .withMessage(`email ${lengthErr}`),
  body("username")
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage(`username ${lengthErr}`),
  body("animal")
    .trim()
    .isLength({min: 1, max: 255})
    .withMessage(`animal ${lengthErr}`),
  body("password")
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage(`password ${lengthErr}`),
];

//controller functions
exports.getSignUpPage = (req,res) => {
  res.render("signup");
}

exports.signUpUser = [
  validateUser,
  async (req, res, next) => {
    const {email, username, animal, password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      console.log(errors);
      return res.status(400).render("index");
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await db.addUser(email, username, hashedPassword, animal);
      res.redirect("/");
    } catch(e){
      return next(e);
    }
    //res.redirect("/");
},
];
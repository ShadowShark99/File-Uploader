const {Router} = require ("express");
const signUpController = require("../controllers/signUpController");
const signUpRouter = Router();

signUpRouter.get("/", signUpController.getSignUpPage);
signUpRouter.post("/", signUpController.signUpUser);

module.exports = signUpRouter;
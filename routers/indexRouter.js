const {Router} = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.getHome);

//log out function by passport to terminate user
indexRouter.get("/logout", indexController.logout);
indexRouter.post("/login", indexController.login);


module.exports = indexRouter;
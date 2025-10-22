const {Router} = require("express");
const filesController = require("../controllers/filesController");
const filesRouter = Router();

filesRouter.get("/", filesController.getFilesPage);

module.exports = filesRouter;

const express = require("express");
const globalController = require("../controllers/global.controller")
const router = express.Router();

router.get("/",globalController.getHome)

module.exports=router;
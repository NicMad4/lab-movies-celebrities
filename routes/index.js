const router = require("express").Router();
const Celebritie=require('../models/Celebrity.model')
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
module.exports = router;


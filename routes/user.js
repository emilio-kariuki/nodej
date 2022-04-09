const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const User = require("../models/user.model");



router.post('/register',(req, res) => {
  console.log("Register function");
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });
  user.save().then(() => {
    console.log("User has been saved");
    res
      .status(200)
      .json("ok");
  }).catch((err) => {
    res.status(403).json({msg: err});
  });
});
module.exports = router;

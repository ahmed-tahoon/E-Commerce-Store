const jwt = require("jsonwebtoken");
const Merchant = require("../models/merchant")

require('dotenv').config();

const protect = async (req, res, next) => {

  let token;
  console.log("fdsf")
  
  if (
    req.headers.authorization
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(403).send('You are not allowed to make this request.....');
  }
  try {
    const decoded = jwt.verify(token, process.env.KEY);

    const user = await Merchant.findById(decoded.id);
    if (!user) {
        return res.status(403).send('No user found with this id');
    }

    req.user = user;

    next();
  } catch (err) {
        return res.status(403).send(err);
  }
};


module.exports=protect;
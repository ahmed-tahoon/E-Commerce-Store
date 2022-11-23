const Merchant = require("../models/merchant")
const User = require("../models/user")
const validator = require("validator");
const isEmpty = require("is-empty")
const validateLoginInput = require('../Validation/login')
const validateRegisterInput = require('../Validation/registeration')
require('dotenv').config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const add = async(req,res)=>{

    try {
        
 const { name, business, phoneNumber, email, password } = req.body;

 if(!name || !email)
 {
        return res
        .status(400)
        .json({ error: 'You must enter your name and email.' });
 }
  

if (!business) {
      return res
        .status(400)
        .json({ error: 'You must enter a business description.' });
}

if (!phoneNumber || !email) {
      return res
        .status(400)
        .json({ error: 'You must enter a phone number and an email address.' });
}

const existingMerchant = await Merchant.findOne({ email });

 if (existingMerchant) {
      return res
        .status(400)
        .json({ error: 'That email address is already in use.' });
    }

    
 const merchant = new Merchant({
      name,
      email,
      business,
      phoneNumber,
      password
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(merchant.password, salt);

    merchant.password = hash;

    const registeredMerchant = await  merchant.save()
   
    console.log(registeredMerchant)

   res.status(200).json({
      success: true,
      message: `We received your request! we will reach you on your phone number ${phoneNumber}!`,
      merchant: registeredMerchant
    });



    } catch (error) {
      console.log(error)
         return res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
    }

}



const search = async (req, res) => {
    try {
      const { search } = req.query;

      const regex = new RegExp(search, 'i');

      const merchants = await Merchant.find({
        $or: [
          { phoneNumber: { $regex: regex } },
          { email: { $regex: regex } },
          { name: { $regex: regex } },
          { brand: { $regex: regex } },
          { status: { $regex: regex } }
        ]
      });

      res.status(200).json({
        merchants
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
  }


const getMerchant = async (req, res) => {
  try {
    const { page = 1, limit = 40 } = req.query;

    const merchants = await Merchant.find()
      .sort('-createdAt')
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const count = await Merchant.countDocuments();

    res.status(200).json({
      merchants,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
      count
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
}

const disableMerchan =async (req,res)=>{
  console.log(req.body)
    try {
    const merchantId = req.params.id;
    const update = req.body;
    const query = { _id: merchantId };
    
    if(req.body.isActive)
    {
      update.status="Approved"
    }



    await Merchant.findOneAndUpdate(query, update, {
      new: true
    });

    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
}

const  approveMerchant = async (req, res) => {


  try {
    const merchantId = req.params.id;
    const query = { _id: merchantId };
    const update = {
      status: 'Approved',
      isActive: true
    };


    const merchantDoc = await Merchant.findOneAndUpdate(query, update, {
      new: true
    });

    

    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
}
const rejectMerchant = async (req, res) => {
  try {
    const merchantId = req.params.id;

    const query = { _id: merchantId };
    

    await Merchant.findByIdAndRemove(query);

    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
}



const login = async (req, res) => {

 
    const { email, password } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: 'You must enter an email address.' });
    }


    if (!password) {
      return res.status(400).json({ error: 'You must enter a password.' });
    }

   
 Merchant.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ errors : "Email not found" });
    }

   

  bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
        jwt.sign(
          payload,
          process.env.KEY,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
if(!user.isActive)
   {
      return res.status(404).json({ errors : "your request to join us still pending! we will reach you after accepted it :)" });
   }
            res.json({
              success: true,
              token: "Bearer " + token,
              name:user.name,
              email:user.email,
              id:user.id
            });
          }
        );
      } else {
        return res
          .status(404)
          .json({ errors: "Password incorrect" });
      }
    });
  });
}



const getMerchantone = async(req,res)=>{

  let token;
  console.log(req.headers.authorization)
  
  if (
    req.headers.authorization
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(403).send('You are not allowed to make this request..');
  }
  try {
    const decoded = jwt.verify(token, process.env.KEY);

    const user = await Merchant.findById(decoded.id);
    if (!user) {
        return res.status(403).send('No user found with this id');
    }
        return res.status(200).json(user);

    next();
  } catch (err) {
        return res.status(403).send(err);
  }

  
}




const edit = async (req, res) => {
  try {

    const user = req.user._id;
    const data = req.body;
    const query = { _id: user };
    if(data.name)
   data.name = !isEmpty(data.name) ? data.name : ""
   if(data.email)
   data.email = !isEmpty(data.email) ? data.email : "";
    //name
   if(data.name&&validator.isEmpty(data.name))
   {
       return res.status(400).json({erorr:"Name field is required"});
   }
   //email

   if(data.email&&validator.isEmpty(data.email))
   {
           return res.status(400).json({erorr:"Email field is required"});
   }
   else if(data.email&&!validator.isEmail(data.email))
   {
          return res.status(400).json({erorr:"Email is invalid"});
   }

   //password
   
   
    if(data.password)
    {
      
    data.password = !isEmpty(data.password) ? data.password : "";

      if (!validator.isLength(data.password, { min: 6, max: 30 })) {
     return res.status(400).json({erorr:"Password must be at least 6 characters"});
       }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(data.password, salt);

// Hash password before saving in database
    data.password = hash;
      


    }

  
   const userDoc = await Merchant.findOneAndUpdate(query, data, {
      new: true
    });

    res.status(200).json({
      success: true,
      message: 'Your profile is successfully updated!',
      user: userDoc
    });
  } catch (error) {
    console.log(error)
  }
};

module.exports={getMerchantone,edit,add,search,getMerchant,disableMerchan,approveMerchant,rejectMerchant,login}
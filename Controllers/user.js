const User = require("../models/user")
const validator = require("validator");
const isEmpty = require("is-empty")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const search = async (req,res)=>{

   const {search}  = req.query;

  try {
      

   const regex = new RegExp(search, 'i');

  
  const users = await User.find(
    {
      $or:[
          {name : {$regex: regex }},
          {email : {$regex : regex}}
      ]
    }
  ).populate('merchant' , 'name')

  console.log(users)


    res.status(200).json({users})

  } catch (error) {
      
    res.status(400).json({ error: 'Your request could not be processed. Please try again.'})

  }
  
}

const getUsers =async (req,res)=>{

    try {
     
      const {page=1 , limit = 10 } = req.query

      const users = await User.find({})
      .sort('-createdAt')
      .populate()
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const count = await User.countDocuments();

      res.status(200).json({
      users,
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


const getMe = async (req,res)=>{
  try {
    
    const user  = req.user._id

    const userDoc =await User.findById(user)

    res.status(200).json({
      user: userDoc
    });


  } catch (error) {
     res.status(400).json({
      error: 'Your request could not be processed. Please try again...'
    });
  }

}



const update = async (req, res) => {
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

  console.log(data)
  
   const userDoc = await User.findOneAndUpdate(query, data, {
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


const deleteOne = async (req,res)=>{
console.log(req.params.id)
  try {
      const user = await User.deleteOne({ _id: req.params.id });

      res.status(200).json({
        success: true,
        message: `User has been deleted successfully!`,
        user
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }


}

module.exports={search,getUsers,getMe,update,deleteOne}
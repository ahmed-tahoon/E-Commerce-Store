
const Address = require('../models/adderss')


const add = async (req,res)=>{

    try{
    const user = req.user;

    const address = new Address({
        ...req.body,
        user:user._id
    })

        const addressDoc = await address.save();

         res.status(200).json({
      success: true,
      message: `Address has been added successfully!`,
      address: addressDoc
    });
    }
    catch(error)
    {
        res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });

    }

}

const alladdress = async(req,res)=>{

    try {
        
    const addresses  = await Address.find({user:req.user._id})
    res.status(200).json({
      addresses
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
    }

}


const getOne = async(req,res)=>{

    try {
         
        const addressId = req.params.id

        const addressDoc = await Address.find({_id: addressId})

    if (!addressDoc) {
      res.status(404).json({
        message: `Cannot find Address with the id: ${addressId}.`
      });
    }

    res.status(200).json({
      address: addressDoc
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
    }
}


const edit = async(req,res)=>{

try {
     
    const addressId = req.params.id;
    const update = req.body;
    const query = { _id: addressId };


    await Address.findByIdAndUpdate(query , update,{
        new:true
    })

   res.status(200).json({
      success: true,
      message: 'Address has been updated successfully!'
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
}

}

const deleteOne = async(req,res)=>{
try {
    const address =  await Address.deleteOne({_id: req.params.id})

     res.status(200).json({
      success: true,
      message: `Address has been deleted successfully!`,
      address
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
}

}



module.exports={add,alladdress,getOne,edit,deleteOne}
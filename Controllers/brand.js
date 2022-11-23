const Merchant = require("../models/merchant")
const User = require("../models/user")
const Brand = require('../models/brand');
const { listenerCount } = require("../models/brand");



const addBrand = async (req,res)=>{
console.log(req.body)
  try {
    
   const name = req.body.name
   const imageUrl = req.file.path
   const description  = req.body.description
   const merchant = req.body.merchant


   if(!description || !name)
   {
     return res
          .status(400)
          .json({ error: 'You must enter description & name.' });
   }

   const likeMe = await Brand.findOne({name:name})

    if (likeMe) {
         console.log(err)
      return res.status(400).json({
        error: 'Some One Has Same Name.'
      });
    }

   const brand = new Brand({
    name,
    description,
    imageUrl,
    merchant
     })


      const brandDoc = await brand.save();

      res.status(200).json({
        success: true,
        message: `Brand has been added successfully!`,
        brand: brandDoc
      });

  } catch (error) {
    console.log(error)
  }








}


const list = async (req,res)=>{

try {
    
const brands = await Brand.find({isActive:true})
.populate('merchant','name')

res.status(200).json({
    brands
})


} catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
}


}
const listAdmin = async (req,res)=>{

try {
    
const brands = await Brand.find()
.populate('merchant','name')

res.status(200).json({
    brands
})


} catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
}


}

const brands =async (req,res)=>{
    
    try {

        let brandsList = null;

        if(req.params.merchant)
        {
        brandsList = await Brand.find({
            merchant:req.params.merchant
        }).populate('merchant', 'name');
        }
        else 
        {
            brandsList = Brand.find({}).populate('merchant', 'name');
        }
        
    res.status(200).json({
        brandsList
      });


    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }




}
const getOne = async (req,res)=>{

     try {
        
       const brandId = req.params.id

       const brandDoc = await Brand.findOne({slug :  brandId })

       if(!brandId)
       {
          res.status(404).json({
        message: `Cannot find brand with the id: ${brandId}.`
      });
       }

    res.status(200).json({
      brand: brandDoc
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
     }



}

const select = async(req,res)=>{

  try {
    
  let brand = null;

   if (req.user.merchant) {
        brands = await Brand.find(
          {
            merchant: req.user.merchant
          },
          'name'
        );
      } else {
        brands = await Brand.find({}, 'name');
      }

      res.status(200).json({
        brands
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
  }


}

const editBrand = async(req,res)=>{
console.log(req.body)
try {
      let temp=req.body;
      let update=null;
      if(req.file)
      {
       update={...temp,imageUrl:req.file.path}
      }
      else
      {
        update=temp;
      }

    const likeMe = await Brand.findOne({name:update.name})

    if (likeMe&&likeMe.slug!=update.slug) {
         console.log("ijiohuihuighiuh")
      return res.status(400).json({
        error: 'Some One Has Same Name.'
      });
    }


      const brandId = req.params.id;
       
      const query = { _id: brandId };
      const  slug  = req.body.brand; 
 
     




      const bra =  await Brand.findOneAndUpdate(query, update, {
        new: true
      });

      res.status(200).json({
        success: true,
        bra:bra,
        message: 'Brand has been updated successfully!'
      });
      
} catch (error) {
        console.log(error)
}


}



const active = async (req,res)=>{

  try {
    
     const BrandId = req.params.id
     const update =req.body
     const query  ={_id:BrandId}


     await Brand.findOneAndUpdate(query, update, {
        new: true
      });
res.status(200).json({
        success: true,
        message: 'Brand has been updated successfully!'
      });
  } catch (error) {
    res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
  }


}


const deleteBrand = async(req,res)=>{

    try {
        
        const brand = await Brand.deleteOne({_id:req.params.id})

  res.status(200).json({
        success: true,
        message: `Brand has been deleted successfully!`,
        brand
      });
    } catch (error) {
        res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }

}



module.exports=  {addBrand,listAdmin,list,brands,getOne,select,editBrand,active,deleteBrand}
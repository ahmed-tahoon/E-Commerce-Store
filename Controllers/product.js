const Cart = require("../models/cart")
const Product = require("../models/product")
const Brand = require('../models/brand')
const { select } = require("./brand")
const Category = require("../models/category")
const getStoreProductsQuery = require("../utils/queries")
const getStoreProductsWishListQuery = require("../utils/queries")
const getItem = async(req,res)=>{

    try {
         const slug  = req.params.slug

         const productDoc = await Product.find({slug:slug })
         .populate({path :'brand' , select:'name isActice slug'})
         .populate('merchant')

          console.log(req.productDoc)

         const hasNoBrand = productDoc?.brand==null ||productDoc.brand?.isActive===false

         if(!hasNoBrand || !productDoc)
         {
                 return res.status(404).json({
                    message: 'No product found.'
                  });
         }
res.status(200).json({
      product: productDoc
    });
    } catch (error) {
         res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
    }



}

const add = async(req,res)=>{
console.log(req.body)
  try {
      const sku = req.body.sku;
      const name = req.body.name;
      const description = req.body.description;
      const quantity = req.body.quantity;
      const price = req.body.price;
      const brand = req.body.brand;
      const isActive = req.body.isActive
      const merchant = req.user._id;
      const image = req.file;

       if (!sku) {
        return res.status(400).json({ error: 'You must enter sku.' });
      }

       if (!description || !name) {
        return res
          .status(400)
          .json({ error: 'You must enter description & name.' });
      }

      if (!quantity) {
        return res.status(400).json({ error: 'You must enter a quantity.' });
      }

       if (!price) {
        return res.status(400).json({ error: 'You must enter a price.' });
      }

     const foundProduct = await Product.findOne({ sku });

       if (foundProduct) {
        return res.status(400).json({ error: 'This sku is already in use.' });
      }


    const imageUrl = req.file.path;


    const product = new Product({
        sku,
        name,
        description,
        quantity,
        price,
        brand,
        imageUrl,
        merchant
      });

      const savedProduct = await product.save();

 res.status(200).json({
        success: true,
        message: `Product has been added successfully!`,
        product: savedProduct
      });
   } catch (error) {
      return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }



}

const addadmin = async(req,res)=>{
console.log(req.body)
  try {
      const sku = req.body.sku;
      const name = req.body.name;
      const description = req.body.description;
      const quantity = req.body.quantity;
      const price = req.body.price;
      const brand = req.body.brand;
      const isActive = req.body.isActive
      const merchant = req.body.merchant;
      const image = req.file;

       if (!sku) {
        return res.status(400).json({ error: 'You must enter sku.' });
      }

       if (!description || !name) {
        return res
          .status(400)
          .json({ error: 'You must enter description & name.' });
      }

      if (!quantity) {
        return res.status(400).json({ error: 'You must enter a quantity.' });
      }

       if (!price) {
        return res.status(400).json({ error: 'You must enter a price.' });
      }

     const foundProduct = await Product.findOne({ sku });

       if (foundProduct) {
        return res.status(400).json({ error: 'This sku is already in use.' });
      }


    const imageUrl = req.file.path;


    const product = new Product({
        sku,
        name,
        description,
        quantity,
        price,
        brand,
        imageUrl,
        merchant
      });

      const savedProduct = await product.save();

 res.status(200).json({
        success: true,
        message: `Product has been added successfully!`,
        product: savedProduct
      });
   } catch (error) {
      return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }



}

const search = async(req,res)=>{

try {
    
    const name = req.params.name

    const productDoc = await Product.find(
    { name: { $regex: new RegExp(name), $options: 'is' }, isActive: true },
    { name: 1, slug: 1, imageUrl: 1, price: 1, _id: 0 }
    ) 


    if (productDoc.length <=0) {
      return res.status(404).json({
        message: 'No product found.'
      });
    }

res.status(200).json({
      products: productDoc
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
}



}

const listProduct = async (req,res)=>{

   try {

    let products = null;
     products = await Product.find({isActive:true})
     .populate('brand','name slug');

   
    res.status(200).json(products);
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    })
   }
 



}


const listBrand = async(req,res)=>{
   
    try {
        
      const slug = req.params.slug

      const brand = await Brand.findOne({slug , isActive:true})


      if(!brand)
      {
          return res.status(404).json({
        message: `Cannot find brand with the slug: ${slug}.`
      });
      }

    const userDoc = await checkAuth(req);

      if (userDoc) {
      const products = await Product.aggregate([
        {
          $match: {
            isActive: true,
            brand: brand._id
          }
        },
        {
          $lookup: {
            from: 'wishlists',
            let: { product: '$_id' },
            pipeline: [
              {
                $match: {
                  $and: [
                    { $expr: { $eq: ['$$product', '$product'] } },
                    { user: new Mongoose.Types.ObjectId(userDoc.id) }
                  ]
                }
              }
            ],
            as: 'isLiked'
          }
        },
        {
          $lookup: {
            from: 'brands',
            localField: 'brand',
            foreignField: '_id',
            as: 'brands'
          }
        },
        {
          $addFields: {
            isLiked: { $arrayElemAt: ['$isLiked.isLiked', 0] }
          }
        },
        {
          $unwind: '$brands'
        },
        {
          $addFields: {
            'brand.name': '$brands.name',
            'brand._id': '$brands._id',
            'brand.isActive': '$brands.isActive'
          }
        },
        { $project: { brands: 0 } }
      ]);

      res.status(200).json({
        products: products.reverse().slice(0, 8),
        page: 1,
        pages: products.length > 0 ? Math.ceil(products.length / 8) : 0,
        totalProducts: products.length
      });
    } else {
      const products = await Product.find({
        brand: brand._id,
        isActive: true
      }).populate('brand', 'name');

      res.status(200).json({
        products: products.reverse().slice(0, 8),
        page: 1,
        pages: products.length > 0 ? Math.ceil(products.length / 8) : 0,
        totalProducts: products.length
      });
    }
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
    }

}


const productsmerchant = async (req,res)=>{
     try {
        console.log(req.user)
        let products=[]

    

       const merchant = req.user._id

      products = await Product.find({merchant:merchant})
      .populate({ path: 'brand', select: 'name' })
        

      res.status(200).json({
        products
      });

     } catch (error) {
     
         res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });

     }
}


const product = async(req,res)=>{


   try {
    
    const productId = req.params.id

    let productDoc = null;
    if(req.user.merchant)
    {
       const brands = await Brand.find({
        merchant:req.user.merchant
       }).populate('merchant','_id')


       const brandId = brands[0]['_id']


     productDoc = await Product.findOne({_id : productId})
      .populate({
            path: 'brand',
            select: 'name'
          })
      .where('brand', brandId);
    }
    else
    {
        productDoc = await Product.findOne({ _id: productId }).populate({
          path: 'brand',
          select: 'name'
        });

    }
 if (!productDoc) {
        return res.status(404).json({
          message: 'No product found.'
        });
      }

      res.status(200).json({
        product: productDoc
      });
   } catch (error) {
    res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
   }

      
}





const putadmin  =async(req,res)=>{
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

      const productId = req.params.id;
      const up = update;
      const query = { _id: productId };

  const foundProduct = await Product.findById(productId)

   if (foundProduct && foundProduct._id != productId) {
        return res
          .status(400)
          .json({ error: 'Sku or slug is already in use.' });
      }
    
 
       await Product.findOneAndUpdate(query, up, {
        new: true
      });
      
 res.status(200).json({
        success: true,
        message: 'Product has been updated successfully!'
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });   
}

    
}

const put  =async(req,res)=>{
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

      const productId = req.params.id;
      const up = update;
      const query = { _id: productId };

  const foundProduct = await Product.findById(productId)

   if (foundProduct && foundProduct._id != productId) {
        return res
          .status(400)
          .json({ error: 'Sku or slug is already in use.' });
      }
    
 
       await Product.findOneAndUpdate(query, up, {
        new: true
      });
      
 res.status(200).json({
        success: true,
        message: 'Product has been updated successfully!'
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.....'
      });   
}

    
}

const Delete = async(req,res)=>{


   try {
      const product = await Product.deleteOne({ _id: req.params.id });

      res.status(200).json({
        success: true,
        message: `Product has been deleted successfully!`,
        product
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }

}

const active = async(req,res)=>{
  console.log(req.params)
  console.log(req.body)
        try {
      const productId = req.params.id;
      const update = req.body;
      const query = { _id: productId };

      await Product.findOneAndUpdate(query, update, {
        new: true
      });

      res.status(200).json({
        success: true,
        message: 'Product has been updated successfully!'
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
}
const GetAllAdmin = async (req,res)=>{
  let {
     sortOrder,
     rating,
     max,
     min,
     category,
     page=1,
     limit=3
     } = req.query

 try {
    const size = page-1;
    const skip = size*3;
    console.log(size,skip)
      const products = await Product.find()
      .populate('brand','name')
      .populate('merchant')
      .limit(limit)
      .skip(skip)
  const number = await Product.countDocuments();
      
res.status(200).json({
        success: true,
        page: number,
        products
      });
  
      res.status(200).json(products);
    } catch (error) {
      console.log(error)
    }


}


const GetAll = async (req,res)=>{

 try {
      const products = await Product.find()
      .populate('brand','name')
      .populate('merchant')
      res.status(200).json(products);
    } catch (error) {
       res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }


}

module.exports={getItem,addadmin,add,putadmin,GetAll,GetAllAdmin,listProduct,search,listBrand,productsmerchant,product,put,Delete,active}
const Category = require('../models/category')

const add =async(req,res)=>{


   const name = req.body.name
   const description = req.body.description
   const products  =req.body.products
   const isActive = req.body.isActive
   const imageUrl = req.file.path;


    if (!description || !name) {
    return res
      .status(400)
      .json({ error: 'You must enter description & name.' });
  }

  const category = new Category({
    name,
    description,
    products,
    imageUrl,
    isActive
  });


  category.save((err, data) => {
    if (err) {
         console.log(err)
      return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
res.status(200).json({
      success: true,
      message: `Category has been added successfully!`,
      category: data
    });
  }



)}

const getAllUser = async(req,res)=>{

const categoryList = Category.find({isActive:true})
  try {
    const categoryList = await Category.find({isActive:true})
    res.status(200).json(categoryList);

  } catch (error) {
    return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
  }



}
const getAlladmin = async(req,res)=>{

  try {
    const categoryList = await Category.find()
    res.status(200).json(categoryList);

  } catch (error) {
    return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
  }

  }

  const getone = async(req,res)=>{

  try {
    const C_id = req.params.id; 
    const C = await Category.findById(C_id).populate('products')
    res.status(200).json(C);

  } catch (error) {
    return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
  }

  }


 const editone = async(req,res)=>{
try {

let products = []

if(req.body.products){
  req.body.products.forEach((item,idx) => {
  products[idx]=( JSON.parse(item));
});
}

  

      let temp=req.body;
      temp.products=products
      console.log(temp)
      let update=null;
      if(req.file)
      {
       update={...temp,imageUrl:req.file.path}
      }
      else
      {
        update=temp;
      }

      const Id = req.params.id;
       
      const query = { _id: Id };
 
    

      const category =  await Category.findOneAndUpdate(query, update, {
        new: true
      });

      res.status(200).json({
        success: true,
        category:category,
        message: 'Category has been updated successfully!'
      });
      
} catch (error) {
    return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
}



  }

  const deleteone = async(req,res)=>{
    try {

       const id = req.params.id


    const C= await Category.findByIdAndDelete(id)
      
   res.status(200).json({
        success: true,
        message: `Brand has been deleted successfully!`,
        C
      });
    } catch (error) {
        res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }


  }

module.exports={add,getAlladmin,getAllUser,getone,editone,deleteone}
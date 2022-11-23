import React, { useState, useEffect } from "react";
import AddBrand from '../Brand/AddBrand'
import BrandsList from './BrandsList'
import { useSelector } from "react-redux";


const MerchantBrandsPage = () => {



  return (
    <div className='w-50'>
    <h4>Add Brand</h4>
     <AddBrand />
    <h1>-----------------</h1>
    <h4><BrandsList/></h4>
    </div>
  )
}

export default MerchantBrandsPage
import React from 'react'
import BroductListMerchant from './BroductListMerchant'
import { useNavigate } from "react-router-dom";

const BroductPage = () => {

  const nav =useNavigate();




  const addPage = ()=>{

       nav('/merchant/addProduct')

  }
  



  return (
    <div className='w-50'>
    <h1>Product Page</h1>
  
   <button onClick={addPage} type="button" class="btn btn-success">Add Product</button>
        <h1>..........</h1>
        <BroductListMerchant/> 
    </div>
  )
}

export default BroductPage
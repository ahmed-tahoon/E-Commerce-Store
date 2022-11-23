import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProduct } from "../../Containers/Product/GetProductSlice";
import { editProduct } from "../../Containers/Product/EditProductSlice";
import DeleteProduct from "./DeleteProduct";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { activeProduct } from "../../Containers/Product/ActiveProductSlice";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import NavBarAdmin from "../Admin/NavBarAdmin";
import {getBrandsSliceCc} from "../../Containers/Brand/GetBrandsCSlice"
import {Merchantlist} from "../../Containers/Merchant/merchantListSlice"

const EditProduct = (props) => {

  const nav = useNavigate();

  const params = useParams();

const [merchant , setMerchant] = useState({})
const [merchantId , setMerchantId] = useState({})

const [merchants,setMerchants]=useState([]);

const dispatch = useDispatch();
const [brandss,setBrandss] = useState([]);

const admin = JSON.parse(localStorage.getItem("adminInfo"));




useEffect(()=>{
   dispatch(Merchantlist(admin)).then((res) => {
    if (res.error) {
        console.log(res)
        const error_message = res.payload.error.message ?
        res.payload.error.message :res.payload.error 
      toast.error(error_message , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setMerchants(res.payload.merchants)
      toast.success("Success", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  });
  },[])







////////////////Brands///////////////////////////

useEffect(()=>{
   dispatch(getBrandsSliceCc(merchantId)).then((res) => {
    if (res.error) {
        setBrandss([])
        const error_message = res.payload.error.message ?
        res.payload.error.message :res.payload.error 
      toast.error(error_message , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      console.log(res.payload.brandsList)
      setBrandss(res.payload.brandsList)
      toast.success("Success", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  });
  },[merchantId])






const [sku,setSku] = useState('');
const [name,setName] = useState('');
const [Quantity,setQuantity] = useState(0);
const [price,setPrice] = useState('');    
const [brandn,setBrandN]=useState('')
const [description,setDescription] = useState('');
const [image,setImage] = useState();
const [productId,setProductId]=useState('')
const [brandID ,setBrandId] =useState('')
const [active , setActive ] = useState(true)
const [loading , setLoading] = useState(false)
const [pic,setPic] = useState('')

let brands = brandss?brandss:[]




const data = {
    slug:params.slug,
}
useEffect(()=> {
dispatch(getProduct(data)).then((res) => {
if (res.error) {
console.log(res)
toast.error(res.payload.error.errors, {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
} else {
console.log(res)
const data = res.payload.product[0]
setSku(data.sku)
setName(data.name)
setQuantity(data.quantity)
setBrandN(data.brand.name)
setPrice(data.price)
setDescription(data.description)
setBrandId(data.brand._id)
setProductId(data._id)
setActive(data.isActive)
setPic(data.imageUrl)
setMerchant(data.merchant)
console.log(data.merchant)
setMerchantId(data.merchant._id)

toast.success('Add Catogry Success', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
      }
    })
},[])


const Edit =async ()=>{

if(brandn=="Select Brand")
   { toast.error("Select Brand Please", {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
})
return
}
const formData = new FormData();

formData.append("sku", sku);
formData.append("name", name);
formData.append("quantity", Quantity);
formData.append("price", price);
formData.append("merchant", merchantId);
formData.append("brand", brandID);
formData.append("description", description);
if(image){
formData.append("picture", image,image.name);
}
const BrandData = {
    formData,
    id:productId
}

dispatch(editProduct(BrandData)).then((res) => {
if (res.error) {
console.log(res)
toast.error(res.payload.error.errors, {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
} else {   
toast.success('Edit Product Success', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
      }
    })





}

///////////////////////////////////////Active//////////////////////////////

const handleChange =  (event) => {
    setLoading(true)
    const data ={
      body :{isActive :!active },
      product :productId,
    }
dispatch(activeProduct(data)).then((res) => {
    setLoading(true)

if (res.error) {
setLoading(false)
toast.error("Your request could not be processed. Please try again.", {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
} else {
setLoading(false)
setActive(!active)
toast.dark('Done', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
}
})
};



  return (
  <div className="" style={{backgroundColor: '#E3E4E4'}} >
    <NavBarAdmin/>
  <div className="d-flex flex-column py-3 align-items-center">
  <div className="d-flex flex-column ml-3 w-50">
  <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start m-auto">
    <h4>Edit {name}</h4>
  </div>
  <hr />
  <div className="row flex-column flex-lg-row justify-content-between">
    <div className="mb-3 col-lg-6">
      <label htmlFor="formGroupExampleInput" className="form-label">
        Sku
      </label>
      <input
      value={sku} onChange={(e)=>setSku(e.target.value)} 
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Product Sku"
      />
    </div>
    <div className="mb-3 col-lg-6">
      <label htmlFor="formGroupExampleInput" className="form-label">
        Name
      </label>
      <input
      value={name} onChange={(e)=>setName(e.target.value)} 
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Product Name"
      />
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="formGroupExampleInput2" className="form-label">
      Description
    </label>
    <div className="">
      <textarea
      value={description} onChange={(e)=>setDescription(e.target.value)} 
        className="form-control"
        placeholder="Product Description"
        id="floatingTextarea2"
        style={{ height: 50 }}
        defaultValue={""}
      />
    </div>
  </div>
  <div className="row flex-column flex-lg-row justify-content-between">
    <div className="mb-3 col-lg-6">
      <label htmlFor="formGroupExampleInput" className="form-label">
        Quantity
      </label>
      <input
       value={Quantity} onChange={(e)=>setQuantity(e.target.value)} 
        type="number"
        className="form-control"
        id="formGroupExampleInput"
        placeholder={1}
      />
    </div>
    <div className="mb-3 col-lg-6">
      <label htmlFor="formGroupExampleInput" className="form-label">
        Price
      </label>
      <input
       value={price} onChange={(e)=>setPrice(e.target.value)}
        type="number"
        className="form-control"
        id="formGroupExampleInput"
        placeholder={1}
      />
    </div>
  </div>
  <div>
    <div className="mb-4">
      <label htmlFor="select" className="form-label">
        Select Merchant
      </label>
      <select onChange={(e)=>{setMerchantId(e.target.value);setBrandN("Select Brand")}} id="exampleFormControlInput1" class="form-select" aria-label="Default select example">
  <option selected>{merchant.name}</option>
  {merchants.map((item,idx)=>{
   return <>
     {item.name!=merchant.name?<option value={item._id}>{item.name}</option>:null} 
     </>
  })}
</select>
    </div>
        <div className="mb-4">
      <label htmlFor="select" className="form-label">
        Select Brands
      </label>
    <select onChange={(e)=>{setBrandId(e.target.value) ; setBrandN("")}} id="exampleFormControlInput1" class="form-select" aria-label="Default select example">
 {brandn?<option selected>{brandn}</option>:null} 
  {brandss.map((item,idx)=>{
   return <>
     <option value={item._id}>{item.name}</option>
     </>
  })}
</select>
    </div>
    {/* Rounded switch */}
    <div className="mt-3">
      <label htmlFor="formFile" className="form-label">
        File
      </label>
      <input  onChange={(e)=>setImage(e.target.files[0]) }  className="form-control" type="file" id="formFile" />
    </div>
    <div className="d-flex my-3 justify-content-between">
    <div className="form-check form-switch">
      <FormGroup>
      <FormControlLabel control={
      <Switch
       checked={active}
       color='success' 
       onChange={handleChange}
       />
       }
      label={loading ? <CircularProgress /> :"Active"} />
    </FormGroup>
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked" />
      </div>
      <img
          src={pic}
          alt=""
          className="mt-1 me-2 mr-4rounded"
          style={{ width: 50 }}
        />
    </div>
    <hr />
     <button onClick={Edit} class="btn btn-primary px-4 me-2 mb-5">Save</button>
      <button 
       type="button"
       data-toggle="modal"
       data-target="#exampleModal"
      class="btn btn-danger px-4 me-2 mb-5">Delete</button>
  
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
     <DeleteProduct productId={productId} productName={name}/>
    </div>
  </div>
  </div>
</div>
</div>

</div>
  )
}

export default EditProduct
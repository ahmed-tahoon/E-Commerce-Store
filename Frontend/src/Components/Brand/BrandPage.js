import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { getBrandSlice } from "../../Containers/Brand/GetBrandSlice";
import { useParams } from "react-router-dom";
import { updateBrandSlice } from "../../Containers/Brand/UpdateBrandSlice";
import DeleteBrand from "./DeleteBrand";
import NavBarMerchant from "../Merchant/NavBarMerchant";
import axios from "axios";


const BrandPage = () => {
const [pic,setPic] = useState('')

   const [name,setName]=useState('')
   const [description,setDescription]=useState('')
   const [slug,setSlug]=useState('')
   const [image,setImage]=useState();


  const nav = useNavigate()

  const [brand,setBrand] = useState({});
  const [id ,setId]=useState()

  const params = useParams();

const dispatch = useDispatch();
useEffect(()=> {
dispatch(getBrandSlice(params.slug)).then((res) => {
console.log(res)
if (res.error) {
console.log(res)
toast.error(res.payload.error, {
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
setBrand(res.payload.brand)
setName(res.payload.brand.name);
setDescription(res.payload.brand.description)
setId(res.payload.brand._id)
setSlug(res.payload.brand.slug)
setPic(res.payload.brand.imageUrl)
toast.success('Get List Success', {
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


const update =async ()=>{
const formData = new FormData();
const data ={};

  formData.append("name", name);
  formData.append("description", description);
  formData.append("slug", slug);
  if(image)
  formData.append("picture", image,image.name);


try{
    const res = await axios.put('http://localhost:5000/api/brand/update/'+id,formData)
    toast.success('Update Success', {
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
   catch(err){
    toast.error('Error', {
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


}


  return (
   <div className="" style={{backgroundColor: '#E3E4E4'}} >
  <NavBarMerchant/>



<div className="d-flex flex-column py-3 align-items-center">
  <div className="d-flex flex-column ml-3 w-50">
  <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start m-auto">
    <h4>Edit {name} Brand</h4>
  </div>
  <hr />
  <div className="row flex-column flex-lg-row justify-content-between">
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
  <div className="mb-1">
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
  </div>
  <div>    
    {/* Rounded switch */}
    <div className="mt-2">
      <label htmlFor="formFile" className="form-label">
        Photo
      </label>
      <input  onChange={(e)=>setImage(e.target.files[0])} className="form-control" type="file" id="formFile" />
    </div>
     <img
          src={pic}
          alt=""
          className="mt-2 me-2 mr-4 rounded"
          style={{ width: 50 }}
        />
    <p className="mt-2 d-flex justify-content-center">Create : {new Date(brand.created).toLocaleString()} </p>
    <hr />
  <button onClick={update}  type="button" className="btn btn-primary px-4 me-2 mb-5">
            <i className="fa-solid fa-pen me-2" />
            Update
  </button>

      <button 
       type="button"
       data-toggle="modal"
       data-target="#exampleModal"
       class="btn btn-danger px-4 me-2 mb-5">Delete</button>
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >

 <div className="modal-dialog" role="document">
        <DeleteBrand brandId={brand._id} brandName={brand.name}/>
  </div>
  </div>
  </div>
</div>
</div>
  </div>
  )
}

export default BrandPage
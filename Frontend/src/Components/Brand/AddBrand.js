import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import BarLoader from "react-spinners/BarLoader";
import { Addone } from "../../Containers/Brand/AddBrandSlice";
import NavBarMerchant from "../Merchant/NavBarMerchant";
import { useNavigate } from "react-router-dom";

const AddBrand = (props) => {
const nav = useNavigate()
const [name,setName] = useState('');
const [description,setDescription] = useState('');
const [image,setImage] = useState();
const merchantData = useSelector((state) => state.fetchmerchant.userData);
const [l,setl]=useState(false)
const [loading,setLoading] = useState(false);

const dispatch = useDispatch();

const merchant = JSON.parse(localStorage.getItem("merchantInfo"))

const handleClick = async ()=>{

const formData = new FormData();
setLoading(true)

formData.append("name", name);
formData.append("description", description);
formData.append("merchant",merchantData._id );
formData.append("picture", image,image.name);

const BrandData = {
    data:formData,
    token:merchant.token
}

await dispatch(Addone(BrandData)).then((res) => {
if (res.error) {
setLoading(false)
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
setLoading(false)
nav('/merchant/dashboard')
toast.success('Add Brand Success', {
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
  <NavBarMerchant/>

 {!loading ?
<div className="d-flex flex-column py-3 align-items-center">
  <div className="d-flex flex-column ml-3 w-50">
  <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start m-auto">
    <h4>Add New Brand</h4>
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
    <hr />
    <button onClick={handleClick} class="btn btn-primary px-4 me-2 mb-5">Sumbit</button>
  
  {/* Modal */}

  </div>
</div>
</div>:
<div className="d-flex flex-column py-3 align-items-center">
<BarLoader color="#36b9d6"   width={1200}/></div>}

</div>
  )
}

export default AddBrand
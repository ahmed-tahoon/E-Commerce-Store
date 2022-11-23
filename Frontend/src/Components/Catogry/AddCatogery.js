import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import { Addone } from "../../Containers/Catogery/AddCatogerySlice";
import BarLoader from "react-spinners/BarLoader";
import DeleteCategory from "./DeleteCategory";
import NavBarAdmin from "../Admin/NavBarAdmin";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const ADDCatogery = (props) => {
const [l,setl]=useState(false)
const [loading,setLoading] = useState(false);
const [name,setName] = useState('');
const [description,setDescription] = useState('');
const [image,setImage] = useState();
const [active,setActive]=useState(true)
const dispatch = useDispatch();
const nav = useNavigate()

const handleClick = async ()=>{

const formData = new FormData();
setLoading(true)
formData.append("name", name);
formData.append("description", description);
formData.append("picture", image,image.name);
formData.append("isActive", active);



await dispatch(Addone(formData)).then((res) => {
if (res.error) {
console.log(res)
setLoading(true)

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
  nav('/admin/dashboard')
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

  };





  return (
   <div>
   <div className="" style={{backgroundColor: '#E3E4E4'}} >

    <NavBarAdmin/>

    {!loading ?
      <div>
  <div className="d-flex flex-column py-3 align-items-center">
  <div className="d-flex flex-column ml-3 w-50">
  <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start m-auto">
    <h4>Add {name} Category</h4>
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
    <div className="mt-0">
      <label htmlFor="formFile" className="form-label">
        image
      </label>
      <input  onChange={(e)=>setImage(e.target.files[0]) }  className="form-control" type="file" id="formFile" />
    </div>

   <FormGroup>
      <FormControlLabel control={
      <Switch
       checked={active}
       color='success' 
       onChange={()=>setActive(!active)}
       />
       }
      label={loading ? <CircularProgress /> :"Active"} />
    </FormGroup>
 <hr />
     <button  onClick={handleClick} class="btn btn-primary px-4 me-2 mb-5">Add</button>
  
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
  </div>
  {l ? <CircularProgress/>:null}
  </div>
</div>
</div>

</div>
:  <div className="d-flex flex-column py-3 align-items-center">
<BarLoader color="#36b9d6"   width={1200}/></div>}

 </div>
</div>
  )
}

export default ADDCatogery
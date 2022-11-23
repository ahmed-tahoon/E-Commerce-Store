import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {oneCategory} from "../../Containers/Catogery/OneCategorySlice"
import { useNavigate, useParams } from "react-router-dom";
import {editCategory} from "../../Containers/Catogery/EditCategorySlice"
import BarLoader from "react-spinners/BarLoader";
import DeleteCategory from "./DeleteCategory";
import NavBarAdmin from "../Admin/NavBarAdmin";
import CircularProgress from '@mui/material/CircularProgress';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const EditCategory = ()=>{
let myMap=new Map();
const nav = useNavigate()
const [name,setName] = useState('');
const [description,setDescription] = useState('');
const [image,setImage] = useState();
const [products,setProducts]=useState([])
const [id ,setId] = useState()
const dispatch = useDispatch();
const params = useParams();
const [l,setl]=useState(false)
const [loading,setLoading] = useState(true)
const [active,setActive] = useState(true)
let getproductsList = useSelector((state) => state.getallserach.userData);
let productsList = getproductsList?getproductsList:[]

if(productsList&&products)
{
    products.forEach((it)=>{
    myMap.set(it._id,true)
  })
console.log(productsList)
productsList = productsList.filter(checkAdult);

function checkAdult(item) {
  return !myMap.has(item._id);
}

}
//productsList=productsList.filter((ite)=>!myMap.has(ite._id))

useSelector((state) => console.log(state))
const admin = JSON.parse(localStorage.getItem("adminInfo"))

useSelector((state)=>{console.log(state)})

useEffect(()=>{
 dispatch(oneCategory(params.id)).then((res) => {
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
      setName(res.payload.name)
      setDescription(res.payload.description)
      setProducts(res.payload.products)   
      setLoading(false)
      setActive(res.payload.isActive)
      setId(res.payload._id)
      toast.success("Yes", {
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



const submit = async ()=>{
setl(true)
const formData = new FormData();

formData.append("name", name);
formData.append("description", description);
formData.append("isActive", active);

products.forEach(item => {
  formData.append(`products`, JSON.stringify(item));
});

if(image)
formData.append("picture", image,image.name);

const data = {
  formData,
  admin:admin,
  id:id
}

await dispatch(editCategory(data)).then((res) => {
if (res.error) {
setl(false)
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
  setl(false)
toast.success('Edit Catogry Success', {
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



  return (
    <div>
    <NavBarAdmin/>
<div className="" style={{backgroundColor: '#E3E4E4'}} >

    {!loading ?
      <div>
  <div className="d-flex flex-column py-3 align-items-center">
  <div className="d-flex flex-column ml-3 w-50">
  <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start m-auto">
    <h4>Edit {name} Categories</h4>
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
     <FormGroup sx={{margin:1}}>
      <FormControlLabel control={
      <Switch
       checked={active}
       color='success' 
       onChange={()=>setActive(!active)}
       />
       }
      label={loading ? <CircularProgress /> :"Active"} />
    </FormGroup>

<Stack spacing={1} sx={{ width: 500 , margin:1}}>
      <Autocomplete
        limitTags={3}
        onChange={(event, value) => setProducts(value)} // prints the selected value
        multiple
        autoHighlight
        id="tags-standard"
        options={productsList}
        getOptionLabel={(option) => option.name}
        defaultValue={products}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Products"
            placeholder="Product"
          />
        )}
      />
    </Stack>


 <hr />
     <button  onClick={submit} class="btn btn-primary px-4 me-2 mb-5">Save</button>
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
     <DeleteCategory id={id} admin={admin} name={name}/>
    </div>
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
  );
}


export default EditCategory
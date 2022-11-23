import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import {Merchantapply} from "../../Containers/Merchant/addMerchantSlice"

const MerchantApply = () => {
  
  
 const[name,setName] = useState('')
 const[email,setEmail] = useState('')
 const[phoneNumber,setPhoneNumber] = useState('')
 const[business,setBusiness] = useState('')
 const[password,setPassword] = useState('')

 const formData = new FormData();

 const dispatch = useDispatch();


const handleClick = async () =>{

  const data = {
    name,
    email,
    phoneNumber,
    business,
    password
  }

await dispatch(Merchantapply(data)).then((res) => {
if (res.error) {
console.log(res)
toast.error(res.payload.error.error, {
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
toast.success('Approve Done', {
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
    <h4>Sell with us</h4>
  <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input onChange={(e)=>setPhoneNumber(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleFormControlInput1"/>
  </div>
   <div class="form-group">
    <label for="exampleFormControlInput1">Description</label>
    <input onChange={(e)=>setBusiness(e.target.value)} type="textfeild" class="form-control" id="exampleFormControlInput1"/>
  </div>
  <button onClick={handleClick} className="btn btn-info mt-3" >Sumbit</button>

</div>
  )
}

export default MerchantApply
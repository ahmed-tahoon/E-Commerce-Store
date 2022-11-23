import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import {editAdmin} from "../../Containers/Admin/EditAdminSlice"
import axios from "axios"
const merchant = JSON.parse(localStorage.getItem("merchantInfo"));



const AccountSecurity = () => {
    const [password ,setPassword]=useState('')
    const [password2 ,setPassword2]=useState('')
    const dispatch = useDispatch();



const edit = async () =>{

const data = {
    password:password,
}

if(password!=password2)
{
return toast.error("Password Not Match", {
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
if(password)
{
    data.password=password
}

try{
  axios.defaults.headers.common = {
    'Authorization': merchant.token
    };
 
await axios.put('http://localhost:5000/api/merchant/edit',data)
toast.success('Edit Account Success', {
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
  console.log(err)
   toast.error('Some Thing Wrong', {
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
    <div>
    
    <div>
  <h4>Account Security</h4>
  <hr />
  <h5>Reset Password</h5>
  <div className="row g-3 mt-3">
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="inputEmail4"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    <div className="col-md-6">
      <label htmlFor="inputPassword4" className="form-label">
        Confirm Password
      </label>
      <input
        type="password"
        className="form-control"
        id="inputPassword4"
        placeholder="Confirm Password"
        value={password2}
        onChange={(e)=>setPassword2(e.target.value)}
      />
    </div>
    <div className="col-12">
      <button onClick={edit}  className="btn btn-primary mt-2">
        Reset Password
      </button>
    </div>
  </div>
</div>
</div>
  )
}

export default AccountSecurity
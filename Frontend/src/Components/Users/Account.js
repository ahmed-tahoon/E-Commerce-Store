import { LegendToggleTwoTone } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { getAdmin } from '../../Containers/Admin/GetAdminSlice';
import {editAdmin} from "../../Containers/Admin/EditAdminSlice"
import { useDispatch } from "react-redux";
import { fetchUser } from '../../Containers/User/FetchUserSlice';
const Account = () => {
const dispatch = useDispatch();

const user = JSON.parse(localStorage.getItem("userInfo"));

    const [password ,setPassword]=useState('')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [role,setRole]=useState('')
useEffect(()=>{

dispatch(fetchUser(user)).then((res) => {
setName(res.payload.user.name)
setEmail(res.payload.user.email)
setRole(res.payload.user.role)

if (res.error) {
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
} 
})
},[])



const editUser = ()=>{

const data = {
    name:name,
    email:email
}
if(password)
{
    data.password=password
    
}
data.token=user.token
user.name=name
localStorage.setItem('userInfo',JSON.stringify(user));

dispatch(editAdmin(data)).then((res) => {
if (res.error) {
    console.log(res)
toast.error(res.payload.error.erorr, {
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
    })
   
}





  return (
    <div>

    <div>
      <h4>Account Details</h4>
      <hr />
      <div className="row g-3 mt-4">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Name
          </label>
          <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Email
          </label>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress" className="form-label">
            Role
          </label>
          <input
            value={role}
            disabled
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Your Role"
          />
        </div>
        <div className="col-12">
          <button onClick={editUser} className="btn btn-primary mt-3">
            Save changes
          </button>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Account
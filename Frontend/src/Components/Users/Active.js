import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { deleteUser } from '../../Containers/User/DeleteUserSlice';
import { Rejectmerchand } from "../../Containers/Merchant/rejectMerchantSlice";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const admin = JSON.parse(localStorage.getItem("adminInfo"))

const Active = (props) => {
console.log(props)
const dispatch = useDispatch();
const [loading , setLoading] = useState(false)


const reject = ()=>{

dispatch(deleteUser(props.user._id)).then((res) => {
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
props.deleteone(props.user._id)
toast.dark('Delete Done', {
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
    <div className="d-flex justify-content-between align-items-start">
    <button  onClick={reject} className="btn btn btn-danger">
      Delete
    </button>
  </div>
        </div>
  )
}

export default Active
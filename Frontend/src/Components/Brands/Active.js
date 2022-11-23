import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { activeBrand } from "../../Containers/Brand/ActiveBrandSlice";
import { Rejectmerchand } from "../../Containers/Merchant/rejectMerchantSlice";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const admin = JSON.parse(localStorage.getItem("adminInfo"))

const Active = (props) => {
console.log(props)
const dispatch = useDispatch();
const [active ,setActive] = useState(props.isActive)
const [loading , setLoading] = useState(false)

const handleChange = (event) => {
    setLoading(true)
    const data ={
      body :{isActive :!active },
      id :props.id,
      admin:admin
    }

dispatch(activeBrand(data)).then((res) => {
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
    <div>
    <div className="d-flex justify-content-between align-items-start">
    <div className="d-md-block d-flex">
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
    <Box sx={{ display: 'flex' }}>
    </Box>
    </div>
  </div>
</div>
  )
}

export default Active
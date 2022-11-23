import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Merchantlist} from "../../Containers/Merchant/merchantListSlice"
import Active from "./Active";
import NotActive from "./Index";
import Index from "./Index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const MercheantsList = () => {
  const nav = useNavigate()
  const [New,setNew]=useState(false)
  const admin = JSON.parse(localStorage.getItem("adminInfo"))
  let  [ wn ,setwn]=useState([])
  const [merchants,setMerchantList] = useState([]);
  const [cur,setCur] =useState(1)
  let history = createBrowserHistory();

const dispatch = useDispatch();

useEffect(()=> {
dispatch(Merchantlist(admin)).then((res) => {
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
setMerchantList(res.payload.merchants.filter((item)=>item.status=="Waiting Approval"))
setwn(res.payload.merchants.filter((item)=>item.status=="Waiting Approval").slice(cur-1,cur))
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



function rejecte(id){
  setwn((pre)=>{
    return pre.filter((item)=>{
      return item._id!==id;
    })
  })
  setMerchantList((pre)=>{
    return pre.filter((item)=>{
      return item._id!==id;
    })
  })
 
  setwn(merchants.slice(cur,cur+1))


}



const next =(event,value)=>{
 setCur(value);
 setwn(merchants.slice(value-1,value))
}



  return (
    
<div>
  <h4>Merchants Waiting Your decision {merchants.length}</h4>
  <hr />
{wn.map((data,index)=>{
      return (<>
<div>
  <div className="border rounded p-4 mb-3">
    <h6>Name:</h6>
    <p>{data.name}</p>
    <hr />
    <h6>Email:</h6>
    <p>{data.email}</p>
    <hr />
    <h6>Phone:</h6>
    <p>{data.phoneNumber}</p>
    <hr />
    <h6>Business:</h6>
    <p>{data.business}</p>
    <hr />
    <div className="d-flex ">
    </div>
     <Index merchant={data} key={index} deleteone={rejecte}/>
  </div>
</div>
     </>
      )
    })}
<Stack spacing={2}>
        <Pagination
          page={cur}
          onChange={next}
          count={merchants.length}
          variant="outlined"
          color="primary"
          shape="rounded"
        />
      </Stack>

    
    
    </div>
  )
}

export default MercheantsList
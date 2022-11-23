import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Merchantlist} from "../../Containers/Merchant/merchantListSlice"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Active from "./Active";
import NotActive from "./Index";
import Index from "./Index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import BarLoader from "react-spinners/BarLoader";



const MerchantsListAll = () => {
  const nav = useNavigate()
    const [loading, setLoading] = useState(false);

  const [New,setNew]=useState(false)
  const admin = JSON.parse(localStorage.getItem("adminInfo"))
  ////////////////Pagenation//////////////////////////
	const [fpage, setCurrentPage] = useState(0);
	const [lpage, lapage] = useState(2);
  const [sea,setSea] = useState()

  ////////////////////////////////////////////////////
const [search,setSearch] = useState({})
const [merchants,setMerchantList] = useState([]);
const [merch,setList] = useState([]);
const [cur,setcur]=useState(1)

let history = createBrowserHistory();
  console.log(merchants)

const dispatch = useDispatch();

useEffect(()=> {
setLoading(true)
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
setList(res.payload.merchants)
setMerchantList(res.payload.merchants)
setList(res.payload.merchants.slice(fpage,lpage))
setLoading(false)
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
},[fpage,lpage])


function rejecte(id){
  setMerchantList((pre)=>{
    return pre.filter((item)=>{
      return item._id!==id;
    })
  })

}

function rejecte1(id){
  setMerchantList((pre)=>{
    return pre.filter((item)=>{
      return item._id!==id;
    })
  })

  setSea()

}

const onChange=(event ,value)=>{
  setcur(value)
  setCurrentPage((value-1)*2)
  lapage(((value-1)*2)+2)
}




  return (
    
<div>

{!loading?  <div>
            <Stack spacing={1} sx={{ width: 100 }}>
              <Autocomplete
                onChange={(e, v) => {
                  setSea(v);
                }}
                freeSolo
                onKeyDown={(event, v) => {
                  if (event.key === "Enter") {
                    setSea(v);
                    event.defaultMuiPrevented = true;
                    // your handler code
                  }
                }}
                disableClearable
                className="rounded "
                size="small"
                id="free-solo-2-demo"
                sx={{ width: 250 }}
                options={merchants}
                autoHighlight
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Merchant"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Stack>
          </div>:<div className='m-2'>
<BarLoader color="#36b9d6"   width={700}/></div>}



 <hr/>
{sea? <div className="border p-2 rounded mt-2">
  <div className="d-flex align-items-start">
  
    <img src="https://gitlab.com/uploads/-/system/user/avatar/56386/tt_avatar_small.jpg" alt="" width="60px" className="me-3 rounded-circle" />
    <div>
      <div className="">
        <h6>Name : {sea.name}</h6>
      </div>
      <div>
        <h6>Email : {sea.email}</h6>
      </div>
      <div>
        <h6>Phone : {sea.phoneNumber}</h6>
      </div>
      <div>
        <h6>Business : {sea.business}</h6>
      </div>
    </div>
  </div>
  <hr />
  <Active merchant={sea} deleteone={rejecte1}/>
    <button
                                  onClick={() =>
                                    setSea()
                                  }
                                  className="btn btn-danger btn-sm mt-1"
                                  type="button"
                                >
                                  Cancel
                                </button>
</div>:<div>{merch.map((data,index)=>{
      return(
        <>
<div className="border p-2 rounded mt-2">
  <div className="d-flex align-items-start">
    <img src="https://gitlab.com/uploads/-/system/user/avatar/56386/tt_avatar_small.jpg" alt="" width="60px" className="me-3 rounded-circle" />
    <div>
      <div className="">
        <h6>Name : {data.name}</h6>
      </div>
      <div>
        <h6>Email : {data.email}</h6>
      </div>
      <div>
        <h6>Phone : {data.phoneNumber}</h6>
      </div>
      <div>
        <h6>Business : {data.business}</h6>
      </div>
    </div>
  </div>
  <hr />
  <Active merchant={data} key={index} deleteone={rejecte}/>
  
</div>  
     </>
      )
    })}

<Stack spacing={2}>
        <Pagination
          page={cur}  
          onChange={onChange}
          count={Math.ceil(merchants.length/2)}
          variant="outlined"
          color="primary"
          shape="rounded"
        />
</Stack></div>}



    
    
</div>
  )
}

export default MerchantsListAll
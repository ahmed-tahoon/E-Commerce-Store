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
import { fetchUsers } from "../../Containers/User/UsersListSlice";
import { deleteUser } from '../../Containers/User/DeleteUserSlice';
import $ from 'jquery';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Active from "./Active";
const UserList = () => {

  const nav = useNavigate()
  const [New,setNew]=useState(false)
  const admin = JSON.parse(localStorage.getItem("adminInfo"))
  ////////////////Pagenation//////////////////////////
	const [fpage, setCurrentPage] = useState(0);
	const [lpage, lapage] = useState(2);
  const [sea,setSea] = useState()

  ////////////////////////////////////////////////////
const [search,setSearch] = useState({})
const [users,setUsersList] = useState([]);
const [us,setList] = useState([]);
const [cur,setcur]=useState(1)

let history = createBrowserHistory();

const dispatch = useDispatch();

useEffect(()=> {

dispatch(fetchUsers(admin.token)).then((res) => {
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
setList(res.payload.users)
setUsersList(res.payload.users)
setList(res.payload.users.slice(fpage,lpage))
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
  setUsersList((pre)=>{
    return pre.filter((item)=>{
      return item._id!==id;
    })
  })

}

function rejecte1(id){
  setUsersList((pre)=>{
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


  <div>

 <div>
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
                options={users}
                autoHighlight
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Users"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Stack>
          </div>

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
        <h6>Role : {sea.role}</h6>
      </div>

    </div>
  </div>
  <hr />
    <Active user={sea} deleteone={rejecte1}/>
    <button
                                  onClick={() =>
                                    setSea()
                                  }
                                  className="btn btn-danger btn-sm mt-1"
                                  type="button"
                                >
                                  Cancel
                                </button>
</div>:<div>{us.map((data,index)=>{
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
        <h6>Role : {data.role}</h6>
      </div>
    </div>
  </div>
  <hr />  
      <Active user={data} deleteone={rejecte}/>

</div>  
     </>
      )
    })}

<Stack spacing={2}>
        <Pagination
          page={cur}  
          onChange={onChange}
          count={Math.ceil(users.length/2)}
          variant="outlined"
          color="primary"
          shape="rounded"
        />
</Stack></div>}



    
    
</div>
 </div>   

  )
}

export default UserList
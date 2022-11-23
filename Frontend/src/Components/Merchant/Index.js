import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";

import { Approvemerchand } from "../../Containers/Merchant/approveMerchandSlice";
import Active from "./Active";
import { Rejectmerchand } from "../../Containers/Merchant/rejectMerchantSlice";


const Index = (props) => {

const [active ,setActive] = useState(false)
const [rejected,setRejected] =useState(false)

const [merchants,setMerchantList] = useState([]);

const dispatch = useDispatch();


const accept = ()=>{

dispatch(Approvemerchand(props)).then((res) => {


if (res.error) {
console.log(res)
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
setActive(true)
props.deleteone(props.merchant._id)
toast.success('Approve Merchant', {
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
const reject = ()=>{
dispatch(Rejectmerchand(props.merchant._id)).then((res) => {

if (res.error) {
console.log(res)
console.log(props.merchant._id)
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
props.deleteone(props.merchant._id)
toast.success('Reject Done', {
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
    
<div >
 <div className="d-flex justify-content-between align-items-start mt-4">
      <div className="d-md-block d-flex">
        <button onClick={accept} className="btn btn-dark me-1">Approve</button>
        <button onClick={reject} className="btn btn-danger px-4">Reject</button>
      </div>

    </div>
<div>
     

</div>
</div>



  )
}

export default Index
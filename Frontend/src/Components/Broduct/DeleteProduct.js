import React from 'react'
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { deletProduct } from '../../Containers/Product/DeletProductSlice';
import $ from 'jquery';
const admin = JSON.parse(localStorage.getItem("adminInfo"))
const merchant = JSON.parse(localStorage.getItem("merchantInfo"))

const DeleteProduct = (props) => {

const name = props.productName
const dispatch = useDispatch();
const nav=useNavigate()
const deleteBrand = ()=>{
dispatch(deletProduct(props.productId)).then((res) => {
if (res.error) {
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

toast.dark(`Delete Product `+name+`Success`,{
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
})

     if(merchant)
     nav('/merchant/dashboard')
     else
     {
      nav('/admin/dashboard')
     }
     
    $("#exampleModal .close").click()
        
      }
    })

  };
  

  return (
    <div>
     <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Delete Product {props.productName} 
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">Are you sure To Delete Product</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button onClick={deleteBrand} type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteProduct
import React from 'react'
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { deletebrandSlice } from '../../Containers/Brand/DeleteBrandSlice';
import $ from 'jquery';

const DeleteBrand = (props) => {

const name = props.brandName
  const dispatch = useDispatch();
const nav=useNavigate()
const deleteBrand = ()=>{
 dispatch(deletebrandSlice(props.brandId)).then((res) => {
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

toast.dark(`Delete Brand `+name+` Success`,{
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
})


     nav('/merchant/dashboard')
     
    $("#exampleModal .close").click()
        
      }
    })

  };
  

  return (
    <div>
     <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Delete Brand {props.brandName} 
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
        <div className="modal-body">Are you sure To Delete Brand</div>
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

export default DeleteBrand
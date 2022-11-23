import React from 'react'
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { deletecategorySlice } from '../../Containers/Catogery/DeleteCategorySlice';
import $ from 'jquery';

const DeleteCategory = (props) => {

const name = props.name
const dispatch = useDispatch();
const nav=useNavigate()
const deleteBrand = ()=>{
    const data={
        id:props.id,
        admin:props.admin
    }
dispatch(deletecategorySlice(data)).then((res) => {
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
nav('/admin/dashboard')
toast.dark(`Delete Brand `+name+`Success`,{
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
})


     nav('/admin/dashboard')
     
    $("#exampleModal .close").click()
        
      }
    })

  };
  

  return (
    <div>
     <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Delete Category {props.name} 
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
        <div className="modal-body">Are you sure To Delete Category</div>
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

export default DeleteCategory
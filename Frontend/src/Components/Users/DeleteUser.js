import React from 'react'
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { deleteUser } from '../../Containers/User/DeleteUserSlice';
import $ from 'jquery';

const DeleteUser = (props) => {
    
console.log(props)
const name = props.userName


const dispatch = useDispatch();
const nav=useNavigate()

const deleteUserOne = ()=>{
dispatch(deleteUser(props.UserId)).then((res) => {
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
props.deleteone(props.UserId)
toast.dark(`Delete User `+ props.userName+`Success`,{
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
})
     
    $("#exampleModal .close").click()
        
      }
    })

  };
  

  return (
    <div>
     <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Delete User {props.userName} 
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
        <div className="modal-body">Are you sure To Delete User</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button onClick={deleteUserOne} type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteUser
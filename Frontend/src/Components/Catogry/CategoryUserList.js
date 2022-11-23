import React, { useState,useEffect } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {categoryL} from "../../Containers/Catogery/CategoryLSlice"
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';


const CategoryUserList = () => {
  
const [categories,set] = useState([])


const dispatch = useDispatch();

useEffect(()=>{
   dispatch(categoryL()).then((res) => {
    if (res.error) {
        console.log(res)
        const error_message = res.payload.error.message ?
        res.payload.error.message :res.payload.error 
      toast.error(error_message , {
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
      set(res.payload)
      console.log(res.payload)
      toast.success("Success", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(res);
    }
  });
  },[])



  const nav = useNavigate()




  return (
    <div>
    <section className="py-5">
  <div className="container">
    <div
      id="carouselExampleControls"
      className="carousel slide postion-relative"
    >
      <div className="d-flex mb-4 justify-content-between me-3">
        <div className="ms-3">
          <h2 className="grey">Shop By Category</h2>
          <p className="grey2">Showing our latest arrival on this summer</p>
        </div>
        <div className="buttons">
          <button
            className="bg-white border-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <i className="fa-solid fa-circle-chevron-left fs-1 grey2" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="bg-white border-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <i className="fa-solid fa-circle-chevron-right fs-1 grey2" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      
      <div className="carousel-inner">
      {categories?categories.map((it,idx)=>
      <div className={idx==0?"carousel-item active":"carousel-item"} >
          <div className="d-flex">
             {it.map((item)=>
              <div onClick={()=>nav('/shop/category/'+item._id)} className=" px-3 col-3">
              <div className="text-center">
                <img
                  src={item.imageUrl}
                  className=" rounded w-100 mb-3"
                  alt="..."
                />
                <h4 className="grey">{item.name}</h4>
                <p className="grey2">{item.products.length}</p>
              </div>
            </div>
             )}

          </div>
          </div>

      ):null}




      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default CategoryUserList
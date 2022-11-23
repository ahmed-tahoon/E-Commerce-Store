import React, { useState,useEffect } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {BrandsList} from "../../Containers/Brand/BrandsListSlice"
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';

const BrandsListUser = () => {

const nav = useNavigate()
const [brands,set] = useState([])


const dispatch = useDispatch();

useEffect(()=>{
   dispatch(BrandsList()).then((res) => {
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
       let chuck=[]
       let chuckSize =5;

     for(let i =0; i<res.payload.length ; i+=chuckSize)
     {
      chuck.push(res.payload.slice(i,i+chuckSize));
     }
       set(chuck)
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
    }
  });
  },[])

  









  return (
    <div>
    <section className="py-5 my-3">
  <div
    id="carousel4"
    className="carousel slide container"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner container">
      <div className=" py-2 d-flex justify-content-between">
        <div>
          <h2 className="grey">Brands</h2>
          <p className="grey2">Showing our latest brands</p>
        </div>
        <div>
          <button
            className="bg-white border-0"
            type="button"
            data-bs-target="#carousel4"
            data-bs-slide="prev"
          >
            <i className="fa-solid fa-circle-chevron-left fs-1 grey2" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="bg-white border-0"
            type="button"
            data-bs-target="#carousel4"
            data-bs-slide="next"
          >
            <i className="fa-solid fa-circle-chevron-right fs-1 grey2" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

     {brands.map((item,idx)=>
      <div  className={idx==0?"carousel-item active":"carousel-item"}>
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
         {item.map((ite)=>
           <img
           onClick={()=>nav('shop/brand/'+ite.slug)}
            src={ite.imageUrl}
            alt={ite.name}
            className="greyscale"
            width="150px"
          />         
         )}
        </div>
      </div>
     )}

 
      
    </div>
  </div>
</section>

    
    </div>
  )
}

export default BrandsListUser
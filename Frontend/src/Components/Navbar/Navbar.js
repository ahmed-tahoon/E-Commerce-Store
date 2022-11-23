import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout } from "../../Containers/Login/logoutSlice";
import { createBrowserHistory } from 'history';
import logo from '../../Images/logo.png'
import Cartdetails from "../Cart/Cartdetails";


const Navbar = () => {
  let history = createBrowserHistory();

  const dispatch = useDispatch();
  const nav = useNavigate()

  const name = useSelector((state) => state.fetchUser.name);
  const cart1 = useSelector((state) => state.addToCart.cart);
    let cart =[]
      if(localStorage.getItem("cart")){
      cart  = JSON.parse(localStorage.getItem("cart"))
        }
 const cartNum =cart1.length!=0?cart1.length:cart.length;


const Logout =  async()=>{
    
 await  dispatch(logout()).then((res)=>{
    
   localStorage.removeItem("userInfo")
     history.push("/");
     window.location.reload();

   })

  }
/*


  <button onClick={Logout}>Logout</button>
  <button onClick={()=> nav("/login")}>Login</button>

  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link className="btn btn-primary mr-2" to={'/dashboard'}>Dashboard</Link>
    <Link className="btn btn-primary" to={'/sell'}>Sell</Link>
    <Link className="btn btn-primary mr-2" to={'/merchentslist'}>Merchantlist</Link>
    <Link className="btn btn-primary mr-2" to={'/merchantlogin'}>MerchantLogin</Link>
    <Link className="btn btn-primary mr-2" to={'/merchant/dashboard'}>MerchantDachboard</Link>

    {name}
   </nav>

   */


  return (
    <div>
      <nav className="navbar navbar-expand-lg transparent top-0 d-none d-lg-block shadow-sm lightBlue">
    <div className="container d-flex py-2">
      <a className="navbar-brand fs-1 grey"  onClick={()=>nav('/')}>
        <img src={logo} width="150px" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 grey pt-lg-0 pt-4">
          <li className="nav-item me-3">
            <a className="nav-link active" aria-current="page" onClick={()=>nav('/')}>
              Home
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" onClick={()=>nav('/shop')}>
              Shop
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="#">
              Category
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="#">
              Brands
            </a>
          </li>
        </ul>
        <div className="py-lg-0 py-4">
          <i className="fa-solid fa-magnifying-glass grey fs-4 me-4" />
          <i className="fa-solid fa-user grey fs-4 me-4" />
        <a class="nav-icon position-relative text-decoration-none" data-bs-toggle="offcanvas"
             data-bs-target="#offcanvasExample"
             aria-controls="offcanvasExample" >
          <i className="fa-solid fa-cart-shopping grey fs-4"  />
          <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{cartNum}</span>
        </a>
        </div>
      </div>
    </div>
  </nav>


    </div>
  )
}

export default Navbar
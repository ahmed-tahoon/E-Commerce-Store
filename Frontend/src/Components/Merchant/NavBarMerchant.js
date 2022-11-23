import React from 'react'
import { logout } from "../../Containers/Login/logoutSlice";
import { useDispatch } from "react-redux";
import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router-dom';
const merchant = JSON.parse(localStorage.getItem("merchantInfo"))

const NavBarMerchant = () => {
let history = createBrowserHistory();
const dispatch = useDispatch();
const nav = useNavigate()
const Logout =  async()=>{
    
 await dispatch(logout()).then((res)=>{
    
    localStorage.removeItem("merchantInfo")
     history.push("/merchantlogin");
     window.location.reload();

   })

  }
  return (
    <div>
<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
  <div className="container">
    <div>
      <button className="btn btn-dark" onClick={()=>nav('/merchant/dashboard')}>
        Dashboard
      </button>
    </div>
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
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        <i className="fa-solid fa-bag-shopping pe-3" />
        <li className="nav-item">
          <a className="nav-link">
            Merchant
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {merchant.name}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" onClick={Logout}>
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    
    
    
    </div>
  )
}

export default NavBarMerchant
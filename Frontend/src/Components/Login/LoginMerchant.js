import React, { useState, useEffect } from "react";
import { loginUser } from "../../Containers/Login/loginSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {FetchUserProfile} from "../../Containers/User/index"
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';

import 'react-toastify/dist/ReactToastify.css';
import { Loginmerchand } from "../../Containers/Merchant/loginMerchantSlice";

const LoginMerchant = () => {
  let history = createBrowserHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loading = useSelector((state) => state.login.loading);
  const nav=useNavigate()

  const dispatch = useDispatch();

useEffect(()=>{
 if(localStorage.getItem('merchantInfo'))
  {
     nav('/merchant/dashboard')
  }
},[])


 
 


const handleClick = async () => {
    const data = {
      email,
      password,
    };
await dispatch(Loginmerchand(data)).then((res) => {
      if (res.error) {
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
       
toast.success('Login Success', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});

localStorage.setItem('merchantInfo',JSON.stringify(res.payload));
if(!loading)
{
 console.log(history)
 history.push("/merchant/dashboard");
 window.location.reload();
}
      }
    });
  };

  return (
    <div class="container mt-5">
    <ToastContainer />
      <h1>Login Merchant </h1>
      <div class="row">
        <div class="col-sm-8">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  class="form-control"
                  name="email"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  class="form-control"
                  name="password"
                />
                <p></p>
              </div>
              <button onClick={handleClick} class="btn btn-dark">
                Login
              </button>
            </div>
          </div>
        </div>

        <div class="col-sm-4"></div>
      </div>
    </div>
  );
};
export default LoginMerchant;

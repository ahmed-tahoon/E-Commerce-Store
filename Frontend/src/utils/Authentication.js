
import { Navigate } from 'react-router-dom';
import axios from 'axios';
const admin = JSON.parse(localStorage.getItem("adminInfo"))

export const Authentication = (component) => {
  if(!localStorage.getItem('userInfo')){
        return<div><Navigate to="/login" /></div> ;

  }
  
  return component;
};


export const AuthenticationMerchant = (component) => {
  if(!localStorage.getItem('merchantInfo')){
        return<div><Navigate to="/merchantlogin" /></div> ;
  }
  
  return component;
};

export const AuthenticationAdmin = (component) => {
  if(!localStorage.getItem('adminInfo')){
        return<div><Navigate to="/adminlogin"/></div> ;

  }
    return component;
};


export const AuthenticationUser =  (component) => {

  if(!localStorage.getItem('userInfo')){
        return<div><Navigate to="/login"/></div> ;
   } 
   
    return component
  

  }


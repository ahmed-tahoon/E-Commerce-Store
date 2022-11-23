
import React, { useState, useEffect } from "react";
import { BrowserRouter ,Routes , Route, Navigate } from "react-router-dom";
import BrandPage from "../../Components/Brand/BrandPage";
import MerchantBrandsPage from "../../Components/Brands/MerchantBrandsPage";
import HomePage from "../../Components/Home/HomePage";
import LoginPage from "../../Components/Login/LoginUserPage";
import RegisterPage from "../../Components/Register/RegisterPage";
import Dashboard from "../../Components/Admin/Dashboard";
import {AuthenticationUser,AuthenticationMerchant,AuthenticationAdmin} from "../../utils/Authentication"
import {FetchUserProfile} from "../User/index"
import { FetchMerchantdata } from "../Merchant/index";
import axios from "axios";
import { store,history } from '../../Redux/store'
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { loginUser } from "../../Containers/Login/loginSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../Components/Navbar/Navbar";
import { AddCatogery } from "../Catogery/AddCatogerySlice";
import ADDCatogery from "../../Components/Catogry/AddCatogery";
import MerchantApply from "../../Components/Merchant/MerchantApply";
import MercheantsList from "../../Components/Merchant/MerchantsList";
import LoginMerchant from "../../Components/Login/LoginMerchant";
import MerchantDachboard from "../../Components/Merchant/MerchantDachboard";
import { FetchPrandstdata } from "../Brand/index";
import {FetchProductstmerchant, GetallAdmin,Getallsearchadmin} from "../Product/index"
import EditProduct from "../../Components/Broduct/EditProduct";
import LoginAdmin from "../../Components/Login/LoginAdmin";
import { CatogeryListAdmin, CatogeryListUser } from "../Catogery/index";
import EditCategory from "../../Components/Catogry/EditCategory";
import Catergory from "../Catogery/Catergory";
import { FetchUsersIndex } from "../User/index2";
import { GetAdmin } from "../Admin/index";
import AddProductAdmin from "../../Components/Broduct/AddProductAdmin";
import EditProductMerchant from "../../Components/Broduct/EditProductMerchant";
import AddProductMerchant from "../../Components/Broduct/AddProductMerchant"
import AddBrand from "../../Components/Brand/AddBrand";
import ShopPage from "../../Components/Shop/ShopPage";
import  {GetallUser} from "../../Containers/Product/index2"
import SinglePage from "../../Components/Shop/SinglePage";
import CategoryPage from "../../Components/Shop/ShopCategoryPage";
import ShopCategoryPage from "../../Components/Shop/ShopCategoryPage";
import ShopBrandPage from "../../Components/Shop/ShopBrandPage";
import UserDashboard from "../../Components/Users/UserDashboard";
import OrderProcess from "../../Components/Orders/OrderProcess";
const user = JSON.parse(localStorage.getItem("userInfo"))
const merchant = JSON.parse(localStorage.getItem("merchantInfo"))
const admin = JSON.parse(localStorage.getItem("adminInfo"))




function App() {
const navigate = useNavigate();

GetallUser()


if(user)
{//fetch user dispatch  
FetchUserProfile()
}
if(merchant)
{
FetchPrandstdata()
FetchMerchantdata()
FetchProductstmerchant()
}
if(admin)
{
  CatogeryListAdmin(admin)
  GetallAdmin()
  Getallsearchadmin()
  FetchUsersIndex()
}



  return (
    <div>
     <ToastContainer />     
        <Routes>
                            {/*USER PAGES AND COMPONENT */}
          <Route  path='/' element={<HomePage/>}  />
          <Route  path='/shop' element={<ShopPage/>}  />
          <Route  path='/Product/:slug' element={<SinglePage/>}  />
          <Route  path='/shop/brand/:slug' element={<ShopBrandPage/>}  />
          <Route  path='/shop/category/:id' element={<ShopCategoryPage/>}  />
          <Route  path='/sell' element={<MerchantApply/>}  />
          <Route  path='/merchantlogin' element={<LoginMerchant/>}  />
          <Route  path='/login' element={<LoginPage/>} />

                            {/*ADMIN PAGES AND COMPONENT */}

          <Route  path='/dashboard' element={AuthenticationUser(<UserDashboard/>)}  />
          <Route  path='/order/checkOut' element={AuthenticationUser(<OrderProcess/>)}  />

                            {/*ADMIN PAGES AND COMPONENT */}

          <Route  path='/adminlogin' element={<LoginAdmin/>}  />
          <Route  path='/admin/dashboard' element={AuthenticationAdmin(<Dashboard/>)} />
          <Route  path='/admin/category/:id' element={AuthenticationAdmin(<Catergory/>)} />
          <Route  path='/admin/category/edit/:id' element={AuthenticationAdmin(<EditCategory/>)} />
          <Route  path='/admin/product/:slug' element={AuthenticationAdmin(<EditProduct/>)} />
          <Route  path='/admin/addProduct' element={AuthenticationAdmin(<AddProductAdmin/>)} />
          <Route  path='/admin/addCategory' element={AuthenticationAdmin(<ADDCatogery/>)} />

                            {/*MERCHANT PAGES AND COMPONENT */}
          <Route  path='/merchant/dashboard' element={AuthenticationMerchant(<MerchantDachboard/>)} />
          <Route  path='/merchant/brands' element={AuthenticationMerchant(<MerchantBrandsPage/>)}  />
          <Route  path='/merchant/product/:slug' element={AuthenticationMerchant(<EditProductMerchant/>)} />
          <Route  path='/merchant/brand/:slug' element={AuthenticationMerchant(<BrandPage/>)} />
          <Route  path='/merchant/addProduct' element={AuthenticationMerchant(<AddProductMerchant/>)} />
          <Route  path='/merchant/addBrand' element={AuthenticationMerchant(<AddBrand/>)} />

        </Routes>
    </div>
  );
}



export default App;

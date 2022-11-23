import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../Containers/Login/loginSlice'
import { composeWithDevTools } from 'remote-redux-devtools'
import FetchUserSlice from '../Containers/User/FetchUserSlice'
import logoutSlice from '../Containers/Login/logoutSlice'
import AddCatogerySlice from '../Containers/Catogery/AddCatogerySlice'
import addMerchantSlice from "../Containers/Merchant/addMerchantSlice"
import merchantListSlice from "../Containers/Merchant/merchantListSlice"
import approveMerchandSlice from '../Containers/Merchant/approveMerchandSlice'
import { rejectMerchandSlice } from '../Containers/Merchant/rejectMerchantSlice'
import addBrandSlice from '../Containers/Brand/AddBrandSlice'
import { loginMerchandSlice } from '../Containers/Merchant/loginMerchantSlice'
import fetchMerchantSlice from '../Containers/Merchant/fetchMerchantSlice'
import  GetBrandsCSlice  from '../Containers/Brand/GetBrandsCSlice'
import { getBrandSlice } from '../Containers/Brand/GetBrandSlice'
import UpdateBrandSlice from '../Containers/Brand/UpdateBrandSlice'
import { addProductSlice } from '../Containers/Product/AddProductSlice'
import FetchPsMerchantSlice  from '../Containers/Product/ProductsMerchantSlice'
import GetProductSlice from '../Containers/Product/GetProductSlice'
import EditProductSlice from '../Containers/Product/EditProductSlice'
import DeleteProductSlice from '../Containers/Product/EditProductSlice'
import loginAdminSlice from '../Containers/Admin/loginAdminSlice'
import CatogeryListSlice from '../Containers/Catogery/CategoryListSlice'
import CatogeryLSlice from "../Containers/Catogery/CategoryLSlice"
import OneCategorySlice from '../Containers/Catogery/OneCategorySlice'
import GetAllAdminSlice from '../Containers/Product/GetAllAdminSlice'
import EditCategorySlice from '../Containers/Catogery/EditCategorySlice'
import DeleteCategorySlice from '../Containers/Catogery/DeleteCategorySlice'
import ActiveMerchantSlice from '../Containers/Merchant/ActiveMerchantSlice'
import ActiveProductSlice from '../Containers/Product/ActiveProductSlice'
import UsersListSlice from '../Containers/User/UsersListSlice'
import DeleteUserSlice from '../Containers/User/DeleteUserSlice'
import GetAdminSlice from '../Containers/Admin/GetAdminSlice'
import EditAdminSlice from '../Containers/Admin/EditAdminSlice'
import GetAllForSearch from '../Containers/Product/GetAllForSearch'
import { BrandsSlice } from '../Containers/Brand/BrandsListSlice'
import ActiveBrandSlice from '../Containers/Brand/ActiveBrandSlice'
import BrandsListAdminSlice from '../Containers/Brand/BrandsListAdminSlice'
import GetAllUserSlice from '../Containers/Product/GetAllUserSlice'
import AddToCartSlice from '../Containers/Cart/AddToCartSlice'
import RemoveItemSclice from '../Containers/Cart/RemoveItemSclice'

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'Your Instance Name',
  hostname: 'localhost',
  port: 3000 // the port your remotedev server is running at
})




export const store = configureStore({
  reducer: {
    login:loginSlice,
    logout:logoutSlice,
    fetchUser :FetchUserSlice,
    addCatogery : AddCatogerySlice,
    merchantApply:addMerchantSlice,
    merchantlist:merchantListSlice,
    approvemerchand:approveMerchandSlice,
    activemerchant:ActiveMerchantSlice,
    rejectmerchant:rejectMerchandSlice,
    addbrand:addBrandSlice,
    productmerchant:FetchPsMerchantSlice,
    loginmerchant:loginMerchandSlice,
    fetchmerchant:fetchMerchantSlice,
    addbrandslice:addBrandSlice,
    getbrandsc:GetBrandsCSlice,
    getbrand:getBrandSlice,
    updatebrand:UpdateBrandSlice,
    addproduct:addProductSlice,
    getproduct:GetProductSlice,
    editproduct:EditProductSlice,
    deleteproduct:DeleteProductSlice,
    loginadmin:loginAdminSlice,
    catogrylistadmin:CatogeryListSlice,
    catogrylistuser:CatogeryLSlice,
    onecategory:OneCategorySlice,
    getallproductadmin:GetAllAdminSlice,
    editcategory:EditCategorySlice,
    deletecategory:DeleteCategorySlice,
    activeproduct:ActiveProductSlice,
    userslist:UsersListSlice,
    delete:DeleteUserSlice,
    getadmin:GetAdminSlice,
    editadmin:EditAdminSlice,
    getallserach:GetAllForSearch,
    getbrands:BrandsSlice,
    activeBrand:ActiveBrandSlice,
    brandsadmin:BrandsListAdminSlice,
    getallforusers:GetAllUserSlice,
    addToCart:AddToCartSlice,
    removefromcart:RemoveItemSclice
  },
})



import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import  {fetchproductMerchant}  from "./ProductsMerchantSlice";
import {getProductsAdmin} from './GetAllAdminSlice'
import {getAllSearchAdmin} from './GetAllForSearch'

import "react-toastify/dist/ReactToastify.css";

export const FetchProductstmerchant = async () => {

const dispatch = useDispatch();
const merchant = JSON.parse(localStorage.getItem("merchantInfo"))
await dispatch(fetchproductMerchant(merchant)).then((res) => {
console.log(res)
if (res.error) {
console.log(res)
toast.error(res.payload.error, {
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
toast.success('Get List Success', {
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
})
};





export const Getallsearchadmin = async (limit) => {
const dispatch = useDispatch();
const admin = JSON.parse(localStorage.getItem("adminInfo"))
const data = {token:admin.token}
await dispatch(getAllSearchAdmin(data)).then((res) => {
console.log(res)
if (res.error) {
console.log(res)
toast.error(res.payload.error, {
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
toast.success('Get Admin Success', {
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
})
};

/////////////////Get All 2//////////////////

export const GetallAdmin =  async() => {
const dispatch = useDispatch();
const admin = JSON.parse(localStorage.getItem("adminInfo"))
const data = {token:admin.token ,page:1}
await dispatch(getProductsAdmin(data)).then((res) => {
console.log(res)
if (res.error) {
console.log(res)
toast.error(res.payload.error, {
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
toast.success('Get Admin Success', {
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
})
};

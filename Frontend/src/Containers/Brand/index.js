import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import  {getBrandsSliceCc}  from "./GetBrandsCSlice";

import "react-toastify/dist/ReactToastify.css";

export const FetchPrandstdata = async () => {
console.log("dfdsfdsfdgffbcvbvcbcvb")
const dispatch = useDispatch();
const merchant = JSON.parse(localStorage.getItem("merchantInfo"))

dispatch(getBrandsSliceCc(merchant.id)).then((res) => {
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

import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import  {getAdmin}  from "./GetAdminSlice";

import "react-toastify/dist/ReactToastify.css";

export const GetAdmin = async () => {

const dispatch = useDispatch();
dispatch(getAdmin()).then((res) => {
console.log("fdskjfklsdfhjksgjkn")
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

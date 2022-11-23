
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {getProductsUser} from './GetAllUserSlice'





export const GetallUser =  async () => {
const dispatch = useDispatch();
await dispatch(getProductsUser()).then((res) => {
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
toast.success('Get User Success', {
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
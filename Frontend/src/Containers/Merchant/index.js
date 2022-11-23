import { useDispatch } from "react-redux";
import { fetchMerchant } from "./fetchMerchantSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FetchMerchantdata = async () => {
  const dispatch = useDispatch();
  const merchant = JSON.parse(localStorage.getItem("merchantInfo"));
  await dispatch(fetchMerchant(merchant)).then((res) => {
    if (res.error) {
        console.log(res)
        const error_message = res.payload.error.message ?
         res.payload.error.message :res.payload.error 
      toast.error(error_message , {
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
      toast.success("Success", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(res);
    }
  });
};

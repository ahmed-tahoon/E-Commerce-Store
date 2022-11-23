import { useDispatch } from "react-redux";
import { fetchUser } from "./FetchUserSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FetchUserProfile = async () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  await dispatch(fetchUser(user)).then((res) => {
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
      console.log(res.payload);
    }
  });
};

////////////////Fetch Users/////////////////////////

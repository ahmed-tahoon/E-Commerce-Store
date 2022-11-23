import { useDispatch } from "react-redux";
import {fetchUsers} from './UsersListSlice'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FetchUsersIndex = async () => {
  const dispatch = useDispatch();
  const admin = JSON.parse(localStorage.getItem("adminInfo"));

  await dispatch(fetchUsers(admin.token)).then((res) => {
    if (res.error) {
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

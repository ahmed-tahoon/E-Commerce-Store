import { useDispatch } from "react-redux";
import { categoryList } from "./CategoryListSlice";
import { categoryL } from "./CategoryLSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { oneCategory } from "./OneCategorySlice";

export const CatogeryListAdmin = async (admin) => {

  const dispatch = useDispatch();
  await dispatch(categoryList(admin.token)).then((res) => {
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





//////////////////////////User//////////////////////////////////
export const CatogeryListUser = async () => {

  
};


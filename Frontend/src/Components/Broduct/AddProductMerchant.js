import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { createBrowserHistory } from "history";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Addoneadmin } from "../../Containers/Product/AddProductAdminSlice";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import NavBarMerchant from "../Merchant/NavBarMerchant";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import { getBrandsSliceCc } from "../../Containers/Brand/GetBrandsCSlice";
import { Merchantlist } from "../../Containers/Merchant/merchantListSlice";
const merchant2 = JSON.parse(localStorage.getItem("merchantInfo"));

const AddProductMerchant = (props) => {
  const [merchant, setMerchant] = useState(merchant2.id);

  const dispatch = useDispatch();
  const [brands, setBrands] = useState([]);

  

  ////////////////Brands///////////////////////////

  useEffect(() => {
    dispatch(getBrandsSliceCc(merchant)).then((res) => {
      if (res.error) {
        setBrands([]);
        const error_message = res.payload.error.message
          ? res.payload.error.message
          : res.payload.error;
        toast.error(error_message, {
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
        setBrands(res.payload.brandsList);
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
      }
    });
  }, []);

  const nav = useNavigate();
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [Quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);


  const handleClick = async () => {
    setLoading(true);
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("sku", sku);
    formData.append("quantity", Quantity);
    formData.append("price", price);
    formData.append("brand", brand);
    formData.append("isActive", active);
    formData.append("picture", image, image.name);

    const data = {
      data: formData,
      token: merchant2.token,
    };
if(!brand)
{
  toast.error("Please Select Brand", {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
setLoading(false);
return 
}
try{
   const res = await axios
      .post("http://localhost:5000/api/product/merchant/add", data.data, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': data.token
        },
      })
              setLoading(false);
              toast.success("Add Product Success", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
              nav("/merchant/dashboard");
    }
   catch(err){
      setLoading(false);
toast.error(err.response.data.error, {
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
  };

  return (
    <div className="">
      <div className="" style={{ backgroundColor: "#E3E4E4" }}>
        <NavBarMerchant/>
        <div className="d-flex flex-column py-3 align-items-center">
          <div className="d-flex flex-column ml-3 w-50">
            <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start m-auto">
              <h4>Add New Product</h4>
            </div>
            <hr />
            <div className="row flex-column flex-lg-row justify-content-between">
              <div className="mb-3 col-lg-6">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Sku
                </label>
                <input
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Product Sku"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Product Name"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Description
              </label>
              <div className="">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  placeholder="Product Description"
                  id="floatingTextarea2"
                  style={{ height: 50 }}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row flex-column flex-lg-row justify-content-between">
              <div className="mb-3 col-lg-6">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Quantity
                </label>
                <input
                  value={Quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder={1}
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Price
                </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder={1}
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label htmlFor="select" className="form-label">
                  Select Brands
                </label>
                <select
                  onChange={(e) => setBrand(e.target.value)}
                  id="exampleFormControlInput1"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Choose Brand</option>
                  {brands.map((item, idx) => {
                    return <option value={item._id}>{item.name}</option>;
                  })}
                </select>
              </div>

              {/* Rounded switch */}
              <div className="mt-3">
                <label htmlFor="formFile" className="form-label">
                  File
                </label>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  className="form-control"
                  type="file"
                  id="formFile"
                />
              </div>
              <div className="d-flex my-3 justify-content-between">
                <div className="form-check form-switch">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={active}
                          color="success"
                          onChange={() => setActive(!active)}
                        />
                      }
                      label="Active"
                    />
                    {loading ? (
                      <div>
                        <PulseLoader
                          color="#3c6495"
                          loading
                          margin={0}
                          size={13}
                          speedMultiplier={1}
                        />
                      </div>
                    ) : null}
                  </FormGroup>

                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  />
                </div>
              </div>
              <hr />
              <button
                onClick={handleClick}
                class="btn btn-primary px-4 me-2 mb-5"
              >
                Sumbit
              </button>

              {/* Modal */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductMerchant;

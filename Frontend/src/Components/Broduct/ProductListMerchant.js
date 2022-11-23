import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { createBrowserHistory } from "history";
import { useDispatch } from "react-redux";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { GetallAdmin } from "../../Containers/Product/index";
import { getProductsAdmin } from "../../Containers/Product/GetAllAdminSlice";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import BarLoader from "react-spinners/BarLoader";
import axios from "axios";

const ProductListMerchant = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  let Products = [];
  const [page, setPage] = useState(1);
  let pages;
  Products = useSelector((state) => state.productmerchant.userData.products);
  const [searchV, setsearch] = useState();
  const [fpage, setCurrentPage] = useState(0);
  const [lpage, lapage] = useState(2);
  const [bra, setbra] = useState([]);
  const [cur, setcur] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    if (Products) setbra(Products.slice(fpage, lpage));
  }, [Products, fpage, lpage]);

  const Goto = () => {
    nav("/admin/product/" + searchV.slug);
  };
  const onChange = (event, value) => {
    setcur(value);
    setCurrentPage((value - 1) * 2);
    lapage((value - 1) * 2 + 2);
  };

  const next = () => {};

  return (
    <div>
      <div className="" id="div1">
        <div className="d-flex justify-content-between">
          <h4>Products ({Products ? Products.length : 0})</h4>
          <div>
            <Stack spacing={1} sx={{ width: 100 }}>
              <Autocomplete
                onChange={(e, v) => {
                  setsearch(v);
                }}
                freeSolo
                onKeyDown={(event, v) => {
                  if (event.key === "Enter") {
                    setsearch(v);
                    event.defaultMuiPrevented = true;
                    // your handler code
                  }
                }}
                disableClearable
                className="rounded"
                size="small"
                id="free-solo-2-demo"
                sx={{ width: 250 }}
                options={Products}
                autoHighlight
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Product"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Stack>
          </div>

          <button
            onClick={() => nav("/merchant/addProduct")}
            type="button"
            className="btn btn-light border"
            id="buttonAdd"
          >
            Add
          </button>
        </div>
        <hr />
      </div>

      {searchV ? (
        <div>
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          width="120px"
                          height="100px"
                          src={searchV.imageUrl}
                          className="rounded"
                        />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>{searchV.name}</h5>
                      <div className="d-flex flex-row"></div>
                      <div className="mt-1 mb-0 text-muted small">
                        <span className="text-primary"> • </span>
                        <span>
                          Brand :{" "}
                          {searchV.brand ? searchV.brand.name : "Not Have"}
                        </span>
                      </div>
                      <div className="text-muted small">
                        <span
                          className={
                            searchV.isActive ? "text-success" : "text-danger"
                          }
                        >
                          {" "}
                          •{" "}
                        </span>
                        <span>{searchV.isActive ? "Active" : "NotActive"}</span>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">${searchV.price}</h4>
                      </div>
                      <h6
                        className={
                          searchV.quantity >= 5 ? "text-success" : "text-danger"
                        }
                      >
                        Quantity : {searchV.quantity}
                      </h6>
                      <div className="d-flex flex-column mt-1">
                        <button
                          onClick={() => nav("/admin/product/" + searchV.slug)}
                          className="btn btn-primary btn-sm"
                          type="button"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setsearch()}
                          className="btn btn-danger btn-sm mt-1"
                          type="button"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {!loading ? (
            <div>
              {Products ? (
                bra.map((item, index) => {
                  return (
                    <div>
                      <div className="row justify-content-center mb-3">
                        <div className="col-md-12 col-xl-10">
                          <div className="card shadow-0 border rounded-3">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                  <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                    <img
                                      width="120px"
                                      height="100px"
                                      src={item.imageUrl}
                                      className="rounded"
                                    />
                                    <a href="#!">
                                      <div className="hover-overlay">
                                        <div
                                          className="mask"
                                          style={{
                                            backgroundColor:
                                              "rgba(253, 253, 253, 0.15)",
                                          }}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                  <h5>{item.name}</h5>
                                  <div className="d-flex flex-row"></div>
                                  <div className="mt-1 mb-0 text-muted small">
                                    <span className="text-primary"> • </span>
                                    <span>
                                      Brand :{" "}
                                      {item.brand
                                        ? item.brand.name
                                        : "Not Have"}
                                    </span>
                                  </div>
                                  <div className="text-muted small">
                                    <span
                                      className={
                                        item.isActive
                                          ? "text-success"
                                          : "text-danger"
                                      }
                                    >
                                      {" "}
                                      •{" "}
                                    </span>
                                    <span>
                                      {item.isActive ? "Active" : "NotActive"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                  <div className="d-flex flex-row align-items-center mb-1">
                                    <h4 className="mb-1 me-1">${item.price}</h4>
                                  </div>
                                  <h6
                                    className={
                                      item.quantity >= 5
                                        ? "text-success"
                                        : "text-danger"
                                    }
                                  >
                                    Quantity : {item.quantity}
                                  </h6>
                                  <div className="d-flex flex-column mt-1">
                                    <button
                                      onClick={() =>
                                        nav("/merchant/product/" + item.slug)
                                      }
                                      className="btn btn-primary btn-sm"
                                      type="button"
                                    >
                                      Edit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="m-2">
                  <BarLoader color="#36b9d6" width={1200} />
                </div>
              )}
            </div>
          ) : (
            <Box margin={3} sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
          <Stack spacing={2}>
            <Pagination
              page={cur}
              onChange={onChange}
              count={Products ? Math.ceil(Products.length / 2) : 0}
              variant="outlined"
              color="primary"
              shape="rounded"
            />
          </Stack>
        </div>
      )}
    </div>
  );
};

export default ProductListMerchant;

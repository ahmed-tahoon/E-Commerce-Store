import React, { useState,useEffect } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {BrandsListAdmin} from "../../Containers/Brand/BrandsListAdminSlice"
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Active from './Active';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import BarLoader from "react-spinners/BarLoader";

const BrandsListMerchant = () => {
let brandsList=[];
useSelector((state) => console.log(state))
  brandsList=  useSelector((state) => state.getbrandsc.userData.brandsList);

const nav = useNavigate();
  	const [fpage, setCurrentPage] = useState(0);
	const [lpage, lapage] = useState(2);
const [bra,setbra] = useState([]);
const [cur,setcur]=useState(1)
const [loading,setLoading] = useState(false)
const dispatch = useDispatch();

 useEffect(() => {
    if (brandsList) setbra(brandsList.slice(fpage, lpage));
  }, [brandsList, fpage, lpage]);


const onChange=(event ,value)=>{
  setcur(value)
  setCurrentPage((value-1)*2)
  lapage(((value-1)*2)+2)
}


  return (
    <div>
    
 <div>


 {!loading?<div>       
  {bra?bra.map((item)=>{  
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
                                <span className="text-primary"> ??? </span>
                                <span>
                                 {item.description}
                                </span>
                              </div>
                               <div className="text-muted small">
                                <span className={item.isActive?"text-success":"text-danger"}> ??? </span>
                                <span>
                                 {item.isActive?"Active":"NotActive"}
                                </span>
                              </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                              <div className="d-flex flex-column mt-1">
                               <Active id={item._id} isActive={item.isActive} />
                                <button
                                  onClick={() =>
                                    nav("/merchant/brand/"+item.slug)
                                  }
                                  className="btn btn-primary btn-sm mt-2"
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
    )
  }):null}
    </div> :<div className='m-2'>
<BarLoader color="#36b9d6"   width={700}/></div>}
   
    </div>

<Stack spacing={2}>
        <Pagination
          page={cur}  
          onChange={onChange}
          count={Math.ceil(brandsList?Math.ceil(brandsList.length/2):0)}
          variant="outlined"
          color="primary"
          shape="rounded"
        />
</Stack>

    
    
    
    </div>
  )
}

export default BrandsListMerchant
import React,{useState} from 'react'
import ADDCatogery from './AddCatogery'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
const CategoryAdminList = () => {

  //    <tr onClick={()=>nav('/admin/category/edit/'+item._id)}  className="table-dark">

    const [fpage, setCurrentPage] = useState(0);
	const [lpage, lapage] = useState(3);
  const [cur,setcur]=useState(1)
let cc = []


const nav = useNavigate()

let categories =[]
categories=useSelector((state) => state.catogrylistadmin.userData);
if(categories)
cc=categories.slice(fpage,lpage)

const onChange=(event ,value)=>{
  setcur(value)
  setCurrentPage((value-1)*3)
  lapage(((value-1)*3)+3)
  cc=categories.slice(fpage,lpage)
}

    
  return (
    <div>
    <div className="d-flex justify-content-between">
      <h4>Categories</h4>
      <button onClick={()=>nav('/admin/addCategory')} className="btn btn-light" id="AddCategoryBtn">
        Add
      </button>
    </div>
    <hr />
    <div>       
  {cc?cc.map((item)=>{  
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
                                 {item.description}
                                </span>
                              </div>
                               <div className="text-muted small">
                                <span className={item.isActive?"text-success":"text-danger"}> • </span>
                                <span>
                                 {item.isActive?"Active":"NotActive"}
                                </span>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                              <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-3 me-3 ">{item.products.length} Products</h4>
                              </div>
                              <div className="d-flex flex-column mt-1">
                                <button
                                  onClick={() =>
                                    nav("/admin/category/edit/" + item._id)
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
    )
  }):null}
        </div>

        <Stack spacing={2}>
        <Pagination
          page={cur}  
          onChange={onChange}
          count={Math.ceil(categories.length/3)}
          variant="outlined"
          color="primary"
          shape="rounded"
        />
</Stack>
    </div>
  )
}

export default CategoryAdminList
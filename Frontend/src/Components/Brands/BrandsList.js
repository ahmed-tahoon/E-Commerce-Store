import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useDispatch } from "react-redux";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { getBrandsSliceC } from "../../Containers/Brand/GetBrandsCSlice";

const BrandsList = () => {
let brandsList=[];
  brandsList=  useSelector((state) => state.getbrandsc.userData.brandsList);



const nav = useNavigate()




  return (
    <div>
    <ul class="list-group">

    {brandsList?brandsList.map((item)=>{
        return (
          <div>
  <li onClick={()=>nav('/merchant/brand/'+item.slug)} class="list-group-item d-flex justify-content-between align-items-center">
    <h2>{item.name}</h2>
<img
                        src={item.imageUrl}
                        alt=""
                        className="rounded-circle me-3"
                        width="50px"
                        height="50px"
                      />
                        </li>
  </div>
        )


    }):null}
</ul>
    </div>
  )
}

export default BrandsList
import React, { useEffect, useState } from 'react'
import {Helmet} from "react-helmet";
import './templatemo.css'
import { useSelector } from "react-redux";
import Navbar from '../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import {AddToCart} from "../../Containers/Cart/AddToCartSlice"
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {oneCategory} from '../../Containers/Catogery/OneCategorySlice'
import Pagination from "@mui/material/Pagination";
import { useParams } from 'react-router-dom';
import Cartdetails from '../Cart/Cartdetails';
const ShopCategoryPage = () => {

  const id = useParams()
  console.log(id)
  ////////////////Pagenation//////////////////////////
	const [fpage, setCurrentPage] = useState(0);
	const [lpage, lapage] = useState(9);
  const [sea,setSea] = useState()
  const [cur,setcur]=useState(1)
  const[Pn,setPn] = useState(0)
  const [Sort,setSort] =useState("")
const [value, setValue] =useState([1, 5000]);
const [filter,setFilter]=useState([])
const quantity =5;
const[Products,setProducts] = useState([])
let [Pro,setPro] = useState([]);
const dispatch = useDispatch();
const nav = useNavigate();
useEffect(()=>{
dispatch(oneCategory(id.id)).then((res) => {
console.log(res)
if (res) {
  let sortedProducts=[]
  console.log(res)
  setProducts(res.payload.products)
  setPn(res.payload.products.filter((p)=>(p.price>value[0] &&p.price<value[1])).length)
  if(Sort=="hTl")
  {
var array1 =res.payload.products.slice();
sortedProducts = array1.sort((n1,n2)=>n1.price<n2.price).filter((p)=>(p.price>value[0] &&p.price<value[1]));;
setFilter(sortedProducts)
setPro(sortedProducts.slice(fpage,lpage))

  }
  else if(Sort=="lTh")
  {
 var array1 = res.payload.products.slice();
sortedProducts = array1.sort((n1,n2)=>n1.price>n2.price).filter((p)=>(p.price>value[0] &&p.price<value[1]));;
setFilter(sortedProducts)

setPro(sortedProducts.slice(fpage,lpage))

  }
  else
  {
    setPro(res.payload.products.filter((p)=>(p.price>value[0] &&p.price<value[1])).slice(fpage,lpage))
    setFilter(res.payload)

  }
}
})
},[fpage,lpage,Sort,value])


const addToCart = (item)=>{

dispatch(AddToCart(item))

  
}




const handleChange = (event, newValue) => {
setValue(newValue);
};


function valuetext(value) {
  return `${'$'+value}`;
}


const onChange=(event ,value)=>{
  setcur(value)
  setCurrentPage((value-1)*9)
  lapage(((value-1)*9)+9)
}


  return (
    <div>
<Navbar/>
    <Cartdetails />

<div className="container py-5">
  <div className="row">
    <div className="col-lg-3">
      <h1 className="h2 pb-4">Categories</h1>
      <ul className="list-unstyled templatemo-accordion">
        <li className="pb-3">
          <a
            className="collapsed d-flex justify-content-between h3 text-decoration-none"
            href="#"
          >
            Gender
            <i className="fa fa-fw fa-chevron-circle-down mt-1" />
          </a>
          <ul className="collapse show list-unstyled pl-3">
            <li>
              <a className="text-decoration-none" href="#">
                Men
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Women
              </a>
            </li>
          </ul>
        </li>
        <li className="pb-3">
          <a
            className="collapsed d-flex justify-content-between h3 text-decoration-none"
            href="#"
          >
            Sale
            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
          </a>
          <ul id="collapseTwo" className="collapse list-unstyled pl-3">
            <li>
              <a className="text-decoration-none" href="#">
                Sport
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Luxury
              </a>
            </li>
          </ul>
        </li>
        <li className="pb-3">
          <a
            className="collapsed d-flex justify-content-between h3 text-decoration-none"
            href="#"
          >
    <Box sx={{ width: 300 }}>
      <Stack spacing={1} direction="row" alignItems="center">
        <Typography>1$</Typography>
         <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={10000}
        min={1}
        />
        <Typography>10000$</Typography>
      </Stack>
    </Box>

          </a>
          <ul id="collapseThree" className="collapse list-unstyled pl-3">
            <li>
              <a className="text-decoration-none" href="#">
                Bag
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Sweather
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Sunglass
              </a>
            </li>

          </ul>
        </li>
      </ul>
    </div>
    <div className="col-lg-9">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-inline shop-top-menu pb-3 pt-1">
            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none mr-3" href="#">
                All
              </a>
            </li>
            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none mr-3" href="#">
                Men's
              </a>
            </li>
            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none" href="#">
                Women's
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 pb-4">
        
          <div className="d-flex">
            <select onChange={(e)=>setSort(e.target.value)} className="form-control">
              <option value={""}>Featured</option>
              <option value={"hTl"}>Price high to low</option>
              <option value={"lTh"}>Price Low to high</option>
            </select>
          </div>
        </div>
      </div>
  <div className="row">
   {Pro?Pro.map((item)=>{
  return (
<div className="col-md-4">
  <div className="card mb-4 product-wap rounded-0">
    <div className="card rounded-0">
      <img
        className="card-img rounded-0 img-fluid"
        src={item.imageUrl}
      />
      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
        <ul className="list-unstyled">
          <li>
            <a className="btn btn-success text-white" >
              <i className="far fa-heart" />
            </a>
          </li>
          <li>
            <a
              className="btn btn-success text-white mt-2"
              href="shop-single.html"
            >
              <i className="far fa-eye" onClick={()=>nav('/product/'+item.slug)} />
            </a>
          </li>
          <li>
            <a
              className="btn btn-success text-white mt-2"
              onClick={()=>nav('/product/'+item.slug)}
            >
              <i className="fas fa-cart-plus" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="card-body">
      <a href="shop-single.html" className="h3 text-decoration-none">
        {item.name}
      </a>
      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
        <li>{item.brand?item.brand.name:""}</li>
        <li className="pt-2">
          <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
          <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
          <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
          <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
          <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
        </li>
      </ul>
      <ul className="list-unstyled d-flex justify-content-center mb-1">
        <li>
          <i className="text-warning fa fa-star" />
          <i className="text-warning fa fa-star" />
          <i className="text-warning fa fa-star" />
          <i className="text-muted fa fa-star" />
          <i className="text-muted fa fa-star" />
        </li>
      </ul>
      <p className="text-center mb-0">${item.price}</p>
    </div>
  </div>
</div>

)}):<div>
  
</div>}   


      </div>
      <div div="row">
        <Stack spacing={2}>
        <Pagination
          page={cur}  
          onChange={onChange}
          count={Math.ceil(Pn/9)}
          variant="outlined"
          color="primary"
          shape="rounded"
        />
         </Stack>
      </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ShopCategoryPage
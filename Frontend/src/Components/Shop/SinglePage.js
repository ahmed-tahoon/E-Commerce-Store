import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import { useDispatch } from "react-redux";
import { getProduct } from "../../Containers/Product/GetProductSlice";
import { ToastContainer, toast } from 'react-toastify';
import {AddToCart} from "../../Containers/Cart/AddToCartSlice"
import {checkInCart} from "../../Containers/Cart/CheckInCart"
import {RemoveCart} from "../../Containers/Cart/RemoveItemSclice"
import { useParams } from 'react-router-dom';
import Cartdetails from '../Cart/Cartdetails';
const SinglePage = () => {
const [quantity , setQuantity]  = useState(1);
const [product,SetProduct] = useState({});
const [inCart , setInCart] = useState(0);
let params = useParams();
const dispatch = useDispatch();
const data ={slug:params.slug}

useEffect(()=> {
dispatch(getProduct(data)).then((res) => {
if (res.error) {
console.log(res)
toast.error(res.payload.error.errors, {
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
console.log(res)
const data = res.payload.product[0]
SetProduct(data)
setInCart(checkInCart(data.slug))


toast.success('Add Catogry Success', {
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
    })
},[])


const addToCart = ()=>{

  const data = {
    ...product,
    quantity:quantity,
    s:"add"
  }
try{
dispatch(AddToCart(data))
setInCart(!inCart)

}catch(err)
{
  console.log(err)
}
}

const Remove_From_Cart = ()=>{
  const data = {
    slug:product.slug,
    price:product.price,
    quantity:quantity,
    s:"remove"
  }
try{
dispatch(AddToCart(data))
setInCart(!inCart)

}catch(err)
{
  console.log(err)
}
} 



  return (
    <div>
    <Navbar/>
         <Cartdetails />

 <section className="bg-light">
  <div className="container pb-5">
    <div className="row">
      <div className="col-lg-5 mt-5">
        <div className="card mb-3">
          <img
            className="card-img img-fluid"
            src={product.imageUrl}
            alt="Card image cap"
            id="product-detail"
          />
        </div>
        <div className="row">
          {/*Start Controls*/}
          <div className="col-1 align-self-center">
            <a href="#multi-item-example" role="button" data-bs-slide="prev">
              <i className="text-dark fas fa-chevron-left" />
              <span className="sr-only">Previous</span>
            </a>
          </div>
          {/*End Controls*/}
          {/*Start Carousel Wrapper*/}
          <div
            id="multi-item-example"
            className="col-10 carousel slide carousel-multi-item"
            data-bs-ride="carousel"
          >
            {/*Start Slides*/}

            {/*End Slides*/}
          </div>
          {/*End Carousel Wrapper*/}
          {/*Start Controls*/}
          <div className="col-1 align-self-center">
            <a href="#multi-item-example" role="button" data-bs-slide="next">
              <i className="text-dark fas fa-chevron-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/*End Controls*/}
        </div>
      </div>
      {/* col end */}
      <div className="col-lg-7 mt-5">
        <div className="card">
          <div className="card-body">
            <h1 className="h2">{product.name}</h1>
            <p className="h3 py-2">${product.price}</p>
            <p className="py-2">
              <i className="fa fa-star text-warning" />
              <i className="fa fa-star text-warning" />
              <i className="fa fa-star text-warning" />
              <i className="fa fa-star text-warning" />
              <i className="fa fa-star text-secondary" />
              <span className="list-inline-item text-dark">
                Rating 4.8 | 36 Comments
              </span>
            </p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <h6>Brand: </h6>
              </li>
              <li className="list-inline-item">
                <p className="text-muted">
                  <strong>{product.brand?product.brand.name:""}</strong>
                </p>
              </li>
            </ul>
            <h6>Description:</h6>
            <p>
              {product.description}
            </p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <h6>Avaliable Color :</h6>
              </li>
              <li className="list-inline-item">
                <p className="text-muted">
                  <strong>White / Black</strong>
                </p>
              </li>
            </ul>
              <input
                type="hidden"
                name="product-title"
                defaultValue="Activewear"
              />
              <div className="row">
                <div className="col-auto">
                  <ul className="list-inline pb-3">
                    <li className="list-inline-item text-right">
                      Quantity
                    </li>
                    <li className="list-inline-item">
                      <span onClick={(e)=>quantity!=1?setQuantity(quantity-1):null} className="btn btn-success" id="btn-minus">
                        -
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge bg-secondary" id="var-value">
                        {quantity}
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span onClick={(e)=>setQuantity(quantity+1)} className="btn btn-success" id="btn-plus">
                        +
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row pb-3">
                <div className="col d-grid">


                {!inCart ? <button
                    type="submit"
                    className="btn btn-success btn-lg"
                    value="addtocard"
                    onClick={addToCart}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    Add To Cart
                  </button> : <>
                   <button
                    type="submit"
                    className="btn btn-success btn-lg"
                    value="addtocard"
                    onClick={Remove_From_Cart}
                  >
                    Remove From Cart
                  </button>
                </>}
                 
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

    
    
    
    </div>
  )
}

export default SinglePage
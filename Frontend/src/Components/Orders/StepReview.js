import React,{useState,useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {AddToCart} from "../../Containers/Cart/AddToCartSlice"
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const StepReview = (props) => {
 let cart1 = useSelector((state) => state.addToCart.cart);

  const [cart,setCart] = useState([])
  const [totalPrice , setTotal] = useState(0);

  useEffect(()=>{
   if(JSON.parse(localStorage.getItem("cart")))
     {
      setCart(JSON.parse(localStorage.getItem("cart")))
      setTotal(JSON.parse(localStorage.getItem("Total_Price")))
     }
  },[cart1])
  
  const nav = useNavigate();
  const dispatch = useDispatch();

  const remove = (slug)=>{
  let newCart = cart.filter((it)=>it.slug!=slug)
  setCart(newCart)
  }


const Remove_From_Cart = (product)=>{
  const data = {
    slug:product.slug,
    price:product.price,
    quantity:product.quantity,
    s:"remove"
  }
try{
dispatch(AddToCart(data))
remove(data.slug)
}catch(err)
{
  console.log(err)
}
} 





  return (
    <div>
      <div className="col-12">
        <div
          className="card card-registration card-registration-2"
          style={{ borderRadius: 15 }}
        >
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Order Items</h1>
                    <h6 className="mb-0 text-muted">{cart.length} items</h6>
                  </div>

                {cart.length!=0?<div>
                      {cart.map((item)=><div>
                         <hr className="my-4" />
                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={item.imageUrl}
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">{item.brand.name}</h6>
                      <h6 className="text-black mb-0">{item.name}</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                         <h6 className="text-black mb-0">{item.quantity}</h6>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0">$ {item.totalPrice}</h6>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a onClick={()=>Remove_From_Cart(item)} className="text-muted">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                  </div>

                      </div>)}

                </div>:<h1>Cart is Empty</h1>}

                  <hr className="my-4" />
                  <div className="pt-5">
                    <h6 className="mb-0">
                      <a  onClick={()=>nav('/')} className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2" />
                        Back to shop
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 bg-grey">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="text-uppercase">items {cart.length}</h5>
                    <h5>$ {totalPrice}.00</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="text-uppercase">Shipping</h5>
                    <h5>$ {cart.length!=0?"10.00":"0.00"}</h5>
                  </div>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price</h5>
                    <h5>$ {cart.length!=0?totalPrice+10:"0.00"}</h5>
                  </div>
                  <button
                    onClick={props.next}
                    type="button"
                    className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default StepReview
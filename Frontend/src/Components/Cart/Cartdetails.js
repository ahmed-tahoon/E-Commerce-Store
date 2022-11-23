import React,{useEffect, useState} from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {AddToCart} from "../../Containers/Cart/AddToCartSlice"
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
const Cartdetails = () => {
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
      <div
    className="offcanvas offcanvas-end "
    tabIndex={-1}
    id="offcanvasExample"
    aria-labelledby="offcanvasRightLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">
        Cart - {cart?cart.length+" items":"Empty"} 
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
    <hr/>




    {cart?cart.map((item)=>{
       return (
        <div>
<Container>
              <Row className='mb-2 align-items-center'>
                <Col xs='10' className='pr-0'>
                  <div className='d-flex align-items-center'>
                    <img
                      className='item-image mr-2'
                      src={item.imageUrl}
                      style={{width:"80px",height:"80px",objectFit:"cover",borderRadius:"6px"}}
                    />

                    <Link
                      to={`/product/`+item.slug}
                      className='item-link one-line-ellipsis ml-2 '
                    >
                      <h5 className='one-line-ellipsis'>
                       {item.name}
                      </h5>
                    </Link>
                  </div>
                </Col>
                <Col xs='2' className='text-right'>
                <i className="fa-solid fa-trash" onClick={()=>Remove_From_Cart(item)} />
                </Col>
              </Row>
              <Row className='mb-2 align-items-center'>
                <Col xs='9'>
                  <p className='item-label'>price</p>
                </Col>
                <Col xs='3' className='text-right'>
                  <p className='value price'>${item.totalPrice}</p>
                </Col>
              </Row>
              <Row className='mb-2 align-items-center'>
                <Col xs='9'>
                  <p className='item-label'>quantity</p>
                </Col>
                <Col xs='3' className='text-right'>
                  <p className='value quantity'>{item.quantity}</p>
                </Col>
              </Row>
     </Container>
     <hr/>

       </div>
       )
    }):<h4>Cart IS Empty</h4>}



      
    </div>
       <div className='cart-summary p-10 ' style={{backgroundColor:"#f6f7f8"}}>
      <Container>
        <Row className='mb-2 summary-item'>
          <Col xs='9'>
            <p className='summary-label mb-0'>Free Shippling</p>
          </Col>
          <Col xs='3' className='text-right'>
            <p className='summary-value mb-0'>$0</p>
          </Col>
        </Row>
        <Row className='mb-2 summary-item'>
          <Col xs='9'>
            <p className='summary-label mb-0'>Total</p>
          </Col>
          <Col xs='3' className='text-right'>
            <p className='summary-value mb-0'>${totalPrice}</p>
          </Col>
        </Row>
      </Container>
    </div>
    <button onClick={()=>nav('/shop')} className='m-2 btn btn-success'>Continue Shopping</button>
    <button onClick={()=>nav('/order/checkOut')} className='m-2 btn btn-dark'>Process to CheckOut</button>

  </div>
  
    </div>
  )
}

export default Cartdetails
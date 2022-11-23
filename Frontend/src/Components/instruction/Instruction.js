import React from 'react'
import h24 from "../../Images/24-hours-support.png"
import De from "../../Images/delivery-truck.png"
import protection from "../../Images/protection.png"
import easy from "../../Images/easy-return.png"



const Instruction = () => {
  return (
    <div>
    <section className="py-5">
  <div className="container d-flex text-lg-center instructions">
    <div className=" col-lg-3 px-2 col-md-6 col-12 mb-4 d-flex flex-lg-column align-items-lg-center align-items-end">
      <img
        src={De}
        alt=""
        width="85px"
        className="mb-1 me-3"
      />
      <div className="grey">
        <h5>Free Shipping</h5>
        <p className="grey2">Ut enim ad minim veniam liquip ami tomader</p>
      </div>
    </div>
    <div className=" col-lg-3 px-2 col-md-6 col-12 mb-4 d-flex  flex-lg-column align-items-lg-center align-items-end">
      <img
        src={protection}
        alt=""
        width="80px"
        className="mb-2 me-3"
      />
      <div className="grey">
        <h5>Secure Payments</h5>
        <p className="grey2">Eonim ad minim veniam liquip tomader</p>
      </div>
    </div>
    <div className="col-lg-3 px-2 col-md-6 col-12 mb-4 d-flex  flex-lg-column align-items-lg-center align-items-end">
      <img
        src={easy}
        alt=""
        width="70px"
        className="mb-3 me-4"
      />
      <div className="grey">
        <h5>Easy Returns</h5>
        <p className="grey2">Be enim ad minim veniam liquipa ami tomader</p>
      </div>
    </div>
    <div className=" col-lg-3 px-2 col-md-6 col-12 mb-4 d-flex  flex-lg-column align-items-lg-center align-items-end">
      <img
        src={h24}
        alt=""
        width="70px"
        className="mb-3 me-4"
      />
      <div className="grey">
        <h5>24/7 Support</h5>
        <p className="grey2">Ut enim ad minim veniam liquip ami tomader</p>
      </div>
    </div>
  </div>
</section>

    
    
    
    </div>
  )
}

export default Instruction
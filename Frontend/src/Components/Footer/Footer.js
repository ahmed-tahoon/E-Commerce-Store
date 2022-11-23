import React from 'react'

const Footer = () => {
  return (
    <div>
    
    <section className="py-5 darkgrey">
  <div className="container d-flex flex-wrap py-4">
    <div className="col-lg-6 d-flex col-12 flex-column flex-md-row mb-lg-0 mb-5 ">
      <div className="col-md-6 col-12 me-4 mb-md-0 mb-5">
        <img src="images/logo2.png" alt="" width="150px" className="mb-4" />
        <p className="grey4">
          Quis nostrud exercitatin ullamc boris nisi ut aliquip ex ea commodo
          conse.
        </p>
        <input
          type="email"
          className="border-0 px-4 py-2 rounded mb-5 w-100"
          placeholder="Your Email Here"
        />
        <div className="d-flex">
          <div className="social rounded-circle me-3 d-flex justify-content-center align-items-center socialMedia">
            <i className="fa-brands fa-facebook-f" />
          </div>
          <div className="social rounded-circle me-3 d-flex justify-content-center align-items-center socialMedia">
            <i className="fa-brands fa-twitter" />
          </div>
          <div className="social rounded-circle me-3 d-flex justify-content-center align-items-center socialMedia">
            <i className="fa-brands fa-instagram" />
          </div>
          <div className="social rounded-circle me-3 d-flex justify-content-center align-items-center socialMedia">
            <i className="fa-brands fa-linkedin-in" />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-12 me-4 mb-md-0 mb-5 ps-md-3 ps-0">
        <h4 className="text-white mb-4">Address</h4>
        <div className="grey4 d-flex">
          <i className="fa-solid fa-location-dot me-3 mt-1" />
          <p>20, Awesome Road, New York, Usa 4D BS3</p>
        </div>
        <div className="grey4 d-flex">
          <i className="fa-solid fa-phone me-3 mt-1" />
          <p>+123 456 7890</p>
        </div>
        <div className="grey4 d-flex">
          <i className="fa-solid fa-envelope me-3 mt-1" />
          <p>hello@ulina.com</p>
        </div>
      </div>
    </div>
    <div className="col-lg-6 d-flex col-12 flex-column flex-md-row ps-lg-5 ps-0">
      <div className="col-md-6 col-12 mb-md-0 mb-5">
        <h4 className="text-white mb-4">Useful Links</h4>
        <div className="grey4 d-flex">
          <p className="white">Shop Coupon</p>
        </div>
        <div className="grey4 d-flex">
          <p className="white">About Us</p>
        </div>
        <div className="grey4 d-flex">
          <p className="white">Career</p>
        </div>
        <div className="grey4 d-flex">
          <p className="white">Support</p>
        </div>
      </div>
      <div className="col-md-6 col-12 mb-md-0 mb-5">
        <h4 className="text-white mb-4">Categories</h4>
        <div className="d-flex grey4 justify-content-between">
          <div>
            <p className="white">Men</p>
            <p className="white">Women</p>
            <p className="white">Kids</p>
            <p className="white">Accesories</p>
          </div>
          <div>
            <p className="white">Bags</p>
            <p className="white">Jewellery</p>
            <p className="white">Cloth</p>
            <p className="white">Beautiy Items</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       
    
    
    </div>
  )
}

export default Footer
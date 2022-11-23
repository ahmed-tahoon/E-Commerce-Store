import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../../css/fontawesome-free-6.2.0-web/css/all.min.css'
import person_1 from '../../Images/person_1.png'
import person_2 from '../../Images/person_2.png'
import person_3 from '../../Images/person_3.png'
import CategoryUserLint from '../Catogry/CategoryUserList';
import CategoryUserList from '../Catogry/CategoryUserList';
import Review from '../Review/Review';
import Footer from '../Footer/Footer';
import Instruction from '../instruction/Instruction';
import BrandsListUser from '../Brands/BrandsListUser';
import Cartdetails from '../Cart/Cartdetails';

const HomePage = () => {


  


    const userData = useSelector((state) => state.login.userData);

    console.log(userData)


  return (
    <div>
<Cartdetails/>
  <Navbar/>
  <section className="mb-5">
  {/* navbar */}

  {/* carousel */}
  <div
    id="carouselExampleIndicators"
    className="carousel slide lightBlue postion-relative vh-100"
    data-bs-ride="true"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner vh-100">
      <div className="carousel-item active">
        <div className="d-flex align-items-center justify-content-between vh-100">
          <div className="grey ms-0 ps-0 ms-md-5 ps-md-5 col-md-6 col-12 text-center text-md-start">
            <h5 className="ms-4 grey2">SUMMER SALE IS ON</h5>
            <h1 className="big ms-4">
              Discover Men's
              <br className="d-md-block d-none" />
              Latest Fashoin
            </h1>
            <button className="rounded-pill text-white border-0 py-2 px-4 lightBlue2 mt-3 ms-4 exploreBtn">
              EXPLORE NOW
            </button>
          </div>
          <div className="width d-none d-md-block col-6">
            <img src={person_1} className=" w-75 move " alt="..." />
          </div>
          {/* <div class="circle rounded-circle"></div> */}
        </div>
      </div>
      <div className="carousel-item">
        <div className="d-flex align-items-center justify-content-between vh-100">
          <div className="grey ms-0 ps-0 ms-md-5 ps-md-5 col-md-6 col-12 text-center text-md-start">
            <h5 className="ms-4 grey2">SUMMER SALE IS ON</h5>
            <h1 className="big ms-4">
              Discover Women's
              <br className="d-md-block d-none" />
              Latest Fashoin
            </h1>
            <button className="rounded-pill text-white border-0 py-2 px-4 lightBlue2 mt-3 ms-4 exploreBtn">
              EXPLORE NOW
            </button>
          </div>
          <div className="width  d-none d-md-block col-6">
            <img src={person_2} className=" w-75 move " alt="..." />
          </div>
          {/* <div class="circle rounded-circle"></div> */}
        </div>
      </div>
      <div className="carousel-item">
        <div className="d-flex align-items-center justify-content-between vh-100">
          <div className="grey ms-0 ps-0 ms-md-5 ps-md-5 col-md-6 col-12 text-center text-md-start">
            <h5 className="ms-4 grey2">SUMMER SALE IS ON</h5>
            <h1 className="big ms-4">
              Discover Summer
              <br className="d-md-block d-none" />
              Latest Fashoin
            </h1>
            <button className="rounded-pill text-white border-0 py-2 px-4 lightBlue2 mt-3 ms-4 exploreBtn">
              EXPLORE NOW
            </button>
          </div>
          <div className="width d-none d-md-block col-6">
            <img src={person_3} className=" w-75 move " alt="..." />
          </div>
          {/* <div class="circle rounded-circle"></div> */}
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev postion-absolute top-50 ms-4"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next postion-absolute top-50 ms-4 "
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>


<CategoryUserList/>


<BrandsListUser/>


<Review/>


<Instruction/>



<Footer/>
    </div>
  )
}

export default HomePage
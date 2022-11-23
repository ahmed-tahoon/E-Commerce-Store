import React from 'react'
const Review = () => {
  return (
    <div>
    <section className="py-5 overflow-hidden position-relative" style={{backgroundColor: "#ecf5f4"}}>
  <div className="container py-5 ">
    <div
      id="carousel3"
      className="carousel slide d-flex justify-content-between flex-column flex-lg-row mb-5"
    >
      <div className="col-12 col-lg-3 me-5 z-index1">
        <h2 className="grey">What Customers Say About Us</h2>
        <p className="grey2 mb-5">
          Bobore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitat ion ullamco laboris
        </p>
        <button
          className="lightblue border-0 grey3 fs-1"
          type="button"
          data-bs-target="#carousel3"
          data-bs-slide="prev"
        >
          <i className="fa-regular fa-circle-left" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="lightblue border-0 grey3 fs-1"
          type="button"
          data-bs-target="#carousel3"
          data-bs-slide="next"
        >
          <i className="fa-regular fa-circle-right" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="carousel-inner mt-5 mt-lg-0">
        <div className="carousel-item active z-index1">
          <div className="d-flex flex-column flex-md-row">
            <div className="p-5 bg-white rounded mb-4 mb-md-0 me-0 me-md-4 ">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <i className="fa-solid fa-quote-left fs-1 grey3" />
                  <div className="yellow">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star-half-stroke" />
                  </div>
                </div>
                <p className="grey2 text-bold fs-5 mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  dolor accusamus fuga, pariatur doloremque rem molestiae
                  laudantium eius ea quidem
                </p>
                <div className="d-flex align-items-start">
                  <img
                    src="images/personnn.jpg"
                    alt=""
                    className="rounded-circle me-3"
                    width="70px"
                  />
                  <div>
                    <h5 className="grey">Mike Andersone</h5>
                    <p className="grey2">web developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 bg-white rounded">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <i className="fa-solid fa-quote-left fs-1 grey3" />
                  <div className="yellow">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star-half-stroke" />
                  </div>
                </div>
                <p className="grey2 text-bold fs-5 mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  dolor accusamus fuga, pariatur doloremque rem molestiae
                  laudantium eius ea quidem.
                </p>
                <div className="d-flex align-items-start">
                  <img
                    src="images/persoooon.jpg"
                    alt=""
                    className="rounded-circle me-3"
                    width="70px"
                  />
                  <div>
                    <h5 className="grey">Mike Andersone</h5>
                    <p className="grey2">web developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item z-index1">
          <div className="d-flex flex-column flex-md-row">
            <div className="p-5 bg-white rounded mb-4 mb-md-0 me-0 me-md-4 ">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <i className="fa-solid fa-quote-left fs-1 grey3" />
                  <div className="yellow">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star-half-stroke" />
                  </div>
                </div>
                <p className="grey2 text-bold fs-5 mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  dolor accusamus fuga, pariatur doloremque rem molestiae
                  laudantium eius ea quidem
                </p>
                <div className="d-flex align-items-start">
                  <img
                    src="images/personnn.jpg"
                    alt=""
                    className="rounded-circle me-3"
                    width="70px"
                  />
                  <div>
                    <h5 className="grey">Mike Andersone</h5>
                    <p className="grey2">web developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 bg-white rounded">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <i className="fa-solid fa-quote-left fs-1 grey3" />
                  <div className="yellow">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star-half-stroke" />
                  </div>
                </div>
                <p className="grey2 text-bold fs-5 mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  dolor accusamus fuga, pariatur doloremque rem molestiae
                  laudantium eius ea quidem.
                </p>
                <div className="d-flex align-items-start">
                  <img
                    src="images/persoooon.jpg"
                    alt=""
                    className="rounded-circle me-3"
                    width="70px"
                  />
                  <div>
                    <h5 className="grey">Mike Andersone</h5>
                    <p className="grey2">web developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="circle2" />
    <div className="circle3" />
  </div>
</section>

    
    
    
    
    
    </div>
  )
}

export default Review
import React ,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './GlobalCssSliderDeep.css'

const StepAddress = (props) => {

    const nav = useNavigate()

    const [fname,setfName ] = useState("");
    const [lname,setlName ] = useState("");
    const [city,setCity ] = useState("");
    const [zip,setZip ] = useState();
    const [phone,setPhone ] = useState();
    const [address,setAdress ] = useState();

    const Next = ()=>{


      const Address = {
        fname,
        lname,
        city,
        zip,
        phone,
        address
      }
    localStorage.setItem("delivery", JSON.stringify(Address));
    props.next()

    }
const Back = ()=>{


      const Address = {
        fname,
        lname,
        city,
        zip,
        phone,
        address
      }
    localStorage.setItem("delivery", JSON.stringify(Address));
    props.back()
    
    }

    useEffect(()=>{

      if(JSON.parse(localStorage.getItem("delivery")))
      {
          let d = JSON.parse(localStorage.getItem("delivery"));
          setfName(d.fname)
          setlName(d.lname)
          setCity(d.city)
          setZip(d.zip)
          setPhone(d.phone)
          setAdress(d.address)
      }




    },[])




                                
  return (
    <div>
    
    <div className="row mt-3 mx-3" style={{ marginTop: 25 }}>
  <div className="col-md-3">
    <div style={{ marginTop: 50, marginLeft: 10 }} className="text-center">
      <i
        id="animationDemo"
        data-mdb-animation="slide-right"
        data-mdb-toggle="animation"
        data-mdb-animation-reset="true"
        data-mdb-animation-start="onScroll"
        data-mdb-animation-on-scroll="repeat"
        className="fas fa-3x fa-shipping-fast text-white"
      />
      <h3 className="mt-3 text-white">Delivery Details</h3>
      <p className="white-text">
        You are 30 seconds away from compleating your order!
      </p>
    </div>
    <div className="text-center">
       <div className="pt-5">
           <h6 className="mb-0">
                <a  onClick={()=>nav('/')} className="text-white">
                 <i className="fas fa-long-arrow-alt-left me-2" />
                        Back to shop
                </a>
        </h6>
      </div>
    </div>
  </div>
  <div className="col-md-9 justify-content-center">
    <div className="card card-custom pb-4">
      <div className="card-body mt-0 mx-5">
        <div className="text-center mb-3 pb-2 mt-3">
          <h4 style={{ color: "#495057" }}>Delivery Details</h4>
        </div>
        <form className="mb-0">
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  value={fname}
                  onChange={(e)=>setfName(e.target.value)}
                  type="text"
                  id="form9Example1"
                  className="form-control input-custom"
                />
                <label className="form-label" htmlFor="form9Example1">
                  First name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  value={lname}
                  onChange={(e)=>setlName(e.target.value)}
                  type="text"
                  id="form9Example2"
                  className="form-control input-custom"
                />
                <label className="form-label" htmlFor="form9Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  value={city}
                  onChange={(e)=>setCity(e.target.value)}
                  type="text"
                  id="form9Example3"
                  className="form-control input-custom"
                />
                <label className="form-label" htmlFor="form9Example3">
                  City
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  value={zip}
                  onChange={(e)=>setZip(e.target.value)}
                  type="text"
                  id="form9Example4"
                  className="form-control input-custom"
                />
                <label className="form-label" htmlFor="form9Example4">
                  Zip
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  value={address}
                  onChange={(e)=>setAdress(e.target.value)}
                  type="text"
                  id="form9Example6"
                  className="form-control input-custom"
                />
                <label className="form-label" htmlFor="form9Example6">
                  Address
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  type="tel"
                  id="typeEmail"
                  className="form-control input-custom"
                />
                <label className="form-label" htmlFor="typeEmail">
                  Phone Number
                </label>
              </div>
            </div>
          </div>
          <div className="float-end ">
            {/* Submit button */}
            <button
              onClick={Next}
              className="btn btn-dark btn-rounded"
            >
              Next
            </button>
            
          </div>
           <button
              onClick={Back}
              className="btn btn-dark btn-rounded"
              style={{ backgroundColor: "#0E5E6F" }}
            >
              Back
            </button>
        </form>
      </div>
    </div>
  </div>
</div>

    
    
    </div>
  )
}

export default StepAddress
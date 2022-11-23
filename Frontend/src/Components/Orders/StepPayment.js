import React ,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './GlobalCssSliderDeep.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ToastContainer, toast } from 'react-toastify';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '4px solid #264653',
  borderRadius: "10px",
  boxShadow: 24,
  p: 3,
};
const StepPayment = (props) => {
 const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{ setOpen(true);setc(true)};
  const handleClose = () => setOpen(false);
    const nav = useNavigate()

    const [totalPrice , setTotal] = useState(0);

  useEffect(()=>{
   if(JSON.parse(localStorage.getItem("cart")))
     {
      setTotal(JSON.parse(localStorage.getItem("Total_Price")))
     }
  },[])

    const [CardN,setCardNumber ] = useState("");
    const [Expire,setExpire ] = useState("");
    const [cvv,setCvv ] = useState("");
    const [cardInform,setCaI]=useState({})

const Next = ()=>{

    if(!che)
    {
        toast.warning('Please Select Method', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
return 
    }
        if(che=="2"&&!CardN)
        {
toast.warning('Please Add Card', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
setOpen(true)
}
else
{
    props.next()
}
        
}
const Back = ()=>{


    props.back()


    
    }


const [c,setc]=useState(false)
const [che , setChe] = useState()
const card = ()=>{
    setOpen(!open)
    setChe("2");
}

const addCard = ()=>{
if(CardN.length<18)
{
toast.warning('Enter Valid Card Num', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});

return
}
if(cvv.length==0 ||Expire.length==0)
{
toast.warning('Enter Empty Faild', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});

return
}
else
{

 setCaI({CardN,cvv,Expire})
 toast.success('Add Card Sucess', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});

 setOpen(false)

}

}
const [c1,setc1]=useState(false)
const checkedOn = ()=>{
    setChe(1);
    setc(false)
    setc1(true)

}
                                
  return (
    <div className='container py-5 h-100'>
    
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
        className="fas fa-3x fa-money-bill text-white"
      />
      <h3 className="mt-3 text-white">Checkout</h3>
      <p className="white-text">
        You are in the last step to compleating your order!
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
          <h4 style={{ color: "#495057" }}>Checkout Methods</h4>
        </div>

 <form class="pb-3">
             <div onClick={checkedOn} class="d-flex flex-row pb-3 Hover">
                  <div class="d-flex align-items-center pe-2">
                    <input onChange={checkedOn} class="form-check-input" type="radio" name="radioNoLabel" id="exampleRadios1"
                      value="1" aria-label="..." checked={c1}/>
                  </div>
                  <div class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fas fa-money-bill fa-lg text-success pe-2 "></i>Cash on delivery	
                    </p>
                  </div>
                </div>

                <div onClick={handleOpen} class="d-flex flex-row pb-3 Hover">
                  <div class="d-flex align-items-center pe-2">
                    <input onChange={handleOpen} class="form-check-input" type="radio" name="radioNoLabel" id="exampleRadios1"
                      value="2" aria-label="..." checked={c}/>
                  </div>
                  <div  class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i>Visa Debit
                      Card
                    </p>
                     <div class="ms-auto">{cardInform.CardN?<div>************{CardN.substring(14,18)}</div>:""}</div>
                  </div>
                </div>
  </form>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Card
          </Typography>
  <div className="mt-2">
    <div className="row d-flex justify-content-center">
      <div className="">
        <div className="card">
          <div className="card-body">
            <div className="card-title d-flex justify-content-between mb-0">
              <p className="text-muted mb-0">Total Price</p>
              <p className="mb-0">${totalPrice}</p>
            </div>
          </div>
          <div className="rounded-bottom" style={{ backgroundColor: "#eee" }}>
            <div className="card-body">
              <p className="mb-4">Your payment details</p>
              <div className="form-outline mb-3">
                <input
                  value={CardN}
                  onChange={(e)=>setCardNumber(e.target.value)}
                  type="number"

                  id="formControlLgXM8"
                  className="form-control"
                  placeholder="1234 5678 1234 5678"
                  required
                />
                <label className="form-label" htmlFor="formControlLgXM8">
                  Card Number
                </label>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <div className="form-outline">
                    <input
                    value={Expire}
                    onChange={(e)=>setExpire(e.target.value)}
                      type="password"
                      id="formControlLgExpk8"
                      className="form-control"
                      placeholder="MM/YYYY"
                      required
                    />
                    <label className="form-label" htmlFor="formControlLgExpk8">
                      Expire
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-outline">
                    <input
                    value={cvv}
                    onChange={(e)=>setCvv(e.target.value)}
                      type="password"
                      id="formControlLgcvv8"
                      className="form-control"
                      placeholder="Cvv"
                      required
                    />
                    <label className="form-label" htmlFor="formControlLgcvv8">
                      Cvv
                    </label>
                  </div>
                </div>
              </div>
              <button onClick={addCard} className="btn btn-info btn-block">Add Card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

        </Box>
      </Modal>






  <div className="float-end">
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


    
      </div>

      
    </div>
  </div>
</div>
</div>
  )
}

export default StepPayment
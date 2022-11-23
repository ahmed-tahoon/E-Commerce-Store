import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const RemoveCart = createAsyncThunk("RemoveCart",(item,thunkAPI)=>{

console.log(item)
const cartItem ={
slug:item.slug,
totalPrice:item.price*item.quantity,
}


let newCart = [];

 let cart  = JSON.parse(localStorage.getItem("cart"))
 let Total_Price  = JSON.parse(localStorage.getItem("Total_Price"))
 Total_Price-=cartItem.totalPrice;

 newCart = cart.filter((it)=>it.slug!=cartItem.slug)

 newCart=cart
 localStorage.setItem("cart", JSON.stringify(newCart));
 localStorage.setItem("Total_Price", JSON.stringify(Total_Price));



return newCart
  

})




export const RemoveCartSlice = createSlice({
  name: 'remove',
  initialState: {
    cart:[],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [RemoveCart.pending]:(state)=>{
        state.loading=true
    },
    [RemoveCart.fulfilled]:(state,action)=>{
        state.cart=action.payload;
        state.loading=false
        state.pending=false
    },
    [RemoveCart.rejected]:(state,action)=>{
      console.log(action)
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default RemoveCartSlice.reducer
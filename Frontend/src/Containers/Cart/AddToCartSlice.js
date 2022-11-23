import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const AddToCart = createAsyncThunk("AddToCartSlice",async (item,thunkAPI)=>{



if(item.s == "remove")
{
const cartItem ={
slug:item.slug,
totalPrice:item.price*item.quantity,
}


let newCart = [];

 let cart  = JSON.parse(localStorage.getItem("cart"))
 let Total_Price  = JSON.parse(localStorage.getItem("Total_Price"))
 Total_Price-=cartItem.totalPrice;

 newCart = cart.filter((it)=>it.slug!=cartItem.slug)
 if(newCart.length==0)
 Total_Price=0
 localStorage.setItem("cart", JSON.stringify(newCart));
 localStorage.setItem("Total_Price", JSON.stringify(Total_Price));



return newCart
  
}
else if(item.s = "add")
{
  console.log("fdfdcxv")
const cartItem ={
name : item.name,
created:item.created,
description:item.description,
imageUrl:item.imageUrl,
isActive:item.isActive,
price:item.price,
quantity:item.quantity,
slug:item.slug,
totalPrice:item.price*item.quantity,
brand:item.brand
}


let newCart = [];
if(!localStorage.getItem("cart")){
   const cart = []
   let Total_Price=0;
   cart.push(cartItem);
   Total_Price+=cartItem.totalPrice
   localStorage.setItem("cart", JSON.stringify(cart));
   localStorage.setItem("Total_Price", JSON.stringify(Total_Price));

}
else
{
 let cart  = JSON.parse(localStorage.getItem("cart"))
 let Total_Price  = JSON.parse(localStorage.getItem("Total_Price"))
 Total_Price+=cartItem.totalPrice;
 cart.push(cartItem)
 newCart=cart
 localStorage.setItem("cart", JSON.stringify(cart));
 localStorage.setItem("Total_Price", JSON.stringify(Total_Price));

}

return newCart
}

})




export const AddToCartSlice = createSlice({
  name: 'AddToCartSlice',
  initialState: {
    cart:[],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [AddToCart.pending]:(state)=>{
        state.loading=true
    },
    [AddToCart.fulfilled]:(state,action)=>{
        state.cart=action.payload;
        state.loading=false
        state.pending=false
    },
    [AddToCart.rejected]:(state,action)=>{
      console.log(action)
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default AddToCartSlice.reducer
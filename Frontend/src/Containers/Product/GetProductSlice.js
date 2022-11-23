import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const getProduct = createAsyncThunk("getProductSlice", async(data,thunkAPI)=>{
try{
    const res = await axios.get('http://localhost:5000/api/product/item/'+data.slug)
        return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const GetProductSlice = createSlice({
  name: 'fetcgetProductSlicehBrand',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getProduct.pending]:(state)=>{
        state.loading=true
    },
    [getProduct.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [getProduct.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default GetProductSlice.reducer


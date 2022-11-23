import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const activeProduct = createAsyncThunk("activeProduct",async (data,thunkAPI)=>{

    try{
        console.log(data.body)
    const res = await axios.put(`http://localhost:5000/api/product/active/`+data.product,data.body)
    console.log("ACTIVE : ",res)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const ActiveProductSlice = createSlice({
  name: 'activeProduct',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [activeProduct.pending]:(state)=>{
        state.loading=true
    },
    [activeProduct.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [activeProduct.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default ActiveProductSlice.reducer
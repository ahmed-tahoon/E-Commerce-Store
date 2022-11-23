import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const merchant = JSON.parse(localStorage.getItem("merchantInfo"))
export const getBrandSlice = createAsyncThunk("getBrandSlice", async(data,thunkAPI)=>{
try{
    const res = await axios.get('http://localhost:5000/api/brand/'+data)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const GetBrandSlice = createSlice({
  name: 'fetchBrand',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getBrandSlice.pending]:(state)=>{
        state.loading=true
    },
    [getBrandSlice.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
        state.name=action.payload.user.name
    },
    [getBrandSlice.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default GetBrandSlice.reducer


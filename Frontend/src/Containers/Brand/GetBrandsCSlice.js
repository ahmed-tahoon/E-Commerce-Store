import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const getBrandsSliceCc = createAsyncThunk("getBrandsSlice", async(data,thunkAPI)=>{
try{
    const res = await axios.get('http://localhost:5000/api/brand/one/'+data)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const GetBrandsCSlice = createSlice({
  name: 'fetchCBrand',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getBrandsSliceCc.pending]:(state)=>{
        state.loading=true
    },
    [getBrandsSliceCc.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [getBrandsSliceCc.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default GetBrandsCSlice.reducer


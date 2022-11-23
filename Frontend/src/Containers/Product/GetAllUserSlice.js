import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const getProductsUser = createAsyncThunk("getProductsUser", async(data,thunkAPI)=>{
  console.log("fdfdlkvlcmvlcxmvmxcv,m")
try{
  
    const res = await axios.get('http://localhost:5000/api/product/list')
        return (res.data)
    }
   catch(err){
    console.log(err)
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const GetAllUserSlice = createSlice({
  name: 'getProductsUser',
  initialState: {
    userData:[],
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getProductsUser.pending]:(state)=>{
        state.loading=true
    },
    [getProductsUser.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [getProductsUser.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default GetAllUserSlice.reducer


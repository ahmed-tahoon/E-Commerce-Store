import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const Merchantapply = createAsyncThunk("merchantApply",async (loginData,thunkAPI)=>{
    try{
    console.log(loginData)
    const res = await axios.post('http://localhost:5000/api/merchant/add',loginData)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const addMerchantSlice = createSlice({
  name: 'merchantApply',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [Merchantapply.pending]:(state)=>{
        state.loading=true
    },
    [Merchantapply.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [Merchantapply.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default addMerchantSlice.reducer
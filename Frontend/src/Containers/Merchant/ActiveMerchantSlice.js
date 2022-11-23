import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const activeeMerchand = createAsyncThunk("activeeMerchand",async (data,thunkAPI)=>{
    axios.defaults.headers.common = {
    'Authorization': data.admin.token
    };
    try{
        console.log(data.body)
    const res = await axios.put(`http://localhost:5000/api/merchant/active/`+data.merchant._id,data.body)
    console.log("ACTIVE : ",res)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const ActiveMerchantSlice = createSlice({
  name: 'activeeMerchand',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [activeeMerchand.pending]:(state)=>{
        state.loading=true
    },
    [activeeMerchand.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [activeeMerchand.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default ActiveMerchantSlice.reducer
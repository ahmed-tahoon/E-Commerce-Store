import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const Approvemerchand = createAsyncThunk("merchantApply",async (data,thunkAPI)=>{
    try{
        console.log(data)
    const res = await axios.put(`http://localhost:5000/api/merchant/approve/`+data.merchant._id)
    console.log(res)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const approveMerchandSlice = createSlice({
  name: 'Approvemerchand',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [Approvemerchand.pending]:(state)=>{
        state.loading=true
    },
    [Approvemerchand.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [Approvemerchand.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default approveMerchandSlice.reducer
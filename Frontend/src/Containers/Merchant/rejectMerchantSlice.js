import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const Rejectmerchand = createAsyncThunk("merchantApply",async (data,thunkAPI)=>{
    try{
        console.log(data)
    const res = await axios.delete(`http://localhost:5000/api/merchant/reject/`+data)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const rejectMerchandSlice = createSlice({
  name: 'rejectmerchand',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [Rejectmerchand.pending]:(state)=>{
        state.loading=true
    },
    [Rejectmerchand.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [Rejectmerchand.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default rejectMerchandSlice.reducer
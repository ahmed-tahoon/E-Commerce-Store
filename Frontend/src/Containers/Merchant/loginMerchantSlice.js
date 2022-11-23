import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const Loginmerchand = createAsyncThunk("loginMerchandSlice",async (data,thunkAPI)=>{
    try{
        console.log(data)
    const res = await axios.post(`http://localhost:5000/api/merchant/login/`,data)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const loginMerchandSlice = createSlice({
  name: 'loginMerchandSlice',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [Loginmerchand.pending]:(state)=>{
        state.loading=true
    },
    [Loginmerchand.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [Loginmerchand.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default loginMerchandSlice.reducer
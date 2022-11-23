import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const loginUser = createAsyncThunk("login",async (loginData,thunkAPI)=>{
    try{
    const res = await axios.post('http://localhost:5000/api/auth/login',loginData)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [loginUser.pending]:(state)=>{
        state.loading=true
    },
    [loginUser.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [loginUser.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default loginSlice.reducer
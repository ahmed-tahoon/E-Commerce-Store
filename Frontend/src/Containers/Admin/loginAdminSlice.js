import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const loginadminUser = createAsyncThunk("login",async (loginData,thunkAPI)=>{
    try{
    const res = await axios.post('http://localhost:5000/api/auth/loginadmin',loginData)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const loginAdminSlice = createSlice({
  name: 'login',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [loginadminUser.pending]:(state)=>{
        state.loading=true
    },
    [loginadminUser.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [loginadminUser.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default loginAdminSlice.reducer
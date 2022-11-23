import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const admin = JSON.parse(localStorage.getItem("adminInfo"))


export const getAdmin = createAsyncThunk("getAdmin",async (loginData,thunkAPI)=>{
     axios.defaults.headers.common = {
    'Authorization': admin.token
    };
    try{
    const res = await axios.get('http://localhost:5000/api/user/me')
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const GetAdminSlice = createSlice({
  name: 'getAdmin',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getAdmin.pending]:(state)=>{
        state.loading=true
    },
    [getAdmin.fulfilled]:(state,action)=>{
        state.userData=action.payload.user;
        state.loading=false
        state.pending=false
    },
    [getAdmin.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default GetAdminSlice.reducer
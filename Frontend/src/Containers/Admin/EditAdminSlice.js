import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const admin = JSON.parse(localStorage.getItem("adminInfo"))


export const editAdmin = createAsyncThunk("editAdmin",async (Data,thunkAPI)=>{
     axios.defaults.headers.common = {
    'Authorization': Data.token
    };
    console.log(Data)
    try{
    const res = await axios.put('http://localhost:5000/api/user/update',Data)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const EditAdminSlice = createSlice({
  name: 'editAdmin',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [editAdmin.pending]:(state)=>{
        state.loading=true
    },
    [editAdmin.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [editAdmin.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default EditAdminSlice.reducer
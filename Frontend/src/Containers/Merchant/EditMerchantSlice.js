import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
let merchant = localStorage.getItem("merchantInfo");


export const editMerchant = createAsyncThunk("editAdmin",async (Data,thunkAPI)=>{
     axios.defaults.headers.common = {
    'Authorization': merchant.token
    };
    try{
    const res = await axios.put('http://localhost:5000/api/merchant/edit',Data)
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
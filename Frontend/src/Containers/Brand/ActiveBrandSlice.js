import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const activeBrand = createAsyncThunk("activeBrand",async (data,thunkAPI)=>{
    try{
        console.log(data.body)
    const res = await axios.put(`http://localhost:5000/api/brand/active/`+data.id,data.body)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const ActiveBrandSlice = createSlice({
  name: 'activeBrand',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [activeBrand.pending]:(state)=>{
        state.loading=true
    },
    [activeBrand.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [activeBrand.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default ActiveBrandSlice.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const Merchantlist = createAsyncThunk("Merchantlist",async (loginData,thunkAPI)=>{
    try{
    const res = await axios.get('http://localhost:5000/api/merchant' ,{
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': loginData.token
        },
      })
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})




export const merchantListSlice = createSlice({
  name: 'merchantlist',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [Merchantlist.pending]:(state)=>{
        state.loading=true
    },
    [Merchantlist.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [Merchantlist.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default merchantListSlice.reducer
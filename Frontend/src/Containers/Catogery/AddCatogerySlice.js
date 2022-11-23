import axios from "axios"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const admin = JSON.parse(localStorage.getItem("adminInfo"))



export const Addone = createAsyncThunk("addCategry",async (CatogeryData,thunkAPI)=>{
    try{
      console.log(CatogeryData)
   const res = await axios
      .post("http://localhost:5000/api/category/add", CatogeryData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': admin.token
        },
      })
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})


export const AddCatogerySlice = createSlice({
  name: 'addCategry',
  initialState: {
    userData:[],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [Addone.pending]:(state)=>{
        state.loading=true
    },
    [Addone.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [Addone.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default AddCatogerySlice.reducer
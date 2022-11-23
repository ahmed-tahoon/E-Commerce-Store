import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const categoryList = createAsyncThunk("categoryList", async(token,thunkAPI)=>{
console.log(token);
try{
    const res = await axios.get('http://localhost:5000/api/category/admin/list', {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': token
        },
      })
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const categoryListSlice = createSlice({
  name: 'fetchMerchant',
  initialState: {
    userData:[],
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [categoryList.pending]:(state)=>{
        state.loading=true
    },
    [categoryList.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [categoryList.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default categoryListSlice.reducer


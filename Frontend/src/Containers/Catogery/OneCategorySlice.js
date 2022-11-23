import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const oneCategory = createAsyncThunk("oneCategory", async(id,thunkAPI)=>{
try{
    const res = await axios.get('http://localhost:5000/api/category/one/'+id)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const OneCategorySlice = createSlice({
  name: 'oneCategory',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [oneCategory.pending]:(state)=>{
        state.loading=true
    },
    [oneCategory.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [oneCategory.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default OneCategorySlice.reducer


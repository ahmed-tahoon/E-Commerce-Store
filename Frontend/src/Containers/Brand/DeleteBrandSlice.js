import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const deletebrandSlice = createAsyncThunk("deleteBrandSlice", async(data,thunkAPI)=>{
try{
    const res = await axios.delete('http://localhost:5000/api/brand/delete/'+data)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const DeleteBrandSlice = createSlice({
  name: 'deleteBrand',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [deletebrandSlice.pending]:(state)=>{
        state.loading=true
    },
    [deletebrandSlice.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
        state.name=action.payload.user.name
    },
    [deletebrandSlice.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default DeleteBrandSlice.reducer


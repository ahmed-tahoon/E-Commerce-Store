import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const deletProduct = createAsyncThunk("deletProduct", async(data,thunkAPI)=>{
try{
    const res = await axios.delete('http://localhost:5000/api/product/merchant/delete/'+data)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const DeleteProductSlice = createSlice({
  name: 'deletProduct',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [deletProduct.pending]:(state)=>{
        state.loading=true
    },
    [deletProduct.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [deletProduct.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default DeleteProductSlice.reducer


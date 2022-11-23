import axios from "axios"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'




export const Addone = createAsyncThunk("addProduct",async (productData,thunkAPI)=>{
    try{
   const res = await axios
      .post("http://localhost:5000/api/product/merchant/add", productData.data, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': productData.token
        },
      })
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})


export const addProductSlice = createSlice({
  name: 'addProduct',
  initialState: {
    userData:{},
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



export default addProductSlice.reducer
import axios from "axios"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'




export const Addoneadmin = createAsyncThunk("addProduct",async (productData,thunkAPI)=>{
    try{
   const res = await axios
      .post("http://localhost:5000/api/product/admin/add", productData.data, {
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


export const AddProductAdminSlice = createSlice({
  name: 'addProduct',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [Addoneadmin.pending]:(state)=>{
        state.loading=true
    },
    [Addoneadmin.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [Addoneadmin.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default AddProductAdminSlice.reducer
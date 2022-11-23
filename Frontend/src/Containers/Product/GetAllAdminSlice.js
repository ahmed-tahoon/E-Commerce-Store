import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const getProductsAdmin = createAsyncThunk("getProductSlice", async(data,thunkAPI)=>{
try{
  axios.defaults.headers.common = {
    'Authorization': data.token
    };
    const res = await axios.get('http://localhost:5000/api/product/admin/list', {params:{page: data.page}})
      console.log("F",res.data)
        return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const GetAllAdminSlice = createSlice({
  name: 'fetcgetProductSlicehBrand',
  initialState: {
    userData:[],
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getProductsAdmin.pending]:(state)=>{
        state.loading=true
    },
    [getProductsAdmin.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [getProductsAdmin.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default GetAllAdminSlice.reducer


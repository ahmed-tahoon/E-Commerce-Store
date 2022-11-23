import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const admin = JSON.parse(localStorage.getItem("adminInfo"))


export const editProduct = createAsyncThunk("editProduct", async(data,thunkAPI)=>{
        axios.defaults.headers.common = {
    'Authorization': admin.token
    };
try{
    const res = await axios.put('http://localhost:5000/api/product/admin/'+data.id,data.formData)
    console.log(res.data)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const EditProductSlice = createSlice({
  name: 'editProduct',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [editProduct.pending]:(state)=>{
        state.loading=true
    },
    [editProduct.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [editProduct.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default EditProductSlice.reducer


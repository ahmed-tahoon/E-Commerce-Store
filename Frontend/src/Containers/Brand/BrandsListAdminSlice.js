import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const admin = JSON.parse(localStorage.getItem("adminInfo"))

export const BrandsListAdmin = createAsyncThunk("BrandsListAdmin", async(data,thunkAPI)=>{
try{
    axios.defaults.headers.common = {
    'Authorization': admin.token
    };
    const res = await axios.get('http://localhost:5000/api/brand/admin/brandsList')

    return(res.data.brands)
   

    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const BrandsAdminSlice = createSlice({
  name: 'BrandsListAdmin',
  initialState: {
    userData:[],
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [BrandsListAdmin.pending]:(state)=>{
        state.loading=true
    },
    [BrandsListAdmin.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [BrandsListAdmin.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default BrandsAdminSlice.reducer


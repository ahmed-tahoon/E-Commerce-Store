import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const BrandsList = createAsyncThunk("BrandsSlice", async(data,thunkAPI)=>{
try{
    const res = await axios.get('http://localhost:5000/api/brand/brandsList')

   
    return(res.data.brands)
   

    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const BrandsSlice = createSlice({
  name: 'BrandsSlice',
  initialState: {
    userData:[],
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [BrandsList.pending]:(state)=>{
        state.loading=true
    },
    [BrandsList.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [BrandsList.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default BrandsSlice.reducer


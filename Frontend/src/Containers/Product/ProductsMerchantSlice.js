import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const fetchproductMerchant = createAsyncThunk("fetchProductMerchant", async(token,thunkAPI)=>{

axios.defaults.headers.common = {
    'Authorization': token.token
};

try{
    const res = await axios.get('http://localhost:5000/api/product/merchant')
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const FetchPsMerchantSlice = createSlice({
  name: 'fetchProductMerchant',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchproductMerchant.pending]:(state)=>{
        state.loading=true
    },
    [fetchproductMerchant.fulfilled]:(state,action)=>{
        console.log("Gdfgd")
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [fetchproductMerchant.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default FetchPsMerchantSlice.reducer


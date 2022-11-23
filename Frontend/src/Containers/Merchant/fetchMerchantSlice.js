import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const fetchMerchant = createAsyncThunk("fetchMerchant", async(token,thunkAPI)=>{

axios.defaults.headers.common = {
    'Authorization': token.token
};

try{
    const res = await axios.get('http://localhost:5000/api/merchant/me')
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const fetchMerchantSlice = createSlice({
  name: 'fetchMerchant',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchMerchant.pending]:(state)=>{
        state.loading=true
    },
    [fetchMerchant.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [fetchMerchant.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default fetchMerchantSlice.reducer


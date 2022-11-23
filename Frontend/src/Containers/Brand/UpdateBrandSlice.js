import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const updateBrandSlice = createAsyncThunk("updateBrandSlice", async(data,thunkAPI)=>{
try{
    console.log(data)
    const res = await axios.put('http://localhost:5000/api/brand/update/'+data.id,data.formData)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const UpdateBrandSlice = createSlice({
  name: 'updateBrand',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [updateBrandSlice.pending]:(state)=>{
        state.loading=true
    },
    [updateBrandSlice.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
        state.name=action.payload.user.name
    },
    [updateBrandSlice.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default UpdateBrandSlice.reducer


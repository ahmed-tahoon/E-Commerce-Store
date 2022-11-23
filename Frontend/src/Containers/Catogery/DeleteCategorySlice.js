import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const deletecategorySlice = createAsyncThunk("deletecategorySlice", async(data,thunkAPI)=>{
try{
    const res = await axios.delete('http://localhost:5000/api/category/delete/'+data.id,{
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': data.admin.token
        },
      })
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const DeleteCategorySlice = createSlice({
  name: 'deletecategorySlice',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [deletecategorySlice.pending]:(state)=>{
        state.loading=true
    },
    [deletecategorySlice.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [deletecategorySlice.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default DeleteCategorySlice.reducer


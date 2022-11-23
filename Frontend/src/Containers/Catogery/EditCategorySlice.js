import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const editCategory = createAsyncThunk("editProduct", async(data,thunkAPI)=>{
        console.log(data)

try{
    const res = await axios.put('http://localhost:5000/api/category/edit/'+data.id,data.formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': data.admin.token
        },
      })
    console.log(res.data)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const EditCategorySlice = createSlice({
  name: 'editCategory',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [editCategory.pending]:(state)=>{
        state.loading=true
    },
    [editCategory.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [editCategory.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default EditCategorySlice.reducer


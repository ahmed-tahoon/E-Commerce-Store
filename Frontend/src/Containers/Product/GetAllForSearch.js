import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const getAllSearchAdmin = createAsyncThunk("GetAllForSearch", async(data,thunkAPI)=>{
try{
  console.log("page" , data.page)
  axios.defaults.headers.common = {
    'Authorization': data.token
    };
    const res = await axios.get('http://localhost:5000/api/product/admin/listALL')
    console.log(res)

        return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const GetAllForSearch = createSlice({
  name: 'GetAllForSearch',
  initialState: {
    userData:[],
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getAllSearchAdmin.pending]:(state)=>{
        state.loading=true
    },
    [getAllSearchAdmin.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [getAllSearchAdmin.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default GetAllForSearch.reducer


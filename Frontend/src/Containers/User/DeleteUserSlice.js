import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const admin = JSON.parse(localStorage.getItem("adminInfo"));

export const deleteUser = createAsyncThunk("deleteUser", async(id,thunkAPI)=>{
console.log(id)
axios.defaults.headers.common = {
    'Authorization': admin.token
};

try{
    const res = await axios.delete('http://localhost:5000/api/user/delete/'+id )
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const DeleteUserSlice = createSlice({
  name: 'deleteUser',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [deleteUser.pending]:(state)=>{
        state.loading=true
    },
    [deleteUser.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
        state.name=action.payload.user.name
    },
    [deleteUser.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default DeleteUserSlice.reducer


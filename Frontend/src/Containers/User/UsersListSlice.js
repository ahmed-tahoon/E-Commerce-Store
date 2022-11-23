import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const fetchUsers = createAsyncThunk("fetchUsers", async(token,thunkAPI)=>{

axios.defaults.headers.common = {
    'Authorization': token
};

try{
    const res = await axios.get('http://localhost:5000/api/user/')
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const UsersListSlice = createSlice({
  name: 'fetchUsers',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]:(state)=>{
        state.loading=true
    },
    [fetchUsers.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [fetchUsers.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default UsersListSlice.reducer


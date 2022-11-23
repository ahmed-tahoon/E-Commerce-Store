import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const fetchUser = createAsyncThunk("fetchUser", async(token,thunkAPI)=>{

axios.defaults.headers.common = {
    'Authorization': token.token
};

try{
    const res = await axios.get('http://localhost:5000/api/user/me')
    console.log("xxxxxxxxxxxxxxxx",res.data)
    return (res.data)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const FetchUserSlice = createSlice({
  name: 'fetchUser',
  initialState: {
    userData:{},
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchUser.pending]:(state)=>{
        state.loading=true
    },
    [fetchUser.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
        state.name=action.payload.user.name
    },
    [fetchUser.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default FetchUserSlice.reducer


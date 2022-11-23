import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const categoryL = createAsyncThunk("categoryL", async(token,thunkAPI)=>{
try{
    const res = await axios.get('http://localhost:5000/api/category/list')

      let chuck=[]
     let chuckSize =4;

     for(let i =0; i<res.data.length ; i+=chuckSize)
     {
      chuck.push(res.data.slice(i,i+chuckSize));
     }

    
    return (chuck)
    }
   catch(err){
    return thunkAPI.rejectWithValue({ error: err.response.data});
   }
    //return res.data
})



export const CategoryLSlice = createSlice({
  name: 'fetchMerchant',
  initialState: {
    userData:[],
    name:"WELCOME!",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [categoryL.pending]:(state)=>{
        state.loading=true
    },
    [categoryL.fulfilled]:(state,action)=>{

        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [categoryL.rejected]:(state,action)=>{


    

        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})


export default CategoryLSlice.reducer


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'




export const logout = createAsyncThunk("logout",async(data,init)=>{
  
    const initialState = {
    userData:{},
    loading: false,
    error: "",
}

return initialState

})

export const logOutSlice = createSlice({
  name: 'logout',
  initialState: {
    userData:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [logout.pending]:(state)=>{
        state.loading=true
    },
    [logout.fulfilled]:(state,action)=>{
        state.userData=action.payload;
        state.loading=false
        state.pending=false
    },
    [logout.rejected]:(state,action)=>{
        state.error=action.payload.error.errors
        state.loading=false
        state.loading=false
    }
  },
})



export default logOutSlice.reducer
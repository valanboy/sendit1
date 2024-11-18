import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user", //the name of the slice

  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },

  reducers:{  //actions to login a user
    loginStart: (state)=>{
        state.isFetching = false;
    },
    loginSuccess:(state, action) =>{
        state.isFetching = false
        state.currentUser = action.payload
        state.error = false
    },
    loginFailure: (state)=>{
               state.isFetching = false;
               state.error = true
    },
    logOut: (state)=>{
        state.isFetching = false
        state.error = false
        state.currentUser = null
    }
  }
});


export const {loginStart, loginSuccess, loginFailure, logOut} = userSlice.actions

export default userSlice.reducer
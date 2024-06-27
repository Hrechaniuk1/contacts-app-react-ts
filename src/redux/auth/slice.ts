import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {toast} from 'react-hot-toast'


import { register, login, logout, refreshUser } from './operations.js'
import { RootState } from "../store"; 

function errorHandler() {
    toast('Oops, try again', { style: {backgroundColor: 'red'}})
}

function loadingHandler() {
    // toast('Loading...', { style: {backgroundColor: 'teal'}})
}


type initialType = {
  user: {name: null | string,
    email: null | string},
  token: null | string,
  isLoggedIn: boolean,
  isRefreshing: boolean,
}
 
const initialState: initialType = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, loadingHandler)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
      })
      .addCase(register.rejected, errorHandler)

      .addCase(login.pending, loadingHandler)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
      })
      .addCase(login.rejected, () => {
        toast('Probably there are no user with such email, or the password is wrong', {duration: 3000, style: {backgroundColor: 'red'}})
      })
      
      .addCase(logout.pending, loadingHandler)
      .addCase(logout.fulfilled, (state) => {
        state.user = {name: null, email: null,}
        state.token = null
        state.isLoggedIn = false
      })
      .addCase(logout.rejected, errorHandler)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoggedIn = true
        state.isRefreshing = false
      })
      .addCase(refreshUser.rejected, (state) => {
        state.token = null
        state.isLoggedIn = false
        state.isRefreshing = false
        state.user.email = null
        state.user.email = null
      })
    }
})

export const authReduser = authSlice.reducer
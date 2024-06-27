import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from 'axios';

import { registerFetch, logInFetch, logOutFetch, setAuthHeader, refreshUserFetch } from "../../fetch/fetch";
import * as FetchTypes from '../../fetch/fetch.types'
import { RootState } from "../store";

export const register = createAsyncThunk<FetchTypes.RegisterLoginType, FetchTypes.InfoForRegister, {rejectValue: string}>('auth/register', async (data, thunkAPI) => {
    try {
        const response = await registerFetch(data)
        setAuthHeader(response.token)
        return response
    } catch (error) {
        if(error instanceof AxiosError) return thunkAPI.rejectWithValue(error.message)
            return thunkAPI.rejectWithValue('An unexpected error occurred')
    }
})

export const login = createAsyncThunk<FetchTypes.RegisterLoginType, FetchTypes.InfoForLogin, {rejectValue: string}>('auth/login', async (data, thunkAPI) => {
    try {
        const response = await logInFetch(data)
        setAuthHeader(response.token)
        return response
    } catch (error) {
        if(error instanceof AxiosError) return thunkAPI.rejectWithValue(error.message)
            return thunkAPI.rejectWithValue('An unexpected error occurred')
    }
})

export const logout = createAsyncThunk<void, void, {rejectValue: string}>('auth/logout', async (_, thunkAPI)  => {
    try {
       await logOutFetch()
    } catch (error) {
        if(error instanceof AxiosError) return thunkAPI.rejectWithValue(error.message)
            return thunkAPI.rejectWithValue('An unexpected error occurred')
    }
})

export const refreshUser = createAsyncThunk<FetchTypes.UserInfo, void, {state: any, rejectValue: string}>('auth/refresh', async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState()
    setAuthHeader(state.auth.token)
    const response = await refreshUserFetch()

    return response
    } catch (error) {
        if(error instanceof AxiosError) return thunkAPI.rejectWithValue(error.message)
            return thunkAPI.rejectWithValue('An unexpected error occurred')
    }
},
{
    condition(_, thunkAPI) {
        const state = thunkAPI.getState()
        return state.auth.token !== null
    }
}
)
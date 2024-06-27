import {createAsyncThunk} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { addTask, getTasks, deleteTask, updateTask } from '../../fetch/fetch'
import * as FetchTypes from '../../fetch/fetch.types'

export const fetchContacts = createAsyncThunk<FetchTypes.Task[], void, {rejectValue: string}>('contacts/fetchAll', 
    async (_, thunkAPI) => {
        try {
            const response = await getTasks()
            return response
        } catch (error) {
            if(error instanceof AxiosError) {
                return thunkAPI.rejectWithValue(error.message) 
            }
            return thunkAPI.rejectWithValue('An unexpected error occurred')
        }

    }
    
)

export const addContact = createAsyncThunk<FetchTypes.Task, Omit<FetchTypes.Task, 'id'>, {rejectValue: string}>('contacts/addContact', 
    async (data, thunkAPI) => {
        try {
            const response = await addTask(data)
            return response
        } catch (error) {
           if(error instanceof AxiosError) thunkAPI.rejectWithValue(error.message)
            return thunkAPI.rejectWithValue('An unexpected error occurred')
        }
    }
)

export const deleteContact = createAsyncThunk<FetchTypes.Task, string, {rejectValue: string}>('contacts/deleteContact', 
    async (id, thunkAPI) => {
        try {
            const response = await deleteTask(id)
        return response
        } catch (error) {
           if(error instanceof AxiosError) return thunkAPI.rejectWithValue(error.message)
            return thunkAPI.rejectWithValue('An unexpected error occurred')
        }
    } 
)

export const updateContact = createAsyncThunk<FetchTypes.Task, FetchTypes.UpdateType, {rejectValue: string}>('contacts/updateContact', 
    async (data, thunkAPI) => {
        try {
            const response = await updateTask(data)
        return response
        } catch (error) {
           if(error instanceof AxiosError) return thunkAPI.rejectWithValue(error.message)
            return thunkAPI.rejectWithValue('An unexpected error occurred')
        }
    } 
)
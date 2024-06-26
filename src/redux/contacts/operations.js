import {createAsyncThunk} from '@reduxjs/toolkit'

import { addTask, getTasks, deleteTask, updateTask } from '../../fetch/fetch.ts'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
    async (_, thunkAPI) => {
        try {
            const response = await getTasks()
            
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }

    }
    
)

export const addContact = createAsyncThunk('contacts/addContact', 
    async (data, thunkAPI) => {
        try {
            const response = await addTask(data)
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk('contacts/deleteContact', 
    async (id, thunkAPI) => {
        try {
            const response = await deleteTask(id)
        return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    } 
)

export const updateContact = createAsyncThunk('contacts/updateContact', 
    async (data, thunkAPI) => {
        try {
            const response = await updateTask(data)
        return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    } 
)
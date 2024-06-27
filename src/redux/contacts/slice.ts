import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import {toast} from 'react-hot-toast' 

import { addContact, fetchContacts, deleteContact, updateContact } from './operations.js'
import * as FetchTypes from '../../fetch/fetch.types'

function errorHandler(state: any, action: PayloadAction<any>) {
    state.error = action.payload
    toast('Oops, try again', { style: {backgroundColor: 'red'}})
    
}

function loadingHandler(state: any) {
    state.loading = true
}


export type initialContactsType = {
    items: FetchTypes.Task[],
    error: null | any,
    loading: boolean,
}

const initialState: initialContactsType = {
    items: [],
        error: null,
        loading: false
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState, 
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, loadingHandler)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.error = null
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchContacts.rejected, errorHandler)
            // 
            .addCase(addContact.pending, loadingHandler)
            .addCase(addContact.fulfilled, (state, action: PayloadAction<FetchTypes.Task>) => {
                state.error = null
                state.loading = false
                state.items.push(action.payload)
                toast('Successfully added', { style: {backgroundColor: 'green'}})
            })
            .addCase(addContact.rejected, errorHandler)
            // 
            .addCase(deleteContact.pending, loadingHandler)
            .addCase(deleteContact.fulfilled, (state, action: PayloadAction<FetchTypes.Task>) => {
                state.error = null
                state.loading = false
                const elem = state.items.find(item => item.id === action.payload.id)
                state.items.splice(state.items.indexOf(elem as FetchTypes.Task), 1)
                toast('Successfully deleted', { style: {backgroundColor: 'green'}})
            })
            .addCase(deleteContact.rejected, errorHandler)
            .addCase(updateContact.pending, loadingHandler)
            .addCase(updateContact.fulfilled, (state, action: PayloadAction<FetchTypes.Task>) => {
                state.error = null
                state.loading = false
                const elem = state.items.find(item => item.id === action.payload.id)
                state.items.splice(state.items.indexOf(elem as FetchTypes.Task), 1, action.payload)
                toast('Successfully updated', { style: {backgroundColor: 'green'}})
            })
            .addCase(updateContact.rejected, errorHandler)
    }

})


export const contactsReduser = contactsSlice.reducer
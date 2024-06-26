import { createSelector } from '@reduxjs/toolkit'
import {selectFilter} from '../filter/selectors'

export const selectContacts = state => state.items.items
export const selectError = state => state.items.error
export const selectLoading = state => state.items.loading



export const selectVisibleContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    const visibleContacts = contacts.filter(curr => {
        if (parseInt(filter.name)) {
          return  curr.number.toString().toLowerCase().includes(filter.name.toLowerCase())
        } else {
            return  curr.name.toLowerCase().includes(filter.name.toLowerCase())
        }
    })
    return visibleContacts
})
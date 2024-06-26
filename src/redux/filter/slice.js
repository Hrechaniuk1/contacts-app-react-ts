import { createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
		name: ''
    },
    reducers: {
        changeFilter: {
            reducer(state, action) {
                state.name = action.payload.name
            },
            prepare(name) {
                return {
                    payload: {
                        name,
                    }
                }
            }
        }
    }
})

export const { changeFilter } = filterSlice.actions
export const filterReduser = filterSlice.reducer
import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: {name: string} = {name: ''}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: {
            reducer(state, action: PayloadAction<{name: string}>
            ) {
                state.name = action.payload.name
            },
            prepare(name: string) {
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
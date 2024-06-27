import { RootState } from "../store"

export const selectFilter = (state: RootState): {name: string} => state.name

import { RootState } from "../store"

export const selectUser = (state: RootState): {name: null | string,
    email: null | string} => state.auth.user
export const selectToken = (state: RootState): (string | null) => state.auth.token
export const selectIsLoggedIn = (state: RootState): boolean => state.auth.isLoggedIn
export const selectIsRefreshing = (state: RootState): boolean => state.auth.isRefreshing
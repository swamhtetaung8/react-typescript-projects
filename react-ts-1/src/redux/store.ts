import {configureStore} from '@reduxjs/toolkit'
import birthdaySlice from "./features/birthdaySlice";

export const store = configureStore({
    reducer: {
        birthdays: birthdaySlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
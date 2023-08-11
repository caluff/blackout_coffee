import { configureStore } from '@reduxjs/toolkit'

import userReducer from "@/features/user/userSlice";
import sidebarReducer from "@/features/sidebar/sidebarSlice"
import offerReducer from "@/features/offer/offerSlice"
import currentSectionReducer from "@/features/currentSection/currentSectionSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    offer: offerReducer,
    currentSection:currentSectionReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
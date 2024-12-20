import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import CounterSlice from "./features/CounterSlice"
import componentMainValue from "./features/SendRecipeSlice"

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
        componentMain: componentMainValue 
    }
})

/* // Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store */

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
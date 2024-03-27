import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/useraSlice'
export const store = configureStore({
  reducer: {user : userReducer},
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false,
  }),
})
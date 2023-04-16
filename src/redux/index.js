import { configureStore } from '@reduxjs/toolkit'
import userSlice from './feature/user'

const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

export default store

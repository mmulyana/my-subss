import { configureStore } from '@reduxjs/toolkit'
import userSlice from './feature/user'
import subscriptionSlice from './feature/subscription'
import detailSlice from './feature/detail'

const store = configureStore({
  reducer: {
    user: userSlice,
    subscription: subscriptionSlice,
    detail: detailSlice,
  },
})

export default store

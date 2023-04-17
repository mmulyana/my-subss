import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

const subscriptionSLice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    importSubscription: (state, action) => {
      state.data = [...action.payload]
    },
    delSubscription: (state, action) => {
      const { id } = action.payload
      const tmp = state.data.filter((data) => data.id !== id)
      state.data = [...tmp]
    },
  },
})

export const { importSubscription, delSubscription } =
  subscriptionSLice.actions

export default subscriptionSLice.reducer

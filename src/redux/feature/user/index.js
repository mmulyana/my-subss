import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  aud: '',
  email: '',
  id: null,
  user_metadata: null,
}

const userSLice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { aud, email, id, user_metadata } = action.payload
      state.aud = aud
      state.email = email
      state.id = id
      state.user_metadata = user_metadata
    },
    removeUser: (state, action) => {
      state.aud = ''
      state.email = ''
      state.id = null
      state.user_metadata = null
    },
  },
})

export const { addUser, removeUser } = userSLice.actions

export default userSLice.reducer

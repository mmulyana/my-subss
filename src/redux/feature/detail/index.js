import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

const detailSlice = createSlice({
  name: 'detailDrawer',
  initialState,
  reducers: {
    addDetail: (state, action) => {
      state.data = {...action.payload}
    },
    delDetail: (state, ) => {
      state.data = null
    },
  },
})

export const { addDetail, delDetail } =
  detailSlice.actions

export default detailSlice.reducer

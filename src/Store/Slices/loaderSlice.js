/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { setLoader } = loaderSlice.actions

const loaderSelector = (state) => state.loader

export const selectLoader = createSelector(
  loaderSelector,
  (state) => state.loading
)

export default loaderSlice

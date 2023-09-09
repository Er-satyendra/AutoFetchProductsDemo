import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { productApi } from './Api/Product/productApi'
import loaderSlice from './Slices/loaderSlice'

const rootReducer = combineReducers({
  [loaderSlice.name]: loaderSlice.reducer,
  [productApi.reducerPath]: productApi.reducer,
})

const middlewares = [productApi.middleware]

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
})

export default store

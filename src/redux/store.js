import { configureStore } from '@reduxjs/toolkit'
import questionReducer from './features/questionSlice'

export const store = configureStore({
  reducer: {
    question: questionReducer
  }
})
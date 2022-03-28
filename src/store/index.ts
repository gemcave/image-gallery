import { configureStore } from '@reduxjs/toolkit';
import imagesReducer, { loadState } from './images/reducer';


export const store = configureStore({
    reducer: {
        images: imagesReducer,
    },
    preloadedState: loadState(),
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


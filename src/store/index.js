import { configureStore } from "@reduxjs/toolkit";
import credentials from './slices/credentials.slice'
import tracks from './slices/tracks.slice.js'
export default configureStore({
  reducer: {
    credentials,
    tracks,
  }
})
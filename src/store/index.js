import { configureStore } from "@reduxjs/toolkit";

import galleryReducers from './gallery'

const store = configureStore({
    reducer: {gallery: galleryReducers}
})

export default store;
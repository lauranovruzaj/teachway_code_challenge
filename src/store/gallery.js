import { createSlice } from "@reduxjs/toolkit";

const initalGalleryState = {
    galleryOptions: {
        showViralImages: true,
        section: "hot",
        sort: 'viral',
        window: 'day'
    },

    showViral: () => {},
    setSection: () => {},
    setSort: () => {},
    setWindow: () => {}
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: initalGalleryState,
    reducers: {
        showViral(state) {
            state.galleryOptions.showViralImages = !state.galleryOptions.showViralImages; 
        }, 
        setSection(state, action) {
            state.galleryOptions.section = action.payload.section; 
        },

        setSort(state, action) {
            state.galleryOptions.sort = action.payload.sort; 
        },
        
        setWindow(state, action) {
            state.galleryOptions.window = action.payload.window; 
        }
    }
})

export const galleryActions = gallerySlice.actions;

export default gallerySlice.reducer;
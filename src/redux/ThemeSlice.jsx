import { createSlice } from "@reduxjs/toolkit";
import reducer from "./CartSlice";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: 'light'
    },

    reducers: {
        themeAction: (state, action) => {
            state.theme = action.payload;
        }
    }
})

export const {themeAction} = themeSlice.actions;
export default themeSlice.reducer;
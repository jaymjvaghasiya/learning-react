import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name: "bank",
    initialState: {
        balance: 0
    },
    reducers: {
        depositeAction: (state, action) => {
            state.balance += action.payload;
        },
        withdrawAction: (state, action) => {
            state.balance -= action.payload;
        }
    }
})

export const {depositeAction, withdrawAction} = bankSlice.actions;
export default bankSlice.reducer;
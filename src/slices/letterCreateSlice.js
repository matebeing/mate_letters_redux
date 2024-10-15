import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const letterCreateSlice = createSlice({
    name: 'letterCreate',
    initialState,
    reducers: {
        createLetter: (state, action) => {
            state.value = [...state.value, action.payload];
        }
    }
})

export const { createLetter } = letterCreateSlice.actions;
export default letterCreateSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

const modalSlice = createSlice({
    name: 'modalToggle',
    initialState,
    reducers: {
        setVisibility: (state) => {
            state.value = true
        },
    }
})

export const { setVisibility } = modalSlice.actions;
export default modalSlice.reducer;

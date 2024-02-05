import { createSlice } from "@reduxjs/toolkit";

export const joblistSlice = createSlice({
    name: 'joblist',
    initialState: {
        isActive: false
    },
    reducers: {
        setIsActive: (state, action) => {
            state.isActive = action.payload
        }
    }
});
// store.js
import messagesReducer from '../reducers/messagesSlice';
import { joblistSlice } from '../reducers/joblistSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    joblist: joblistSlice.reducer
    // Add other slices and reducers if needed
  },
});

export default store;

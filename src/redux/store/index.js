// store.js
import messagesReducer from '../reducers/messagesReducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    // Add other slices and reducers if needed
  },
});

export default store;

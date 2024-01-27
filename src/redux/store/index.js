// store.js
import messagesReducer from '../reducers/messagesReducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    messages: messagesReducer, // Assuming 'messagesReducer' is the reducer for the 'messages' slice
    // Add other slices and reducers if needed
  },
  // Other configurations like middleware, devTools, etc., can be added here if necessary
});

export default store;

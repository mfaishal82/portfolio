// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice';

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer, // Menghubungkan darkMode slice ke store
  },
});

export default store;
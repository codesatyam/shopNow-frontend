import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../state/reducers/userReducer';

const store = configureStore({
    reducer: {
        user: userReducer
    },
});

export default store;

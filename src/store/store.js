import { configureStore } from '@reduxjs/toolkit'; // Capital "S"
import todoReducer from '../slice/slice'; 

export const store = configureStore({
    reducer: {
        todos: todoReducer 
    }
});

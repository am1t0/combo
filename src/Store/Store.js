import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../Features/Todo/Todo.js'


export const store = configureStore({
    reducer:
    {
       todo: todoSlice.reducer,
    }
});
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello world", complete: false }]
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                complete: false
            };
            state.todos.push(todo);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                if (text !== undefined) {
                    todo.text = text;
                }
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const { id } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.complete = !todo.complete; // Toggle complete status
            }
        }
    }
});

export const { addTodo, updateTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;

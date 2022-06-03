import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {todos: []}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, todo) {
            state.todos.push(todo)
        },
        isCheckedTodo(state, action) {
            const id = action.payload;
            const todo = state.todos.find((todoItem) => todoItem.payload.id === id);
            todo.payload.isChecked = !todo.payload.isChecked;
        }
    }
})

const store = configureStore({
    reducer: {
        todos: todosSlice.reducer
    }
})

export const todosActions = todosSlice.actions;

export default store
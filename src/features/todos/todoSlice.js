import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id: 1, text: 'Hi, welcome to lulu app' }]
}

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            state.todos.push({id: nanoid(), text: action.payload, enableEdit:false })
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
              todo.text = text;
            }
          },
        enableEditTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
              todo.enableEdit = true;
            }
          },
          disableEditTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
              todo.enableEdit = false;
            }
          }
    }
})


export const {addTodo, removeTodo, updateTodo, enableEditTodo, disableEditTodo} = todoSlice.actions;
export default todoSlice.reducer;
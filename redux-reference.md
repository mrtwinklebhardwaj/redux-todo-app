
# 📘 Redux Toolkit – Quick Reference Notes

These notes summarize the implementation and concepts used in the **Redux Todo App** built with **React + Redux Toolkit**.

---

## 📦 Core Libraries

- **Redux**: State management core library.
- **React-Redux**: Binding layer between React and Redux.
- **Redux Toolkit (RTK)**: Recommended approach for Redux; simplifies setup and avoids common issues like state mutation.

---

## 🏁 Setup Steps

### 1. Create the Redux Store

- One global store is enough for the entire app — this is the **single source of truth**.
- Use `configureStore` from Redux Toolkit.

```js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
```

### 2. Create a Slice

Redux Toolkit encourages feature-based slices. Each slice typically includes:
- `name`: The feature name (e.g., "todos")
- `initialState`: Initial state for the slice
- `reducers`: Object of reducer functions

```js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'Welcome to the todo app' }]
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

> ⚠️ RTK uses Immer internally, so you can "mutate" the state directly.

---

## 🧠 Data Flow

Redux follows a **unidirectional data flow**. You must wire reducers into the store to enable this.

```txt
Component → dispatch(action) → reducer → store → UI re-renders
```

---

## 🎯 Using Redux in Components

### 1. Send Data (Dispatch an Action)

```js
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

const dispatch = useDispatch();
dispatch(addTodo('New Task'));
```

### 2. Read Data (Select from Store)

```js
import { useSelector } from 'react-redux';

const todos = useSelector(state => state.todos.todos);
```

---

## 📝 Best Practices

- Stick to one global store (`configureStore`) for predictable state management.
- Use feature-based slices (`createSlice`) for modularity.
- Use `Immer`-style mutations for cleaner reducer code.
- Separate reducer logic into other files if it becomes too large.
- Keep UI and state logic cleanly separated.

---

## 📁 Suggested File for Reference

Save this file as:  
`docs/redux-notes.md`  
or  
`redux-reference.md` inside your project repo for quick access.

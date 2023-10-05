import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
     todos : [{ id: 1, text: "Hello world"}]
}

// creating slice (bigger version of reducer)
// slices have name ( when we use redux toolkit extension there this name will be shown)
// every slice has initialState
// reducers contain properties and functions
//fuctions will always have access to state and action
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: ( state, action ) => {
            const todo = { 
                id: nanoid(), /* nanoid is used for unique id */
                text: action.payload /* payload is an object */
            }
            // adding into the state
            state.todos.push(todo)
        },
        removeTodo : ( state, action ) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

// export individual functionality
export const { addTodo, removeTodo } = todoSlice.actions

// giving awareness to store.js , if awareness is not given then it cannot be maintained,bz its an restricted, have to
// register reducers in store

export default todoSlice.reducer

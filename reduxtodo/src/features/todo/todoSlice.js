import { createSlice , nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [ { id:1 , text:"Hello World"}]
}

export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(State , action) => {
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            State.todos.push(todo)
        }, 
        removeTodo:(state , action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }

})

export const { addTodo , removeTodo} = TodoSlice.actions
export default TodoSlice.reducer
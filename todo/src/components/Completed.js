import React, { useReducer } from "react";
import { todoReducer, initialState } from "../reducers/TodoReducer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export const Completed = () => {
 const [state, dispatch]   = useReducer(todoReducer, initialState);
    console.log(state, dispatch);

const addTodo = newTodo => dispatch({type: "ADD_TODO", text: newTodo});

const toggleCompleted = id => dispatch({type: "TOGGLE_COMPLETED", id: id});

const clearCompleted = () => dispatch({type: "CLEAR_COMPLETED"});

 return (
     <div>
         <TodoForm addTodo={addTodo}/>
         <TodoList clearCompleted={clearCompleted} toggleCompleted={toggleCompleted} todo={state.todo}/>
     </div>
 )
}
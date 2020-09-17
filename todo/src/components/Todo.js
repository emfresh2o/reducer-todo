import React from "react";
import "./Todo.css";

const Todo = props => {
    return (
        <div
            onClick={() => props.toggleCompleted (props.todo.id)}
            className={`todo${props.todo.completed ? 'completed' : ''}`}
            >
                <p id='todo-items' style={{ color: 'white', fontSize: '20px', paddingLeft: '15px' }}>{props.todo.item}</p>
        </div>
    );
};



export default Todo;
import React, { Component } from "react";

class TodoForm extends Component {
    constructor(){
        super()
        this.state = {
            newTodo: ""
        }
    }
    handleChanges = (e) => {
        this.setState({
            newTodo: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo: ""});
    }

  
    render(){
        return(
            <form id='to-do-form' onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="item" 
                    placeholder="...todo" 
                    value={this.state.newTodo} 
                    onChange={this.handleChanges}/>
                <button type='submit'>Add Todo</button>
            </form>
            
        );
    }
};

export default TodoForm;
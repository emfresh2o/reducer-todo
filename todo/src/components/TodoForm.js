import React, { Component } from "react";

class TodoForm extends Component {
    constructor(){
        super()
        this.state = {
            newItem: ""
        }
    }
    handleChanges = (e) => {
        this.setState({
            newItem: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({newItem: ""});
    }

  
    render(){
        return(
            <form id='to-do-form' onSubmit={this.handleSubmit}>
                <input 
                    type="text" name="item" placeholder="...todo" value={this.state.newItem} 
                    onChange={this.handleChanges}/>
                <button type='submit'>Add Todo</button>
            </form>
            
        );
    }
};

export default TodoForm;
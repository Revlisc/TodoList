import React, { Component } from 'react';
import '../todo.css'

class Todo extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleRemove() {
        //console.log('WAS CLICKED')
        this.props.removeTask(this.props.id)
    }

    toggleForm() {
        this.setState({editing: !this.state.editing})
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({editing: false})
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    
    handleToggle(e) {
        this.props.toggleComplete(this.props.id)
    }
    
    render () {
        let edit;
        if (this.state.editing) {
            edit = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' name='task' value={this.state.task} onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else { 
            edit = (
            
                <div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li className={this.props.completed ? 'completed' : ''} onClick={this.handleToggle}>{this.props.task}</li>
                </div>
            )
        }
        return edit;
    }
}

export default Todo;
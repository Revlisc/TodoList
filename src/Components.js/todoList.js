import React, { Component } from 'react';
import NewTodo from './newTodo';
import { Todo } from './todo';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {todo: [ {task: 'Test'}, {task: 'Test 2'}]}
        this.create = this.create.bind(this);
    }

    create(newTodo) {
        this.setState( {todo: [...this.state.todo, newTodo]})
    }
    
    render() {
        const todos = this.state.todo.map( todo => {
            return <Todo task={todo.task} />
        })
        return (
            <div>
                <h1>Todo List</h1>
                <NewTodo createTask={this.create}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;
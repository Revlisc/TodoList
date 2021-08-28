import React, { Component } from 'react';
import NewTodo from './newTodo';
import  Todo  from './todo';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {todo: []}
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)
    }

    create(newTodo) {
        this.setState( {todo: [...this.state.todo, newTodo]})
    }

    remove(id) {
        this.setState({todo: this.state.todo.filter(todo => todo.id !== id)})
    }

    update(id, updated) {
        const updateTodo = this.state.todo.map(todo => {
            if (todo.id === id) {
                return{...todo, task: updated}
            }

            return todo
        })
        this.setState({todo: updateTodo})
    }

    toggleComplete(id) {
        const updateComplete = this.state.todo.map(todo => {
            if (todo.id === id) {
                return{...todo, completed: !todo.completed}
            }

            return todo
        })
        this.setState({todo: updateComplete})
    }
    
    render() {
        const todos = this.state.todo.map( todo => {
            return <Todo 
                key={todo.id} 
                id={todo.id} 
                task={todo.task} 
                removeTask={this.remove} 
                updateTodo={this.update}
                completed={todo.completed}
                toggleComplete={this.toggleComplete}
                />
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
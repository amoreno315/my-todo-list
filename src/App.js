import React, { Component } from 'react';

import './App.css';
import Todo from './components/Todo';

class App extends Component {
  state = {
    todos: [{title:'Lern React', done: false}],
    inputValue: '',
  }

  handleChangeInput = (event) => {
    this.setState ({inputValue: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let {todos, inputValue} = this.state;
    todos.push({
      title: inputValue, 
      // done: false,
    })
    this.setState({
      todos: todos,
      inputValue: '',
    })
  }

  handleCheckbox = (index) => {
    const { todos } = this.state;
    todos[index].done = !todos[index].done;
    this.setState({
      todos: todos,
    })
  }

  handleDelete = (index) => {
    const {todos} = this.state;
    todos.splice(index, 1);
    this.setState({
      todos:todos,
    })
  }
  render() {
    const {todos, inputValue} = this.state;
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput}/>
          <input type="submit" value="add task"/>
        </form>
        <ul>
          {todos.map((todo, index) => {
            return <Todo
              todo={todo}
              key={index}
              index={index}
              onCheck={this.handleCheckbox}
              onDelete={this.handleDelete}
            />
          })}
        </ul>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'

 class Todo extends Component {
  
  render() {
    const {todo, index, onCheck, onDelete} = this.props;
    return (
      
    <li className={todo.done ? 'is-done' : ''}>
      {todo.title}
      <input 
        type="checkbox" 
        checked={todo.done} 
        onChange={() => {onCheck(index)} }
      />
      <button onClick={() => {onDelete(index)}}>delete</button>
    </li>
      
    )
  }
}
export default Todo;
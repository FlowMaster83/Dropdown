import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';
import todo from '../../todo.json';
import { Caption, ToDoContainer, List } from './ToDoList.styled';

class ToDoList extends Component {
  state = {
    todoList: todo,
  };

  handleCheckCompleted = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleDelete = id => {
    this.setState(prev => ({
      todoList: prev.todoList.filter(todo => todo.id !== id),
    }));
  };

  render() {
    return (
      <ToDoContainer>
        <Caption>ToDo list</Caption>
        <List>
          {this.state.todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={this.handleCheckCompleted}
              handleDelete={this.handleDelete}
            />
          ))}
        </List>
      </ToDoContainer>
    );
  }
}

export default ToDoList;

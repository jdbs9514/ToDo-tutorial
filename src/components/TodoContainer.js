/* eslint-disable react/prefer-stateless-function */
/*eslint-disable*/
import React from 'react';
import TodosList from './TodoList';
import Header from './Header';
class TodoContainer extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development enviroment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    console.log("clicked", id)
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
      </div>
    );
  }
}

export default TodoContainer;

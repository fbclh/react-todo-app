import { Component } from 'react';
import { Header } from './Header';
import { InputTodo } from './InputTodo';
import { TodosList } from './TodosList';
import { v4 as uuidv4 } from 'uuid';

export class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  addTodo = (title) => {
    // id: Date.now(), // use Date.now() to generate unique id
    const newTodo = {
      id: uuidv4(), // use uuidv4() to generate unique id
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  // setUpdate = (updatedTodo, id) => {
  //   this.setState({
  //     todos: [
  //       ...this.state.todos.map((todo) => {
  //         if (todo.id === id) {
  //           return {
  //             ...todo,
  //             title: updatedTodo,
  //           };
  //         }
  //         return todo;
  //       }),
  //     ],
  //   });
  // };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodo} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

import { Component } from 'react';
import { Header } from './Header';
import { InputTodo } from './InputTodo';
import { TodosList } from './TodosList';
import { v4 as uuidv4 } from 'uuid';

export class TodoContainer extends Component {
  state = {
    todos: [],
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

  // fetch data from API (https://jsonplaceholder.typicode.com/todos) and store in state as todos array (this.state.todos)
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ todos: data }));
  // }

  // Check if there is data in localStorage and if so, set state to that data
  componentDidMount() {
    // Mounting, the initial render
    if (JSON.parse(localStorage.getItem('todos'))) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('todos')),
      });
    }
  }

  // Save data to localStorage when the state changes (i.e. when todos array changes)
  componentDidUpdate(prevProps, prevState) {
    // Updating, the component is re-rendered
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

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

import { Component } from 'react';
import { Header } from './Header';
import TodosList from './TodosList';

export default class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
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

  handleChange = () => {
    console.log('Clicked');
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} onChange={this.handleChange} />
      </div>
    );
  }
}

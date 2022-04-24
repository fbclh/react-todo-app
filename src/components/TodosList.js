import { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodosList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: [],
  //   };
  // }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onChange={this.props.onChange} />
        ))}
      </ul>
    );
  }
}

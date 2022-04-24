import { Component } from 'react';

export class TodoItem extends Component {
  render() {
    return (
      <li>
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        {this.props.todo.title}
      </li>
    );
  }
}

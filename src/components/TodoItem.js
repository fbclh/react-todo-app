import { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => console.log('Clicked')}
        />
        {this.props.todo.title}
      </li>
    );
  }
}

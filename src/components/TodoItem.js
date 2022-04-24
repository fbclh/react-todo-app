import { Component } from 'react';
import styles from './TodoItem.module.css';

export class TodoItem extends Component {
  render() {
    const completedStyle = {
      textDecoration: 'line-through',
      fontStyle: 'italic',
      color: '#d9d9d9',
      opacity: 0.9,
    };

    const { completed, title, id } = this.props.todo;

    return (
      <li className={styles.item}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    );
  }
}

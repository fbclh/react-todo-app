import { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

export const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    return () => {
      // return function to clean up?!
      console.log('Cleaning up...'); //
    };
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleEditingDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  // handleEditingDone = (event) => {
  //   event.key === 'Enter' && this.setState({ editing: false });
  // };

  // componentWillUnmount() {
  //   // Unmounting, the component is removed from the DOM.
  //   this.props.setUpdate(this.props.todo.title, this.props.todo.id);
  // }

  const completedStyle = {
    textDecoration: 'line-through',
    fontStyle: 'italic',
    color: '#d9d9d9',
    opacity: 0.9,
  };

  const { completed, title, id } = props.todo;

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode = { display: 'none' };
  } else {
    editMode = { display: 'none' };
  }

  // this.state.editing
  //   ? (viewMode = { display: 'none' })
  //   : (editMode = { display: 'none' });

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTrash
            style={{
              color: 'orangered',
              fontSize: '16px',
            }}
          />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        className={styles.textInput}
        type="text"
        style={editMode}
        value={title}
        onChange={(event) => props.setUpdate(event.target.value, id)}
        onKeyDown={handleEditingDone}
      />
    </li>
  );
};

//* class based component
// import { Component } from 'react';
// import styles from './TodoItem.module.css';

// export class TodoItem extends Component {
//   state = {
//     editing: false,
//   };

//   handleEditing = () => {
//     this.setState({ editing: true });
//   };

//   handleEditingDone = (event) => {
//     if (event.key === 'Enter') {
//       this.setState({ editing: false });
//     }
//   };

//   // handleEditingDone = (event) => {
//   //   event.key === 'Enter' && this.setState({ editing: false });
//   // };

//   componentWillUnmount() {
//     // Unmounting, the component is removed from the DOM.
//     this.props.setUpdate(this.props.todo.title, this.props.todo.id);
//   }

//   render() {
//     const completedStyle = {
//       textDecoration: 'line-through',
//       fontStyle: 'italic',
//       color: '#d9d9d9',
//       opacity: 0.9,
//     };

//     const { completed, title, id } = this.props.todo;

//     let viewMode = {};
//     let editMode = {};

//     if (this.state.editing) {
//       viewMode = { display: 'none' };
//     } else {
//       editMode = { display: 'none' };
//     }

//     // this.state.editing
//     //   ? (viewMode = { display: 'none' })
//     //   : (editMode = { display: 'none' });

//     return (
//       <li className={styles.item}>
//         <div onDoubleClick={this.handleEditing} style={viewMode}>
//           <input
//             className={styles.checkbox}
//             type="checkbox"
//             checked={completed}
//             onChange={() => this.props.handleChangeProps(id)}
//           />
//           <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
//           <span style={completed ? completedStyle : null}>{title}</span>
//         </div>
//         <input
//           className={styles.textInput}
//           type="text"
//           style={editMode}
//           value={title}
//           onChange={(event) => this.props.setUpdate(event.target.value, id)}
//           onKeyDown={this.handleEditingDone}
//         />
//       </li>
//     );
//   }
// }

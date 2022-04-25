import { TodoItem } from './TodoItem';

export const TodosList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};

//* class based component
// import { Component } from 'react';
// import { TodoItem } from './TodoItem';

// export class TodosList extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     todos: [],
//   //   };
//   // }

//   render() {
//     return (
//       <ul>
//         {this.props.todos.map((todo) => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             handleChangeProps={this.props.handleChangeProps}
//             deleteTodoProps={this.props.deleteTodoProps}
//             setUpdate={this.props.setUpdate}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

import { Component } from 'react';

export class InputTodo extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({ title: '' }); // reset the input field
    } else {
      alert('Please enter a todo');
    }
  };

  state = {
    title: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

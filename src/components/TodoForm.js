import React from 'react';
import { Field } from './Field';

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    const { onAddTodo } = this.props;
    onAddTodo(this.state);
    this.setState({
      title: '',
      description: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Field
          id="title"
          title="Title"
          type="text"
          placeholder="Enter the todo"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Field
          id="description"
          title="Description"
          description="Description"
          type="textarea"
          placeholder="Enter a description for the todo"
          value={this.state.description}
          onChange={this.handleChange}
          rows="5"
        />
        <button
          type="submit"
          className="btn btn-success btn-lg"
          disabled={this.state.title === ''}
        >
          Add
        </button>
      </form>
    );
  }
}

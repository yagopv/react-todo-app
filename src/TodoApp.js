import React, { Component } from 'react';
import { getTodos, addTodo, removeTodo, updateTodo } from './http/todos';
import { Header } from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
  }

  async componentDidMount() {
    const { data: todos } = await getTodos();

    if (todos) {
      this.setState({
        todos
      });
    }
  }

  async handleAddTodo(todo) {
    const { data } = await addTodo({
      ...todo,
      createdAt: new Date(),
      completed: false
    });

    this.setState({ todos: [data, ...this.state.todos] });
  }

  async handleRemoveTodo(id) {
    await removeTodo(id);

    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  async handleCompleteTodo(id) {
    const updatedTodo = this.state.todos.find(todo => todo.id === id);
    updatedTodo.completed = true;

    await updateTodo(id, updatedTodo);

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      })
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container mt-5">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default TodoApp;

import React, { useState, useEffect, useCallback } from 'react';
import { TodoForm } from './TodoForm';
import { List } from './List';
import { getTodos, addTodo, removeTodo, updateTodo } from '../http/todos';

export function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const { data } = getTodos();
      if (data) {
        setTodos(data);
      }
    }
    fetchTodos();
  }, []);

  const handleAddTodo = useCallback(async todo => {
    const { data } = await addTodo({
      ...todo,
      createdAt: new Date(),
      completed: false
    });

    setTodos([data, ...todos]);
  });

  const handleRemoveTodo = useCallback(async id => {
    await removeTodo(id);

    setTodos(todos.filter(todo => todo.id !== id));
  });

  const handleCompleteTodo = useCallback(async id => {
    const updatedTodo = todos.find(todo => todo.id === id);
    updatedTodo.completed = true;

    await updateTodo(id, updatedTodo);

    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      })
    );
  });

  return (
    <React.Fragment>
      <TodoForm onAddTodo={handleAddTodo} />
      <div className="row mt-5">
        <div className="col">
          <h3>My Task List</h3>
          <hr />
          <List
            items={todos.filter(todo => !todo.completed)}
            onComplete={handleCompleteTodo}
            onRemove={handleRemoveTodo}
          />
        </div>
        <div className="col">
          <h3>Completed</h3>
          <hr />
          <List
            items={todos.filter(todo => todo.completed)}
            onComplete={handleCompleteTodo}
            onRemove={handleRemoveTodo}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

import React from 'react';
import { TodoForm } from './TodoForm';
import { List } from './List';
import { useTodos } from '../hooks/useTodos';

export function Home() {
  const {
    todos,
    handleAddTodo,
    handleRemoveTodo,
    handleCompleteTodo
  } = useTodos();

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

import { useEffect, useState, useCallback } from 'react';
import { getTodos, addTodo, removeTodo, updateTodo } from '../http/todos';

export function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const { data } = await getTodos();
      if (data) {
        setTodos(data);
      }
    }
    fetchTodos();
  }, []);

  const handleAddTodo = useCallback(
    async todo => {
      const { data } = await addTodo({
        ...todo,
        createdAt: new Date(),
        completed: false
      });
      setTodos([data, ...todos]);
    },
    [todos]
  );

  const handleRemoveTodo = useCallback(
    async id => {
      await removeTodo(id);

      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  const handleCompleteTodo = useCallback(
    async id => {
      console.log(todos, id);
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
    },
    [todos]
  );

  return {
    todos,
    handleAddTodo,
    handleRemoveTodo,
    handleCompleteTodo
  };
}

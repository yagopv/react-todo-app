import React from 'react';
import { Field } from './Field';
import { useForm } from '../hooks/useForm';

export function TodoForm({ onAddTodo }) {
  const { formData, handleChange, handleSubmit } = useForm(onAddTodo);

  return (
    <form onSubmit={handleSubmit}>
      <Field
        id="title"
        title="Title"
        type="text"
        placeholder="Enter the todo"
        value={formData.title}
        onChange={handleChange}
      />
      <Field
        id="description"
        title="Description"
        description="Description"
        type="textarea"
        placeholder="Enter a description for the todo"
        value={formData.description}
        onChange={handleChange}
        rows="5"
      />
      <button
        type="submit"
        className="btn btn-success btn-lg"
        disabled={formData.title === ''}
      >
        Add
      </button>
    </form>
  );
}

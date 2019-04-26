import { useState } from 'react';

export function useForm(onSubmit) {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = event => {
    event.persist();
    setFormData(currentFormData => ({
      ...currentFormData,
      [event.target.id]: event.target.value
    }));
  };

  const handleSubmit = event => {
    onSubmit(formData);
    setFormData({
      title: '',
      description: ''
    });
    event.preventDefault();
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
}

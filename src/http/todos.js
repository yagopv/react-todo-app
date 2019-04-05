import axios from 'axios';

const BASE_URL = 'https://5c9caa133be4e30014a7d231.mockapi.io/api';

export function getTodos() {
  return axios.get(`${BASE_URL}/todo`);
}

export function addTodo(todo) {
  return axios.post(`${BASE_URL}/todo`, todo);
}

export function removeTodo(id) {
  return axios.delete(`${BASE_URL}/todo/${id}`);
}

export function updateTodo(id, todo) {
  return axios.put(`${BASE_URL}/todo/${id}`, todo);
}

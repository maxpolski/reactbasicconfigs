export const getTodos = () =>
  fetch('/todos', {
    method: 'GET',
  }).then(data => data.json());

export const addTodo = caption =>
  fetch('/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ caption }),
  }).then(data => data.json());

export const toggleTodo = todoId =>
  fetch(`/toggletodo/${todoId}`, {
    method: 'POST',
  }).then(data => data.json());

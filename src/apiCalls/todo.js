export const getTodos = () =>
  fetch('/todos', {
    method: 'GET',
  }).then(data => data.json());

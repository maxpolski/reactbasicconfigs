const data = [{ caption: 'test', id: 123, isCompleted: false }];

class Todo {
  constructor(caption) {
    this.id = Date.now();
    this.caption = caption;
    this.isCompleted = false;
  }

  toggleCompletion = () => this.isCompleted = !this.isCompleted;

  editCaption = caption => this.caption = caption;
}

export const getData = () => data;
export const addTodo = (caption) => {
  const newTodo = new Todo(caption);
  data.push(newTodo);
  return newTodo;
};
export const removeTodo = (id) => {
  const removalIndex = data.findIndex(todo => todo.id === id);
  data.splice(removalIndex, 1);

  return data;
};
export const toggleCompletion = (id) => {
  const todoToChange = data.find(todo => todo.id === +id);
  todoToChange.toggleCompletion();
  return todoToChange;
};
export const editCaption = (id, newCaption) => {
  data.forEach((todo) => {
    if (todo.id === id) {
      todo.editCaption(newCaption);
    }
  });

  return data;
};

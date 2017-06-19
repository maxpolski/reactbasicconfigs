const data = [];

class Todo {
  constructor(caption) {
    this.id = Date.now();
    this.caption = caption;
    this.completion = false;
  }

  toggleCompletion = () => this.completion = !this.completion;

  editCaption = caption => this.caption = caption;
}

export const getData = () => data;
export const addTodo = (caption) => {
  data.push(new Todo(caption));
  return data;
};
export const removeTodo = (id) => {
  const removalIndex = data.findIndex(todo => todo.id === id);
  data.splice(removalIndex, 1);

  return data;
};
export const toggleCompletion = (id) => {
  data.forEach((todo) => {
    if (todo.id === id) {
      todo.toggleCompletion();
    }
  });

  return data;
};
export const editCaption = (id, newCaption) => {
  data.forEach((todo) => {
    if (todo.id === id) {
      todo.editCaption(newCaption);
    }
  });

  return data;
};

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const deleteTodo = (event) => {
  const parentElement = event.target.parentElement;
  parentElement.remove();
};

const addTodo = (todoText) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  li.innerText = todoText;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  todoList.appendChild(li);
};

const handleTodoForm = (event) => {
  event.preventDefault();
  const todoText = todoInput.value;
  todoInput.value = "";
  addTodo(todoText);
};

todoForm.addEventListener("submit", handleTodoForm);

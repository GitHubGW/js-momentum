const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const todos = [];
const TODO = "todo";
const localStorageTodo = localStorage.getItem(TODO);

const addTodo = (todoText) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  li.innerText = todoText;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  todoList.appendChild(li);
};

const deleteTodo = (event) => {
  const parentElement = event.target.parentElement;
  parentElement.remove();
};

const getTodo = () => {
  JSON.parse(localStorage.getItem("todos"));
};

const saveTodo = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const handleTodoForm = (event) => {
  event.preventDefault();
  const todoText = todoInput.value;
  todoInput.value = "";
  addTodo(todoText);
  todoArray.push(todoText);
  saveTodo();
};

todoForm.addEventListener("submit", handleTodoForm);

if (localStorageTodo === null) {
  saveTodo();
} else {
  getTodo();
}

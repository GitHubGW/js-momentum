const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todosArray = [];
const TODOS = "todos";
const localStorageTodo = localStorage.getItem(TODOS);

const addTodo = ({ id, text }) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  li.id = id;
  li.innerText = text;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  todoList.appendChild(li);
};

const deleteTodo = (event) => {
  const parentElement = event.target.parentElement;
  const parentElementId = Number(parentElement.id);
  const currentLocalStorageTodo = JSON.parse(localStorage.getItem(TODOS));
  todosArray = currentLocalStorageTodo.filter((todo) => todo.id !== parentElementId);
  parentElement.remove();
  saveTodo();
};

const getTodo = () => {
  const allTodos = JSON.parse(localStorage.getItem(TODOS));
  allTodos.forEach(addTodo);
};

const saveTodo = () => {
  localStorage.setItem(TODOS, JSON.stringify(todosArray));
};

const handleTodoForm = (event) => {
  event.preventDefault();
  const todoText = todoInput.value;
  todoInput.value = "";
  const newTodoObject = { id: Date.now(), text: todoText };
  addTodo(newTodoObject);
  todosArray.push(newTodoObject);
  saveTodo();
};

todoForm.addEventListener("submit", handleTodoForm);

if (localStorageTodo === null) {
  saveTodo();
} else {
  getTodo();
}

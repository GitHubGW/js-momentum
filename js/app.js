const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const username = document.querySelector("#username");

const handleSubmit = (event) => {
  event.preventDefault();
  const inputValue = loginInput.value;
  username.innerHTML = `Hello✋ ${inputValue}`;
  localStorage.setItem("username", inputValue);
  loginForm.classList.add("hidden");
  username.classList.remove("hidden");
};

loginForm.addEventListener("submit", handleSubmit);

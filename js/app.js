const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const handleSubmit = (event) => {
  event.preventDefault();
};

const handleLoginButton = (event) => {
  const { value } = loginInput;
};

loginForm.addEventListener("submit", handleSubmit);
loginButton.addEventListener("click", handleLoginButton);

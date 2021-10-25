const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const username = document.querySelector("#username");

const HIDDEN = "hidden";
const USERNAME = "username";
const localStorageUsername = localStorage.getItem(USERNAME);

const handleLoginForm = (event) => {
  event.preventDefault();
  username.innerHTML = `Hello✋ ${loginInput.value}`;
  localStorage.setItem(USERNAME, loginInput.value);
  loginForm.classList.add(HIDDEN);
  username.classList.remove(HIDDEN);
};

if (localStorageUsername === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", handleLoginForm);
} else {
  username.classList.remove(HIDDEN);
  username.innerHTML = `Hello✋ ${localStorageUsername}`;
}

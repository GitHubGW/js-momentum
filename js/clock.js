const clock = document.querySelector("#clock");

const handleClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const parsedMinutes = String(minutes).padStart(2, "0");
  const parsedSeconds = String(seconds).padStart(2, "0");
  clock.innerHTML = `${hours}:${parsedMinutes}:${parsedSeconds}`;
};

if (clock) {
  handleClock();
  setInterval(handleClock, 1000);
}

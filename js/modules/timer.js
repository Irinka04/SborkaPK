export const timer = () => {
  const timers = document.querySelectorAll(".timer__block");

  function timerHandler() {
    const date = new Date();
    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let min =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let sec =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    timers[1].firstElementChild.innerHTML = hour;
    timers[2].firstElementChild.innerHTML = min;
    timers[3].firstElementChild.innerHTML = sec;
  }

  setInterval(timerHandler, 500);
};
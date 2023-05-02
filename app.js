const releaseDate = new Date("May 12, 2023 00:00:00").getTime();
const countdownDisplay = document.getElementById("countdown-display");
const dayCounter = document.getElementById("days");
const hourCounter = document.getElementById("hours");
const minuteCounter = document.getElementById("minutes");
const secondCounter = document.getElementById("seconds");

const timer = () => {
  const now = new Date().getTime();
  const distance = releaseDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dayCounter.textContent = days;
  hourCounter.textContent = hours;
  minuteCounter.textContent = minutes;
  secondCounter.textContent = seconds;

  if (distance < 0) {
    clearInterval(timer);
    countdownDisplay.textContent = "It's out! Go play it!";
  }
};

const getTime = setInterval(timer, 1000);

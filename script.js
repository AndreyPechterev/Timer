const items = document.querySelectorAll('.countdown-item h4')

// futute date
let countDate = new Date(2023, 0, 5, 18, 22, 0);

let count = setInterval(getTime, 1000)

getTime()

function getTime() {

  // nowadays
  const now = new Date().getTime();
  const difference = countDate - now;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(difference / oneDay)
  let hours = Math.floor((difference % oneDay) / oneHour )
  let minutes = Math.floor((difference % oneHour) / oneMinute)
  let seconds = Math.floor((difference % oneMinute) / 1000)

  const values = [days, hours, minutes, seconds]

  let i = 0;
  items.forEach(item => item.textContent = values[i++]);

  if (difference < 0) {
    clearInterval(count)
    items.forEach(item => item.textContent = 0);
  }
}



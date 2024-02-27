AOS.init();

const dataEvent = new Date("Jan 08, 2025 00:00:00");

const timeStamp = dataEvent.getTime();

const cont = setInterval(() => {
  const now = new Date();
  const timeStampNow = now.getTime();

  const distance = timeStamp - timeStampNow;

  const daysInMs = 1000 * 60 * 60 * 24;
  const hoursInMs = 1000 * 60 * 60;
  const minutesInMs = 1000 * 60;

  const daysForEvent = Math.floor(distance / daysInMs);
  const hoursForEvent = Math.floor((distance % daysInMs) / hoursInMs);
  const minutesForEvent = Math.floor((distance % hoursInMs) / minutesInMs);
  const secondsForEvent = Math.floor((distance % minutesInMs) / 1000);

  document.getElementById("timer").innerHTML = `${daysForEvent}D ${hoursForEvent}H ${minutesForEvent}M ${secondsForEvent}S`;

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = `CHEGOU O DIA`;
  }
}, 1000);

clearInterval(interval);

const scheduleStart = new Date("2026-07-03T21:00:00-03:00");
const intervalDays = 14;
const months = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function getNextDates(count = 6) {
  const now = new Date();
  let date = new Date(scheduleStart);

  while (date < now) {
    date = addDays(date, intervalDays);
  }

  const dates = [];
  for (let i = 0; i < count; i++) {
    dates.push(addDays(date, i * intervalDays));
  }
  return dates;
}

function formatFullDate(date) {
  return `Viernes ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
}

function whatsappLink(date) {
  const text = `Hola Diego, quiero reservar para el ${formatFullDate(date)} en El Karaoke de Diego. Somos ___ personas.`;
  return `https://wa.me/5491164919419?text=${encodeURIComponent(text)}`;
}

function renderCalendar() {
  const dates = getNextDates(6);
  const grid = document.getElementById("calendarGrid");
  const nextDateText = document.getElementById("nextDateText");

  if (!grid || dates.length === 0) return;

  nextDateText.textContent = formatFullDate(dates[0]);

  grid.innerHTML = dates.map((date, index) => `
    <article class="date-card ${index === 0 ? "next" : ""}">
      <span class="day">Viernes</span>
      <strong>${date.getDate()}</strong>
      <span class="month">${months[date.getMonth()]} ${date.getFullYear()}</span>
      <a href="${whatsappLink(date)}" target="_blank">${index === 0 ? "Reservar próxima" : "Reservar"}</a>
    </article>
  `).join("");
}

function updateCountdown() {
  const dates = getNextDates(1);
  const target = dates[0];

  const diff = target.getTime() - new Date().getTime();

  if (diff <= 0) {
    renderCalendar();
    return;
  }

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

renderCalendar();
updateCountdown();
setInterval(updateCountdown, 1000);

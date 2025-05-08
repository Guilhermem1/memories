let current = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3000);

function updateCounter() {
    const startDate = new Date("2024-06-04T00:00:00");
    const now = new Date();
  
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();
  
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += previousMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }
  
    // Atualiza o HTML
    document.getElementById("years").textContent = String(years).padStart(2, '0');
    document.getElementById("months").textContent = String(months).padStart(2, '0');
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }
  
  // Atualiza a cada segundo
  setInterval(updateCounter, 1000);
  updateCounter();
  
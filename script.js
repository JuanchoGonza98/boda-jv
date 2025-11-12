// Contador regresivo
const timer = document.getElementById("timer");
const weddingDate = new Date("2026-01-10T18:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    timer.textContent = "💍 ¡Hoy es el gran día!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// Música 🎶
const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");
let playing = true;

toggle.addEventListener("click", () => {
  if (playing) {
    music.pause();
    toggle.textContent = "🎵";
    toggle.style.opacity = "0.7";
  } else {
    music.play();
    toggle.textContent = "🎶";
    toggle.style.opacity = "1";
  }
  playing = !playing;
});

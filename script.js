// ===== Pantalla de bienvenida y música =====
const enterBtn = document.getElementById("enter-btn");
const welcome = document.getElementById("welcome-screen");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

enterBtn.addEventListener("click", () => {
  // Reproducir música y mostrar contenido
  music.play().catch(() => console.log("El navegador bloqueó el audio."));
  welcome.style.opacity = "0";

  setTimeout(() => {
    welcome.style.display = "none";
    mainContent.classList.remove("hidden");
    toggle.classList.remove("hidden");
  }, 800);
});

// ===== Contador regresivo =====
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

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  timer.textContent = `${d}d ${h}h ${m}m ${s}s`;
}
const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// ===== Control de música =====
let playing = true;
toggle.addEventListener("click", () => {
  if (playing) {
    music.pause();
    toggle.textContent = "🎵";
  } else {
    music.play();
    toggle.textContent = "🎶";
  }
  playing = !playing;
});

// ===== Pausar video al tocar/clic =====
const video = document.getElementById("bg-video");
let isPaused = false;

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    isPaused = false;
  } else {
    video.pause();
    isPaused = true;
  }
});

video.addEventListener("mousedown", () => video.pause());
video.addEventListener("mouseup", () => { if (!isPaused) video.play(); });
video.addEventListener("touchstart", () => video.pause());
video.addEventListener("touchend", () => { if (!isPaused) video.play(); });

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const fileInput = document.getElementById('fileInput');
const songName = document.getElementById('songName');

let files = [];
let currentIndex = 0;

// Cargar archivo
fileInput.addEventListener('change', () => {
  files = [...fileInput.files];
  if (files.length > 0) {
    loadSong(0);
  }
});

function loadSong(index) {
  const file = files[index];
  const url = URL.createObjectURL(file);
  audio.src = url;
  songName.textContent = file.name;
  audio.load();
  audio.play();
}

// Botón play
playBtn.addEventListener('click', () => {
  audio.play();
});

// Botón pausa
pauseBtn.addEventListener('click', () => {
  audio.pause();
});

// Volumen
volume.addEventListener('input', () => {
  audio.volume = volume.value;
});

// Progreso
audio.addEventListener('timeupdate', () => {
  const percentage = (audio.currentTime / audio.duration) * 100;
  progress.value = percentage || 0;
});

progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

const musicPlayer = document.querySelector('.music-player');
const musicPlayerAudio = document.querySelector('.music-player-audio');
const musicPlayerPlayPauseBtn = document.querySelector('.music-player-play-pause-btn');

let isPlaying = false;

musicPlayerPlayPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    musicPlayerAudio.pause();
    isPlaying = false;
  } else {
    musicPlayerAudio.play();
    isPlaying = true;
  }
});

musicPlayerAudio.addEventListener('ended', () => {
  isPlaying = false;
});

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  const top = window.scrollY;
  const height = window.innerHeight;

  cards.forEach((card) => {
    const cardTop = card.offsetTop;
    const cardHeight = card.offsetHeight;

    if (top + height > cardTop + (cardHeight / 2)) {
      card.classList.add('reveal');
    }
  });
});
const progress = document.querySelector('.progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, white 100%)`
})

const volumeBar = document.querySelector('.volume-bar');
  
volumeBar.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, white 100%)`
})

// Get Our Elements
const player = document.querySelector('.video-list');
const video = player.querySelector('.video-main');
const bigButton = player.querySelector('.start-button');
const playButton = player.querySelector('.play-button-video');

const volumeButton = player.querySelector('.volume-button');

const scale = player.querySelector('.scale-button');

// Build our functions
function togglePlay() {
const method = video.paused ? 'play' : 'pause';
video[method]();
}


// Hook up the event listeners
video.addEventListener('click', togglePlay);
bigButton.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
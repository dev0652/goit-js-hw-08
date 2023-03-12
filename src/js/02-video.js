import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//
const player = new Player(document.querySelector('#vimeo-player'));

// Current playback position
const currentTime = localStorage.getItem('videoplayer-current-time');

// Check if playback position is already saved in LocalStorage
if (currentTime) {
  // If it is, set the playback position to the saved value
  player.setCurrentTime(currentTime);
}

// Save current position in LocalStorage (throttled)
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

// Current volume
const currentVolume = localStorage.getItem('videoplayer-current-volume');

// Check if volume level is already saved in LocalStorage
if (currentVolume) {
  // If it is, set the volume level to the saved value
  player.setVolume(currentVolume);
}
// Save volume level in LocalStorage (throttled)
player.on('volumechange', onVOlumeUpdate);

function onVOlumeUpdate({ volume }) {
  localStorage.setItem('videoplayer-current-volume', volume);
}

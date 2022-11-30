import Vimeo from '@vimeo/player';

const vimeoPlayerEl = document.querySelector('#vimeo-player');
const vimeoPlayer = new Vimeo(vimeoPlayerEl);
// console.log(vimeoPlayerEl);
// console.log(vimeoPlayer);
const throttler = require('lodash.throttle');
// console.log(throttler);

vimeoPlayer.on('timeupdate', throttler(onPlay, 1000));

function onPlay(data) {
    // console.log(`it's working`);
    localStorage.setItem('videoplayer-current-time', Math.round(data.seconds));
}

const playerCurrentTime = localStorage.getItem('videoplayer-current-time');
console.log(`I see playerCurrentTime: ${playerCurrentTime}`);

if (playerCurrentTime) {
    vimeoPlayer.setCurrentTime(playerCurrentTime);
}




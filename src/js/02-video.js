
// Напиши скрипт который будет сохранять текущее время воспроизведения
//  видео в локальное хранилище и, при перезагрузке страницы, 
//  продолжать воспроизводить видео с этого времени.

// 1) Ознакомься с документацией библиотеки Vimeo плеера.
// 2) Добавь библиотеку как зависимость проекта через npm.
// 3) Инициализируй плеер в файле скрипта как это описано в секции 
// pre-existing player, но учти что у тебя плеер добавлен как 
// npm пакет, а не через CDN.
// 4) Разбери документацию метода on() и начни отслеживать событие 
// timeupdate - обновление времени воспроизведения.
// 5) Сохраняй время воспроизведения в локальное хранилище. 
// Пусть ключом для хранилища будет строка "videoplayer-current-time".
// 6) При перезагрузке страницы воспользуйся методом setCurrentTime() 
// для того чтобы возобновить воспроизведение с сохраненной позиции.
// 7) Добавь в проект библиотеку lodash.throttle и сделай так, чтобы 
// время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

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
// console.log(`I see playerCurrentTime: ${playerCurrentTime}`);

if (playerCurrentTime) {
    vimeoPlayer.setCurrentTime(playerCurrentTime);
}
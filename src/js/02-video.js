import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem('time', JSON.stringify(e.seconds));
  }, 1000)
);
// ----- Second Var
// const onPlay = function (e) {
//   localStorage.setItem('time', JSON.stringify(e.seconds));
// };
// player.on('timeupdate', throttle(onPlay, 1000));
// console.log('a', JSON.parse(localStorage.getItem('time')));

player
  .setCurrentTime(JSON.parse(localStorage.getItem('time')))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

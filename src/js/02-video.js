import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (e) {
  //   console.log(e.seconds);
  //   console.log('played the video!');
  localStorage.setItem('time', JSON.stringify(e.seconds));
});

// console.log('a', JSON.parse(localStorage.getItem('time')));

player
  .setCurrentTime(JSON.parse(localStorage.getItem('time')))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

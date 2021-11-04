const chalk = require('chalk');
// generate arrays of numbers //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const playlist = Array.from(Array(20).keys());
const playedSongs = [];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const playRandomSong = () => {
  const songIndex = getRandom(0, 19);
  console.log(`playing song ${playlist[songIndex]}...`);
  if (!playedSongs.includes(songIndex)) {
    playedSongs.push(songIndex);
  }
};

for (let i = 0; i < playlist.length; i++) {
  playRandomSong();
}

console.log(chalk.yellow(`Total Played Songs: ${playedSongs.length}`));

const _ = require('lodash');

// generate arrays of numbers //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const playlist = Array.from(Array(20).keys());

// when shuffle play mode is picked, shuffle songs
let shuffledPlaylist = _.shuffle([...playlist]);
let currentSongIndex = 0;

const playRandomSong = () => {
  playSong(currentSongIndex);
  currentSongIndex++;
};

const playSong = songIndex => {
  console.log(`playing song ${shuffledPlaylist[songIndex]}...`);
  // play song
};

for (let i = 0; i < playlist.length; i++) {
  playRandomSong();
}

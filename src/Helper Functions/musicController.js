import {
  MUSICS,
  arrayMusics,
  randomMusic,
  backMusic,
  nextMusic,
} from './Musics';

// Ada kebijakan chrome tentang autoplay policy jadi harus ada interact antara user dengan document baru bisa dimulai musicnya
const music = document.querySelector('#music');
let currentMusic = MUSICS.homura; // Default every refresh page
music.src = currentMusic.url;

// Kita bisa melakukan fake user interact tapi tidak disarankan, sebagai developer yang baik hal itu tidak etis
// const button = document.getElementById('myButton');
// button.click();
// Seperti contoh diatas cara fake user interact

// Selain menggunakan fake user interact kita juga bisa gunakan check by Interval
const musicCheck = setInterval(() => {
  if (!music.paused) {
    clearInterval(musicCheck);
    console.log('Music is Playing now');
    return;
  } else {
    music.play();
    music.volume = 0.2;
  }
  console.log('User must do some interact to attract the Music');
}, 1000);

music.addEventListener('ended', () => {
  currentMusic = randomMusic(arrayMusics);
  music.src = currentMusic.url;
  music.play();
});

const musicController = document.getElementById('musicController');

musicController.addEventListener('click', () => {
  const img = musicController.querySelector('img');
  if (music.paused) {
    music.play();
    img.src = './Cit-Cat-Eot/PandaWearHeadshet.jpg';
  } else {
    music.pause();
    img.src = './Cit-Cat-Eot/BadMoodPanda.jpg';
  }
});

const backMusicController = document.querySelector('#backMusic');
backMusicController.addEventListener('click', () => {
  currentMusic = backMusic(currentMusic);
  music.pause();
  music.src = currentMusic.url;
  music.play();
});

const nextMusicController = document.querySelector('#nextMusic');
nextMusicController.addEventListener('click', () => {
  currentMusic = nextMusic(currentMusic);
  music.pause();
  music.src = currentMusic.url;
  music.play();
});

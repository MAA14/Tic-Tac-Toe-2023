function setTimes(hours, minutes, seconds) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;

  // Set to Format 00:00:00 | hh:mm:ss
  seconds *= second;
  minutes *= minute;
  hours *= hour;

  const times = hours + minutes + seconds;
  return times;
}

class Music {
  constructor(name) {
    this.name = name;
  }

  setUrl(url) {
    this.url = url;
  }

  setCredit(artist, creditUrl, platform) {
    this.artist = artist;
    this.creditUrl = creditUrl;
    this.platform = platform;
  }
}

class MusicHomura extends Music {
  constructor(name = 'Homura') {
    super(name);
    this.url =
      './Musics/Homura 炎  LiSADemon Slayer Movie Theme  Piano  Violin Cover  Rus Piano x  Kathie Violin 黃品舒.mp3';
    this.times = setTimes(0, 4, 52);
    this.credit = {
      artis: "Ru's Piano Ru味春捲",
      creditUrl: 'https://www.youtube.com/watch?v=5Agwr66NVV8',
      platform: 'Youtube',
    };
    this.id = 0;
  }
}

class MusicSparkle extends Music {
  constructor(name = 'Sparkle') {
    super(name);
    this.url =
      './Musics/Kimi no Na wa OSTSparkle  RADWIMPSRus Piano Cover  Your Name Main Theme.mp3';
    this.times = setTimes(0, 6, 56);
    this.credit = {
      artis: "Ru's Piano Ru味春捲",
      creditUrl: 'https://www.youtube.com/watch?v=LO_C_ZAGvoU',
      platform: 'Youtube',
    };
    this.id = 1;
  }
}

class MusicSpiral extends Music {
  constructor(name = 'Spiral') {
    super(name);
    this.url =
      './Musics/Mushoku Tensei Ⅱ OPspiral  LONGMANRus Piano CoverFull Ver Sheet Music.mp3';
    this.times = setTimes(0, 4, 10);
    this.credit = {
      artis: "Ru's Piano Ru味春捲",
      url: 'https://www.youtube.com/watch?v=w0_8eKLcoKE',
      platform: 'Youtube',
    };
    this.id = 2;
  }
}

class MusicSecretBase extends Music {
  constructor(name = 'Secret Base') {
    super(name);
    this.url =
      './Musics/Anohana EDsecret base 君がくれたものRus Piano Cover.mp3';
    this.times = setTimes(0, 6, 37); // 00:06:37
    this.credit = {
      artis: "Ru's Piano Ru味春捲",
      url: 'https://www.youtube.com/watch?v=pzM6T5a747U',
      platform: 'Youtube',
    };
    this.id = 3;
  }
}

// Create all Musics
const MUSICS = {
  homura: new MusicHomura(),
  spiral: new MusicSpiral(),
  sparkle: new MusicSparkle(),
  secretBase: new MusicSecretBase(),
};

const arrayMusics = [
  MUSICS.homura,
  MUSICS.spiral,
  MUSICS.sparkle,
  MUSICS.secretBase,
];

function randomMusic(arrayOfMusics) {
  const length = arrayOfMusics.length;
  const newMusic = arrayMusics[Math.floor(Math.random() * length)];

  return newMusic;
}

console.log(arrayMusics.length - 1);

function nextMusic(currentMusic) {
  const currId = currentMusic.id;
  let nextId = currId + 1;

  if (nextId > arrayMusics.length - 1) {
    nextId = 0;
  }

  return arrayMusics[nextId];
}

function backMusic(currentMusic) {
  const currId = currentMusic.id;
  let nextId = currId - 1;

  if (nextId < 0) {
    nextId = arrayMusics.length - 1;
  }

  return arrayMusics[nextId];
}

export { MUSICS, arrayMusics, randomMusic, nextMusic, backMusic };

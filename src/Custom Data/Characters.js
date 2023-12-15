const photoProfileRelativePath = './Cit-Cat-Eot/Photo Profile/';
const winningWEBP = './Cit-Cat-Eot/Winning Images/';
const voicesRelative = './Cit-Cat-Eot/voices/';

class Characters {
  constructor(name = 'No Character') {
    this.name = name;
  }

  setName(newName) {
    this.name = newName;
  }
}

class GlasessCat extends Characters {
  constructor(name) {
    super(name);
    this.url = './Cit-Cat-Eot/_.jpeg';
    this.alt = 'Cool Cat';
  }
}

class HeadphonesCat extends Characters {
  constructor(name) {
    super(name);
    this.url = './Cit-Cat-Eot/Pinterest_Download(3).jpg';
    this.alt = 'Headphone Cat';
  }
}

class NullCharacter extends Characters {
  constructor(name) {
    super(name);
    this.url = './Cit-Cat-Eot/BackgroundCard/RedCard.png';
    this.alt = null;
  }
}

class NullCharacter1 extends Characters {
  constructor(name) {
    super(name);
    this.url = null;
    this.alt = null;
  }
}

class NullCharacter2 extends Characters {
  constructor(name) {
    super(name);
    this.url = null;
    this.alt = null;
  }
}

// Bang namain charanya dong

class DinoCiani extends Characters {
  constructor(name) {
    super(name);
    this.url = './Cit-Cat-Eot/DinoMrrwe.jpg';
    this.alt = 'DinoCiani';
  }
}

class BocilBeban extends Characters {
  constructor(name) {
    super(name);
    this.url = './Cit-Cat-Eot/Clara.jpg';
    this.alt = 'Bocil Beban';
  }
}

class PinkyGirlBazooka extends Characters {
  constructor(name) {
    super(name);
    this.url = './Cit-Cat-Eot/Layla Aspirant.jpg';
    this.alt = 'Pinky Girl Bazooka';
  }
}

class Gede extends Characters {
  constructor(name) {
    super(name);
    this.url = './Cit-Cat-Eot/CharWhite.jpg';
    this.alt = 'Gede';
  }
}

class CoolRaiden extends Characters {
  constructor(name) {
    super(name);
    this.url = './Cit-Cat-Eot/CoolRaiden.jpg';
    this.alt = 'Cool Raiden';
  }
}

class SaddyYaeMiko extends Characters {
  constructor(name) {
    super(name);
    this.url = './Cit-Cat-Eot/YaeMiko.jpg';
    this.alt = 'SaddyYaeMiko';
  }
}

// Genshin Characters
class Zhongli extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_Zhongli.jpg';
    this.winningUrl = winningWEBP + 'WIN_Zhongli.webp';
    this.alt = 'Zhongli (Genshin Impact)';
    this.color = {
      blur: 'rgb(84 52 0 / 46%)',
      // blur: 'rgba(255, 157, 0, 0.46)',
      solid: 'rgba(255, 157, 0, 1)',
    };
    this.voice = {
      text: 'Osmanthus wine tastes the same as I remember... But where are those who share the memory?',
      src: voicesRelative + 'Zhongli.ogg',
      srcReal:
        'https://static.wikia.nocookie.net/gensin-impact/images/5/54/VO_Zhongli_Chat_-_Reminiscing.ogg/revision/latest?cb=20211125005429',
      actor: 'Keith Silverstein',
    };
  }
}

class YaeMiko extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_YaeMiko.jpg';
    this.winningUrl = winningWEBP + 'WIN_YaeMiko.webp';
    this.alt = 'Yae Miko (Genshin Impact)';
    this.color = {
      blur: 'rgb(92 44 49 / 46%)',
      // solid: 'rgba(183, 73, 86,1)',
      // blur: 'rgba(239, 146, 157, 0.46)',
      // solid: 'rgba(239, 146, 157, 1)',
      solid: 'rgb(204 110 121)',
    };
    this.voice = {
      text: "Sealing yourself away from the rest of the world may only serve to accelerate the effects of erosion... Imagine, a world consisting of you and you alone, with no one else to reflect you back at yourself... how awful that would be. Whenever we are together, it is vital that we always shine a light for each other, okay? It's rather difficult to remain enlightened in the dark.",
      src: voicesRelative + 'YaeMiko.ogg',
      srcReal:
        'https://static.wikia.nocookie.net/gensin-impact/images/a/ab/VO_Yae_Miko_About_Us_-_Erosion.ogg/revision/latest?cb=20220216025702',
      actor: 'Ratana',
    };
  }
}

// indian-red = rgba(221, 95, 92, 1)

class RaidenShogun extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_RaidenShogun.jpg';
    this.winningUrl = winningWEBP + 'WIN_RaidenShogun.webp';
    this.alt = 'Raiden Shogun (Genshin Impact)';
    this.color = {
      // blur: 'rgba(112, 110, 219, 0.46)',
      blur: 'rgb(36 35 82 / 46%)',
      solid: 'rgba(112, 110, 219, 1)',
    };
    this.voice = {
      text: 'I command the thunder in all corners of the world to cease. Rest well tonight.',
      src: voicesRelative + 'RaidenShogun.ogg',
      srcReal:
        'https://static.wikia.nocookie.net/gensin-impact/images/7/70/VO_Raiden_Shogun_Good_Night.ogg/revision/latest?cb=20210902172731',
      actor: 'Anne Yatco',
    };
  }
}
/*
$pale-purple: rgba(224, 209, 218, 1);
$tropical-indigo: rgba(148, 138, 199, 1);
$medium-slate-blue: rgba(112, 110, 219, 1);
*/

class Wanderer extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_Wanderer.jpg';
    this.winningUrl = winningWEBP + 'WIN_Wanderer.webp';
    this.alt = 'Wanderer (Genshin Impact)';
    this.color = {
      solid: 'rgb(89 153 160)',
      blur: 'rgba(16, 63, 69, 0.46)',
      // blur: 'rgba(122, 213, 223, 0.46)',
      // solid: 'rgba(122, 213, 223, 1)',
    };
    this.voice = {
      text: "There's no need to exchange pleasantries. It's rather pathetic to force a conversation just to occupy silence.",
      src: voicesRelative + 'Wanderer.ogg',
      srcReal:
        'https://static.wikia.nocookie.net/gensin-impact/images/f/fc/VO_Wanderer_Chat_-_Exchanging_Pleasantries.ogg/revision/latest?cb=20221207192652',
      actor: 'Patrick Pedraza',
    };
  }
}
/*
$savoy-blue: rgba(82, 106, 180, 1);
$tiffany-blue: rgba(122, 213, 223, 1);
$lapis-lazuli: rgba(21, 103, 151, 1);
*/

class Hutao extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_Hutao.jpg';
    this.winningUrl = winningWEBP + 'WIN_Hutao.webp';
    this.alt = 'Hutao (Genshin Impact)';
    this.color = {
      // blur: 'rgba(66, 46, 48,0.46)',
      blur: 'rgb(32 18 19 / 46%)',
      solid: 'rgba(66, 46, 48,1)',
    };
    this.voice = {
      text: '♪Silly-churl, billy-churl, silly-billy hilichurl. Frilly-churl, willy-churl, frilly-willy hilichurl♪ Ah, hehe...',
      src: voicesRelative + 'Hutao.ogg',
      srcReal:
        'https://static.wikia.nocookie.net/gensin-impact/images/8/8c/VO_Hu_Tao_More_About_Hu_Tao_-_01.ogg/revision/latest?cb=20210303203528',
      actor: 'Brianna Knickerbocker',
    };
  }
}

class Nahida extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_Nahida.jpg';
    this.winningUrl = winningWEBP + 'WIN_Nahida.webp';
    this.alt = 'Nahida (Genshin Impact)';
    this.color = {
      blur: 'rgb(44 54 27 / 46%)',
      solid: 'rgb(118 140 83)',
      // blur: 'rgba(156, 200, 89, 0.46)',
      // solid: 'rgba(156, 200, 89, 1)',
    };
    this.voice = {
      text: "In my dreams, there's often an empty space. No matter how the scenery changes around it, the emptiness always occupies the most important place. Strange, isn't it? I think there used to be something there, but for all the power I have over dreams, I still can't find the answer as to what it was. Ugh, seems like even in my dreams, there are things that I can't control...",
      src: voicesRelative + 'Nahida.ogg',
      srcReal:
        'https://static.wikia.nocookie.net/gensin-impact/images/3/32/VO_Nahida_More_About_Nahida_-_04.ogg/revision/latest?cb=20221114125342',
      actor: 'Kimberley Anne Campbell',
    };
  }
}
/*
$black: rgba(0, 0, 0, 1);
$black-2: rgba(0, 0, 0, 1);
$isabelline: rgba(249, 244, 240, 1);
$asparagus: rgba(128, 168, 117, 1);
$black-3: rgba(0, 0, 0, 1);
$yellow-green: rgba(156, 200, 89, 1);
*/

// class Dottore extends Characters {
//   constructor(name) {
//     super(name);
//     this.url = photoProfileRelativePath + 'PP_Dottore.jpg';
//     this.winningUrl = winningWEBP + 'WIN_Dottore.webp';
//     this.alt = 'Dottore (Genshin Impact)';
//     this.color = {
//       blur: 'rgba(86, 121, 159, 0.46)',
//       solid: 'rgba(86, 121, 159, 1)',
//     };
//   }
// }
/*
$french-gray: rgba(180, 191, 200, 1);
$glaucous: rgba(86, 121, 159, 1);
$light-blue: rgba(189, 223, 225, 1);
 */

class Kokomi extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_Kokomi.jpg';
    this.winningUrl = winningWEBP + 'WIN_Kokomi.webp';
    this.alt = 'Kokomi (Genshin Impact)';
    this.color = {
      blur: 'rgb(47 33 90 / 46%)',
      // blur: 'rgba(150, 129, 212, 0.46)',
      solid: 'rgba(150, 129, 212, 1)',
    };
    this.voice = {
      text: 'Respect must be given to the will of every creature. Each fish in the ocean swims in its own direction.',
      src: voicesRelative + 'Kokomi.ogg',
      srcReal:
        'https://static.wikia.nocookie.net/gensin-impact/images/a/ad/VO_Sangonomiya_Kokomi_Chat_-_Fish.ogg/revision/latest?cb=20210921133022',
      actor: 'Risa Mei',
    };
  }
}
/**
 * $periwinkle: rgba(197, 195, 225, 1);
$tropical-indigo: rgba(150, 129, 212, 1);
$pale-dogwood: rgba(245, 212, 207, 1);
 */

class Qiqi extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_Qiqi.jpg';
    this.winningUrl = winningWEBP + 'WIN_Qiqi.webp';
    this.alt = 'Qiqi (Genshin Impact)';
    this.color = {
      blur: 'rgb(69 15 108 / 46%)',
      solid: 'rgb(154 136 255)',
      // blur: 'rgba(79, 68, 140, 0.46)',
      // solid: 'rgba(79, 68, 140, 1)',
    };
    this.voice = {
      text: ' I should have stayed indoors today.',
      src: voicesRelative + 'Qiqi.ogg',
      srcReal:
        'https://static.wikia.nocookie.net/gensin-impact/images/0/07/VO_Qiqi_When_the_Sun_Is_Out.ogg/revision/latest?cb=20210112184913',
      actor: 'Christie Cate',
    };
  }
}
/**
 * $ultra-violet: rgba(79, 68, 140, 1);
$medium-slate-blue: rgba(112, 113, 199, 1);
$mint-green: rgba(231, 254, 250, 1);
$tropical-indigo: rgba(151, 142, 201, 1);
 */

class Xiao extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_Xiao.jpg';
    this.winningUrl = winningWEBP + 'WIN_Xiao.webp';
    this.alt = 'Xiao (Genshin Impact)';
    this.color = {
      // blur: 'rgba(82, 158, 146, 0.46)',
      blur: 'rgb(20 58 52 / 46%)',
      solid: 'rgba(82, 158, 146, 1)',
    };
    this.voice = {
      text: ' In the thousands of years that have passed, I have taken countless wraiths. If you want no trouble, stay away from me. See me as a weapon, and nothing more.',
      src: voicesRelative + 'Xiao.ogg',
      srcReal:
        'https://static.wikia.nocookie.net/gensin-impact/images/7/7b/VO_Xiao_More_About_Xiao_-_02.ogg/revision/latest?cb=20210209003246',
      actor: 'Laila Berzins',
    };
  }
}
/**
 * $persian-green: rgba(82, 158, 146, 1);
$gunmetal: rgba(38, 44, 53, 1);
$black: rgba(0, 0, 0, 1);
$black-2: rgba(0, 0, 0, 1);
$dark-slate-gray: rgba(49, 93, 107, 1);
 */

class Keqing extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_Keqing.jpg';
    this.winningUrl = winningWEBP + 'WIN_Keqing.webp';
    this.alt = 'Keqing (Genshin Impact)';
    this.color = {
      // blur: 'rgba(82, 158, 146, 0.46)',
      blur: 'rgb(32 27 63 / 46%)',
      solid: 'rgba(80, 71, 133, 1)',
    };
    this.voice = {
      text: `おはよう、朝の状態は一日の良し悪しを左右するわ。だから眠くても元気出して起きるのよ！`,
      textAlt: `(Good morning! Your condition in the morning has an influence on how well the rest of the day goes. So even if you're sleepy, start the day with some energy!)`,
      src: voicesRelative + 'Keqing.ogg',
      srcReal:
        'https://static.wikia.nocookie.net/gensin-impact/images/1/19/VO_JA_Keqing_Good_Morning.ogg/revision/latest?cb=20210526230751',
      actor: 'Eri Kitamura',
    };
  }
}
// $space-cadet: rgba(32, 27, 63, 1);
// $ultra-violet: rgba(80, 71, 133, 1);

class Sayu extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_Sayu.jpg';
    this.winningUrl = winningWEBP + 'WIN_Sayu.png';
    this.alt = 'Sayu';
    this.color = {
      // blur: 'rgba(82, 158, 146, 0.46)',
      blur: 'rgb(127 85 57 / 46%)',
      solid: 'rgba(189, 117, 70, 1)',
    };
    this.voice = {
      text: ' Kemenanganku hadir bukan karena kamu lemah, tapi Aku nya saja yang hebat.',
      src: voicesRelative + 'Sayu.mp3',
      srcReal: '',
      actor: 'Kana Ichinose',
    };
  }
}

class FakhriDAce extends Characters {
  constructor(name) {
    super(name);
    this.url = photoProfileRelativePath + 'PP_FakhriDAce.png';
    this.winningUrl = winningWEBP + 'WIN_FakhriDAce.png';
    this.alt = 'FakhriDAce';
    this.color = {
      // blur: 'rgba(82, 158, 146, 0.46)',
      blur: 'rgb(224 70 13 / 46%)',
      solid: 'rgba(230, 106, 60, 1)',
    };
    this.voice = {
      text: ' Hiduplah bebas di laut dan jangan hidup dalam penyesalan',
      src: voicesRelative + 'FakhriDAce.mp3',
      srcReal: '',
      actor: 'Toshio Furukawa',
    };
  }
}

// Genshin Characters
const genshinCharacters = [
  new Zhongli('Zhongli'),
  new YaeMiko('Yae Miko'),
  new RaidenShogun('Raiden Shogun'),
  new Wanderer('Wanderer'),
  new Hutao('Hutao'),
  new Nahida('Nahida'),
  // new Dottore('Dottore'),
  new Kokomi('Kokomi'),
  new Qiqi('Qiqi'),
  new Xiao('Xiao'),
  new Keqing('Keqing'),
];

const basicCharacters = [
  new GlasessCat('Glasess Cat'), // 0
  new HeadphonesCat('Headphone Cat'), // 1
  new DinoCiani('Dino Ciani'), // 2
  new BocilBeban('Bocil Beban'), // 3
  new PinkyGirlBazooka('Pinky Girl Bazooka'), // 4
  new Gede('Gede'), // 5
  new CoolRaiden('Cool Raiden'), // 6
  new SaddyYaeMiko('Saddy Yae Miko'), // 7
];

// Create all Characters | tidur bang
const allCharacters = [
  ...genshinCharacters,
  new Sayu('Sayu'),
  new FakhriDAce('Fakhri D Ace'),
];

const nonePlayer1 = new NullCharacter1();
const nonePlayer2 = new NullCharacter2();
const nonePlayer = new NullCharacter();

export { allCharacters, nonePlayer, nonePlayer1, nonePlayer2, basicCharacters };

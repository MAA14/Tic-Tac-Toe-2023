/* eslint-disable no-this-before-super */
/* eslint-disable constructor-super */
class PopUpError {
  name() {
    return this.name;
  }

  quoteser() {
    return this.quoteser;
  }

  message() {
    return this.message;
  }
}

class PlayerError extends PopUpError {
  constructor() {
    super();
    this.name = 'THERE IS A PLAYER WHO HAS NO CHARACTER';
    this.message =
      'Terkadang pertemuan itu bukan untuk bersama melainkan pelajaran untuk kita, bahwa pernah ada cerita singkat namun melekat yang membuat diri terjebak pada rasa nyaman tapi terbatas sebagai teman. Mungkin kamu sendirian sambil menunggu seseorang pulang karena ia pernah singgah dan memberikan momen yang indah namun apalah rasa sebuah momen tanpa komitmen seperti menikmati pahitnya kopi. Ya dari pada Nice try buat dapetin dia, mending Nice Game menangin Tic-Tac-Toe nya yuk pilih Characternya.';
    this.quoteser = 'usee';
  }
}

class GameError extends PopUpError {
  constructor() {
    super();
    this.name = "CAN'T START NEW GAME BEFORE FINISH THE GAME";
    this.message =
      'Ada sebuah hubungan yang dimulai namun tak pernah selesai, kala itu dimulai berawal dari saling sapa hingga bercerita, seakan terlihat seperti hubungan yang sempurna namun meninggalkan luka, karena ada yang mulai jatuh hati tapi ada yang menganggapnya hanya sekedar untuk menghibur diri. Selesaikan apa yang sudah kamu mulai, permainan ini bukan seperti hubungan antara kamu dan dia yang tak pernah berakhir dengan pasti.';
    this.quoteser = 'MAA';
  }
}

class DoublePlayerError extends PopUpError {
  constructor() {
    super();
    this.name = "PLAYER 1 AND PLAYER 2 CAN'T BE THE SAME CHARACTER";
    this.message =
      'Tetap mencintai dia yang sudah dimiliki oleh orang lain adalah seni menyakiti diri. Setia pada satu hati merupakan hal yang terpuji, tapi memahami bahwa bukan kamu yang di-ingini itu sadar diri. Ingatlah, setia dan memaksa itu dua hal yang berbeda. Dunia itu layaknya sebuah permainan jika kamu memaksa untuk mendapatkan hal yang sudah jelas tak bisa maka kamu takkan pernah bisa menikmati dunia, ayok nikmati permainannya dengan pilih Character lain.';
    this.quoteser = 'MAA';
  }
}

class HistoryError extends PopUpError {
  constructor() {
    super();
    this.name = "CAN'T SEE HISTORY WHILE GAME STARTING";
    this.message =
      'Waktu terus berlalu dan masa lalu-mu sudah punya yang baru, ayok tentukan langkah barumu jangan terpaku pada masa lalu tunjukkan pada dunia bahwa kamu bisa melangkah tanpanya.';
    this.quoteser = 'MAA';
  }
}

export { PlayerError, GameError, DoublePlayerError, HistoryError };

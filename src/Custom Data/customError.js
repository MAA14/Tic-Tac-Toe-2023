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
      'Mengunci Hati yang sepi namun berharap ada yang mengisi itu seperti ingin makan Nasi tanpa menanam Padi, mustahil kan? Sama seperti permainan ini yang tidak berfungsi jika ada Player yang belum terisi.';
    this.quoteser = 'MAA';
  }
}

class GameError extends PopUpError {
  constructor() {
    super();
    this.name = "CAN'T START NEW GAME BEFORE FINISH THE GAME";
    this.message =
      'Apa gunanya sebuah Hubungan jika salah satunya diabaikan? Apa gunanya permainan jika tidak pernah diselesaikan?';
    this.quoteser = 'MAA';
  }
}

class DoublePlayerError extends PopUpError {
  constructor() {
    super();
    this.name = "PLAYER 1 AND PLAYER 2 CAN'T BE THE SAME CHARACTER";
    this.message =
      'Terjebak pada masa lalu tidak akan membuat Dia kembali menjadi milikmu. Ayo pilih Character baru!!! Karena Dia juga udah punya yang baru.';
    this.quoteser = 'MAA';
  }
}

class HistoryError extends PopUpError {
  constructor() {
    super();
    this.name = "CAN'T SEE HISTORY WHILE GAME STARTING";
    this.message =
      'Waktu terus berlalu dan masa lalu-mu sudah punya yang baru, ayok tentukan langkah barumu jangan terpaku pada masa lalu karena dia bukan lagi urusanmu.';
    this.quoteser = 'MAA';
  }
}

export { PlayerError, GameError, DoublePlayerError, HistoryError };

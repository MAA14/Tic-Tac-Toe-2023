/* eslint-disable no-undef */
// minimax algorithm adalah sebuah algorithma yang bekerja seperti sebuah diagram pohon
/**
 * Misalkan kita ada pada suatu kondisi seperti ini :
 * X = player 1
 * O = player 2
 * [X,X, ]
 * [O,X,O] ----> dengan begini next turn adalah milik X
 * [ ,O, ]
 *
 * Maka bagaimana caranya supaya si X bisa menang?
 * Kemungkinan pertama :
 * [X,X, ] -->  [X,X,x] --> langsung menang
 * [O,X,O] -->  [O,X,O]
 * [ ,O, ] -->  [ ,O, ]
 *
 * Kemungkinan kedua :
 * [X,X, ] -->  [X,X, ]
 * [O,X,O] -->  [O,X,O]
 * [ ,O, ] -->  [ ,O,x] --> langsung menang
 *
 * Kemungkinan ketiga :
 * [X,X, ] -->  [X,X, ] --> [X,X,o]               --> [X,X,o]
 * [O,X,O] -->  [O,X,O] --> [O,X,O] changeTurn    --> [O,X,O]
 * [ ,O, ] -->  [x,O, ] --> [x,O, ]               --> [x,O,x] --> menang
 *                 v
 *                 ------->  [X,X, ] changeTurn   --> [X,X,x] --> menang
 *                           [O,X,O]              --> [O,X,O]
 *                           [x,O,o]              --> [x,O,o]
 */

/**
 * Nah kayak gitu contoh diagramnya tapi ini versi simplenya tonton lagi aja nih videonya males gw jelasin
 * https://www.youtube.com/watch?v=trKjYdBASyQ
 */

import checkWinners from './checkWinner';
import { nonePlayer } from '../Custom Data/Characters';
/**
 * @PENTING untuk perbandingan yang sudah jelas hasilnya pasti itu kita maunya biasakan make === bukan ==
 * @PENTING kalo ada yang salah sama minimaxnya, perhatikan logicnya baik-baik terutama pada (dokumentasi 2.0)
 *
 * @PENTING_BANGAT
 * jadi setelah gw coba cari-cari kesalahan kenapa AI nya jadi gampang bangat dikalahin itu karena nonePlayer
 * kalo nonePlayernya kita make yang diimport dari sini AI nya jadi kuat parah gk ada obat.
 * Tapi kalo nonePlayernya kita make dari punyanya AppRefactor.jsx atau App.jsx itu AI nya jadi lembek easy bat bahkan bukan AI
 * Lah kenapa bisa gitu gara beda import nonePlayer padahal diimport dari file yang sama? (GK TAU GW BANG ASLI INTINYA GITU AJA DULU)
 */

/* Fungsi Score untuk menentukan siapa yang menang ketika minimax membuat diagram dari segala kemungkinan 
  dan akan berhenti ketika masing-masing diagram dh mentok pada posisi Win atau Draw
  Win atau Draw yang dimaksud yaitu kondisi pada kedalaman tertentu si minimax setelah menaruh ai dan human pada board
  dengan beberapa cara yang berbeda-beda kalo si ai kalah maka dia akan balik lagi ke titik awal dimana gameBoard yang asli
  diberikan tapi kalo pada kedalaman tertentu ai menang maka dia akan berhenti melakukan percobaan dan 
  mereturn index langkah pertama yang membawa pada kemenangan yang ai dapatkan pada kedalaman itu
*/

/**
 * @INFODETAIL Tentang Scores kenapa pas menang return 1 atau -1 dan draw return 0
 */
const scores = {
  ai: 1, // point 1 harus untuk player/character yang mau dimenangkan dengan minimax, contohnya disini ai yaitu si player2
  human: -1, // point -1 posisi ketika ai kalah
  draw: 0, // point 0 posisi ketika ai dan player1 draw
};

// eslint-disable-next-line no-unused-vars
function minimaxAlgorithm(gameBoard, depth, ai, human, isMaximizing) {
  // Kalo pada kedalaman ini ai dh ada yang menang, berenti jangan lanjutin recursive
  let isWinner = checkWinners(gameBoard, ai, human); // return player1 atau player2 jika menang dan false jika gk ada yg menang
  if (isWinner) {
    if (isWinner === ai) return scores.ai; // return 1
    if (isWinner === human) return scores.human; // return -1
    // Kenapa gk scores[isWinner]? kan sama aja nanti jadi scores[player1] atau scores[player2]
    // Susah ya ges ya gw dh terlanjur namain player2 jadi ai disini, dan player1 jadi human
  }

  // Kalo pada kedalaman ini permainan jadi seri, berhenti jangan lanjutin recursive
  let isGameStillStart = gameBoard.some((square) => square === nonePlayer); // true or false
  if (!isGameStillStart) {
    return scores.draw; // return 0
  }

  // Nah kalo dikedalaman ini masih ada cara untuk melanjutkan permainan, maka minimaxAlgorithm lanjut recursive lagi
  if (isMaximizing) {
    // isMaximizing kalo true artinya lagi giliran AI yang dijalanin sama minimax
    let bestScore = -Infinity; // Buat patokan kapan recursive function minimax berhenti nantinya

    for (let i = 0; i < gameBoard.length; i++) {
      if (gameBoard[i] === nonePlayer) {
        gameBoard[i] = ai; // Ubah dulu jadi ai (ini dokumentasi 2.0)
        //(ini kesalahanFatal 1.1) jangan sampe ketuker set gameBoard[i] = ai sama gameBoard[i] = human (baca dokumentasi 2.1)

        let score = minimaxAlgorithm(gameBoard, depth + 1, ai, human, false); // disini penentu scorenya dan recursive minimax() berjalan
        // Kan kode minimaxAlgorithm pertama kali dijalankan itu checkWinner trus return score
        // Nah otomatis nanti si score disimpen di sini abis tuh cek
        gameBoard[i] = nonePlayer; // setelah minimax menemukan cara paling optimal balikin lagi jadi kosong kotaknya
        if (score > bestScore) {
          bestScore = score; // bestScore nanti direturn buat dikirim ke minimaxAlgorithm pada recursive sebelumnya
          // hingga akhirnya nanti nyampe ke return pada smartAIMoveIndex (baca documentasi 1.1) (ini dokumentasi 0.1)
          // kemudian karena pada kedalaman depth + 1 disini ai udah menang maka smartAIMoveIndex
          // akan menjadikan i pada for loop di smartAIMoveIndex sebagai index awal menuju kemenangan yang ditemukan
          // pada depth + 1 ini
        }
      }
    }

    return bestScore; // return bestScore

    // Kalo isMaximizing = true maka giliran AI, kalo isMaximizing = false maka giliran human dimainin sama minimax
  } else {
    // Ini artinya minimax akan jalanin player | karena ini ada 2 player jadi ganti-gantian minimax jalaninnya
    // sehingga minimax dapat menebak kemungkinan terbaik sesuai dengan peraturan permainannya
    let bestScore = Infinity; // Buat patokan kapan recursive function minimax berhenti nantinya

    for (let i = 0; i < gameBoard.length; i++) {
      if (gameBoard[i] === nonePlayer) {
        gameBoard[i] = human; // Ubah dulu jadi human (ini dokumentasi 2.1)
        let score = minimaxAlgorithm(gameBoard, depth + 1, ai, human, true); // disini penentu scorenya dan recursive minimax() berjalan (ini dokumentasi 0.2)
        // Kan kode minimaxAlgorithm pertama kali dijalankan itu checkWinner trus return score
        // Nah otomatis nanti si score disimpen di sini abis tuh cek

        gameBoard[i] = nonePlayer; // setelah minimax menemukan cara paling optimal balikin lagi jadi kosong kotaknya

        if (score < bestScore) {
          // Artinya ai kalah
          bestScore = score; // (baca dokumentasi 0.1)
          // bestScore disini berfungsi untuk merecursive balik dari kedalaman depth + 1, sampai pada smartMoveAI
          // kemudian lanjutkan looping i pada smartMoveAI
        }
      }
    }

    return bestScore;
  }
}

// Jadi nanti langkah awalnya dimulai dari fungsi ini
function smartAIMoveIndex(gameBoard, ai, human) {
  let bestScore = -Infinity; // Buat patokan kapan recursive function minimax berhenti nantinya
  let bestMove; // Ini buat nyimpen index move langkah pertama

  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === nonePlayer) {
      gameBoard[i] = ai; // Ubah dulu jadi ai
      let score = minimaxAlgorithm(gameBoard, 0, ai, human, false); // (baca dokumentasi 0.2) disini buat patokan si minimax gonta-ganti role dari ai jadi human
      gameBoard[i] = nonePlayer; // setelah minimax menemukan cara paling optimal balikin lagi jadi kosong kotaknya

      if (score > bestScore) {
        // nah score > bestScore itu artinya minimax udah nemu pada kedalaman tertentu si ai menang atau seri (ini documentasi 1.1)
        bestScore = score;
        bestMove = i; // ambil indexnya kalo score === 1 > -Infinity
      }
    }
  }

  return bestMove; // return indexnya
}

export default smartAIMoveIndex;

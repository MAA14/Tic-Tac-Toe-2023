export default function checkWinners(arr, player1, player2) { // Inputnya harus player1 dan player2 jangan zhongli atau dll...
  // Template Score
  const winCondition = [
    // Kesamping
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Kebawah/atas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Menyilang
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Find the Winner
  let winner = undefined;
  winCondition.forEach((win) => {
    let [a, b, c] = win;

    // Check apakah sama semua satu baris isinya
    if (
      (arr[a] === player1 || arr[a] === player2) &&
      arr[a] === arr[b] &&
      arr[b] === arr[c] &&
      arr[a] === arr[c]
    ) {
      winner = arr[a]; // Akan mereturn player yang win
    }
  });

  // Result
  // console.log(winner);
  if (winner) {
    return winner;
  } else {
    return false;
  }
}

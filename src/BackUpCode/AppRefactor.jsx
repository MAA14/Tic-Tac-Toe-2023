/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from './Button';
import checkWinners from './checkWinner';
import {
  allCharacters,
  nonePlayer,
  nonePlayer1,
  nonePlayer2,
} from './Characters';
import PopUp from './PopUp';
import {
  DoublePlayerError,
  GameError,
  PlayerError,
  HistoryError,
} from './customError';
import { WinningPhoto } from './components/WinningPhoto';
import BubbleText from './components/BubbleText';
import { useEffect } from 'react';
import { useRef } from 'react';

function refreshActiveClass(elements, setActiveElement, conditions = 'active') {
  // Karena React butuh useRef and useEffect untuk akses DOM kita pakai cara lain supaya modal useState aja

  let statusElement = '';
  if (conditions === 'active') {
    statusElement = 'active';
  }
  if (conditions === 'hover') {
    statusElement = 'noActive';
  }

  let newElements = elements.map((element) => {
    if (element == setActiveElement) {
      element.status = statusElement;
    } else {
      element.status = 'noActive';
    }
    return element; // masukin ke array baru dari map()
  });

  return newElements;
}

function getAllSquares() {
  const squares = [];
  for (let i = 0; i < allCharacters.length; i++) {
    const square = {
      status: 'noActive',
      id: i,
    };

    squares.push(square);
  }
  return squares;
}

function Game() {
  // Error Configuration
  let playerError = new PlayerError();
  let gameError = new GameError();
  let doublePlayerError = new DoublePlayerError();
  let historyError = new HistoryError();
  let winner = '';
  let [winnerImg, setWinnerImg] = useState(allCharacters[0]);

  // Component Class Configration
  let [classStatus, setClassStatus] = useState('gameOver'); // gameOver || gameStart
  let [playerStatusClass, setPlayerStatusClass] =
    useState('player1NonSelected'); // player1Selected || player1NonSelected || player2Selected
  let [playerStatusChecker, setPlayerStatusChecker] =
    useState('player1NonSelected');

  // Check Update setiap playerStatusClass berubah
  useEffect(() => {
    setPlayerStatusClass(playerStatusChecker);
  }, [playerStatusChecker]);

  let [gameStatusClass, setGameStatusClass] = useState('gameNotReady'); // gameReady || gameNotReady
  let [popUpStatusClass, setPopUpStatusClass] = useState('noError'); // error || noError
  let [charStatusClass, setCharStatusClass] = useState('charNotDisabled'); // charNotDisabled || charDisabled
  // eslint-disable-next-line no-unused-vars
  let [history, setHistory] = useState(Array()); // Ini buat nyimpen data Class
  let [winnerHistory, setWinnerHistory] = useState(Array());

  // Player State
  let [player1, setPlayer1] = useState(nonePlayer1);
  let [player2, setPlayer2] = useState(nonePlayer2);
  // let [player1Hover, setPlayer1Hover] = useState(null); // Default null
  // let [player2Hover, setPlayer2Hover] = useState(null);

  // console.log('Player 2 = ', player2);
  // console.log('Player 1 = ', player1);

  // Configuration
  // Game Over
  let [gameOver, setGameOver] = useState(true);
  // let [firstGame, setFirstGame] = useState(true);
  // Error POP UP
  let [popUpError, setPopUpError] = useState(playerError);
  // Square List
  let [squaresP1, setSquaresP1] = useState(getAllSquares());
  let [squaresP2, setSquaresP2] = useState(getAllSquares());
  let [squaresStatus, setSquaresStatus] = useState(Array(9).fill('')); // squareDisabled || squareDisable
  // console.log('P1 = ', squaresP1);
  let [disableCharacter, setDisableCharacter] = useState(false);
  let [gamePoint, setGamePoint] = useState(Array(9).fill(nonePlayer));
  // Status Text
  let [statusText, setStatusText] = useState(`Click Start when you Ready!!!`);

  // Audio Configuration
  let [audioStatus, setAudioStatus] = useState('paused');
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioStatus == 'play') {
      audioRef.current.play();
    } else if (audioStatus == 'paused') {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [audioStatus]);

  // useRef and useEffect biar kgk refresh pagenya (kalo make useState ke refresh)
  const player1TextRef = useRef(null);
  const player2TextRef = useRef(null);
  useEffect(() => {
    player1TextRef.current.innerHTML = `Player 1 (${
      player1.name ?? 'No Character'
    })`;
  }, [
    playerStatusClass,
    popUpError,
    gameOver,
    disableCharacter,
    gamePoint,
    squaresStatus,
    statusText,
    classStatus,
    charStatusClass,
    player1,
  ]);
  // Kenapa banyakan dependencies dibanding code execute?
  // Karena setiap kali ada fungsi set dari useState bakalan refresh semua Component
  // dan fungsi useEffect untuk ambil alih ketika masa componentDidMounting
  // Fungsi dependencies [playerStatusClass, dll...]
  // Untuk sebagai acuan si useEfect bakalan ngelakuin update ketika state mana aja yang berubah

  useEffect(() => {
    player2TextRef.current.innerHTML = `Player 2 (${
      player2.name ?? 'No Character'
    })`;
  }, [
    playerStatusClass,
    popUpError,
    gameOver,
    disableCharacter,
    gamePoint,
    squaresStatus,
    statusText,
    classStatus,
    charStatusClass,
    player2,
  ]);

  // Hover effect
  function characterHover(over = false, out = false, index, player) {
    if (!gameOver) return;

    // When mouse In add Hover player
    if (over) {
      if (player === player1) {
        player1TextRef.current.innerHTML = `Player 1 (${allCharacters[index].name})`;
      } else if (player === player2) {
        player2TextRef.current.innerHTML = `Player 2 (${allCharacters[index].name})`;
      }
    }

    // WHen mouse out delete Hover Player
    if (out) {
      // Untuk pemanggilan setting configuration di function nanti
      if (player === player1) {
        player1TextRef.current.innerHTML = `Player 1 (${
          player1.name ?? 'No Character'
        })`;
      } else if (player === player2) {
        player2TextRef.current.innerHTML = `Player 2 (${
          player2.name ?? 'No Character'
        })`;
      }
    }
  }

  // Function Picker Player
  function pickPlayer1(index) {
    if (player2 === allCharacters[index]) {
      setPopUpError(doublePlayerError);
      setPopUpStatusClass('error');
      return;
    }
    setPlayer1(allCharacters[index]);
    setPlayerStatusChecker('player1Selected');
    // console.log(player1);

    // Refresh Active Class
    const newSquares = refreshActiveClass(squaresP1, squaresP1[index]);
    setSquaresP1(newSquares);
    return player1;
  }

  function pickPlayer2(index) {
    if (player1 === allCharacters[index]) {
      setPopUpError(doublePlayerError);
      setPopUpStatusClass('error');
      return;
    }
    setPlayer2(allCharacters[index]);
    // Mobile Configuration
    if (player1 != nonePlayer1) {
      setPlayerStatusChecker('player1Selected player2Selected'); // For mobile
      setGameStatusClass('gameReady'); // For mobile
    }
    // console.log(player2);

    // Refresh Active Class
    const newSquares = refreshActiveClass(squaresP2, squaresP2[index]);
    setSquaresP2(newSquares);

    return player2;
  }

  // Buat Player 1
  let listOverviewCharacterP1 = allCharacters.map((char, index) => {
    return (
      <li key={'C' + index} className={squaresP1[index].status}>
        <button
          className={`characterOverview ${charStatusClass}`}
          onClick={() => pickPlayer1(index)}
          onMouseOver={() => characterHover(true, false, index, player1)}
          onMouseOut={() => characterHover(false, true, index, player1)}
          disabled={disableCharacter}
        >
          <img src={char.url} alt={char.alt} />
        </button>
      </li>
    );
  });

  // Buat Player 2
  let listOverviewCharacterP2 = allCharacters.map((char, index) => {
    return (
      <li key={'C' + index} className={squaresP2[index].status}>
        <button
          className={`characterOverview ${charStatusClass}`}
          onClick={() => pickPlayer2(index)}
          onMouseOver={() => characterHover(true, false, index, player2)}
          onMouseOut={() => characterHover(false, true, index, player2)}
          disabled={disableCharacter}
        >
          <img src={char.url} alt={char.alt} />
        </button>
      </li>
    );
  });

  // className=" playerPickerContainer player1||player2"
  function PlayerPickerP1({ className }) {
    return (
      <>
        <div className={className}>
          <h2 ref={player1TextRef}>
            Player 1 ({player1.name ?? 'Null Character'})
          </h2>
          <div className={`charactersListContainer ${charStatusClass}`}>
            <ul className="overviewList">{listOverviewCharacterP1}</ul>
          </div>
        </div>
      </>
    );
  }

  function PlayerPickerP2({ className }) {
    return (
      <>
        <div className={className}>
          <h2 ref={player2TextRef}>
            Player 2 ({player2.name ?? 'Null Character'})
          </h2>
          <div className={`charactersListContainer ${charStatusClass}`}>
            <ul className="overviewList">{listOverviewCharacterP2}</ul>
          </div>
        </div>
      </>
    );
  }

  // Gameplay function ---------------------------------------------------------------------
  let [xIsNext, setXIsNext] = useState(false);

  let [player, setPlayer] = useState(player1);

  function checkPlayer() {
    let currentPlayer = xIsNext; // Mencegah delay dari React
    // Player 1
    if (!currentPlayer)
      // Pasti true
      setPlayer((player = player1));
    // Player 2
    if (currentPlayer)
      // Pasti false
      setPlayer((player = player2));

    setXIsNext(!xIsNext); // Ganti giliran (ubah true jadi false atau false jadi true)
  }

  // Feature History winners
  // JumpToFunction
  function jumpToHistory(index) {
    if (!gameOver) {
      setPopUpError(historyError);
      setPopUpStatusClass('error');
      return;
    }
    const jumpHistory = history[index];
    setGamePoint(jumpHistory);
    winner = winnerHistory[index];
    setWinnerImg(winner);
    setStatusText(`Winner is ${winner.name}`);
  }

  let historyJSX = history.map((arr, index) => {
    return (
      <li key={index}>
        <div
          className="historyListContainer"
          onClick={() => jumpToHistory(index)}
        >
          <img src={winnerHistory[index].url} alt={winnerHistory[index].alt} />
        </div>
      </li>
    );
  });
  // console.dir(history);

  // Play Handle Click
  function onPlay(index) {
    // Kalo udah diisi gk bisa dipencet lagi atau kalo udah gameOver
    if (gamePoint[index] != nonePlayer || gameOver) return;

    let copyGamePoint = gamePoint.slice();
    copyGamePoint[index] = player; // nanti dimasukin Object type Class
    setGamePoint((gamePoint = copyGamePoint));
    checkPlayer(); // Check sekarang player siapa
    setStatusText(`Next Player is ${player.name}`);

    // Setiap di klik kotak yang diklik akan jadi merah 1 per 1
    let copySquaresStatus = squaresStatus.slice();
    copySquaresStatus[index] = 'squareDisabled';
    setSquaresStatus(copySquaresStatus);

    // Check winner
    winner = checkWinners(gamePoint, player1, player2);

    // Kalo udah ada yang menang gk bisa dipencet yang lain
    if (winner) {
      setGameOver((gameOver = true)); // Akhiri permainan
      setDisableCharacter(false);
      setClassStatus('gameOver');
      setCharStatusClass('charNotDisabled'); // To Not Disable character list

      // setHistory(history.push(gamePoint)); // Jangan kayak gini soalnya .push() returnnya number of length array
      // setHistory itu sendiri udah kayak history = history.push(gamePoint)
      // Nah return dari push() itu length of array saat di push (yaitu 1), hal ini akan mengubah array kita jadi number
      // Itulah kenapa kita gk bisa make .map() setelah di push karena array history jadi number length
      history.push(gamePoint); // Simpen History si pemenang
      // bisa kek gini tapi lebih bagus make concat() | lupakan kalo make concat ada delay
      // console.log(history);

      // Set Winner
      setWinnerImg(checkWinners(gamePoint, player1, player2));
      // console.log(winnerImg);
      setWinnerHistory(winnerHistory.concat(winner)); // Kalo mau gk error pas mau nambahin data ke array
      setWinningPhotoStatus('showUp');
      setBubbleTextWinStatus('bubbleShow');

      // Play the Audio
      setAudioStatus('play');

      setStatusText(`Winner is ${winner.name}`);
      return;
    }

    // Check Draw
    if (!gamePoint.includes(nonePlayer)) {
      setStatusText(`DRAW!!!`);
      setGameOver(true);
      setDisableCharacter(false);
      setClassStatus('gameOver');
      setCharStatusClass('charNotDisabled'); // To Not Disable character list
    }

    // Debugging
    // console.log(gamePoint);
  }

  // New game----------------------------------------------------------------------------
  function reset() {
    // If still there is player has no Character
    if (player1 === nonePlayer1 || player2 === nonePlayer2) {
      setPopUpError(playerError);
      setPopUpStatusClass('error');
      return;
    }

    // If Game still playing
    if (!gameOver) {
      setPopUpError(gameError);
      setPopUpStatusClass('error');
      return;
    }

    // If first match, so there is no event to make gameOver false or true
    // console.log(!gamePoint.includes(player) && !firstGame);
    // setFirstGame(false);
    // if (!gamePoint.includes(player) && !firstGame) return;

    // Reset Game Over
    setGameOver(false);
    setDisableCharacter(true);

    // Reset scorenya
    setGamePoint((gamePoint = Array(9).fill(nonePlayer)));

    // Reset papannya
    setSquaresStatus(Array(9).fill(''));

    // Reset player
    xIsNext = false; // Kenapa gk make useXIsNext(false) ? karena nanti delay, jadi gunakan ini tanpa delay.
    // Dan juga kita akan mengubahnya sesuai dengan giliran menggunakan useXIsNext() supaya terupdate terus per langkahnya
    checkPlayer();

    // Reset Status
    setStatusText(`Next Player is ${player.name}`);

    // Reset Status Class
    setClassStatus('gameStart');
    setCharStatusClass('charDisabled'); // To disable character list
  }

  // Components
  function Board() {
    return (
      <div className="board">
        <Button
          className={`square ${classStatus} ${squaresStatus[0]}`}
          onClick={() => onPlay(0)}
          character={gamePoint[0]}
        />
        <Button
          className={`square ${classStatus} ${squaresStatus[1]}`}
          onClick={() => onPlay(1)}
          character={gamePoint[1]}
        />
        <Button
          className={`square ${classStatus} ${squaresStatus[2]}`}
          onClick={() => onPlay(2)}
          character={gamePoint[2]}
        />
        <Button
          className={`square ${classStatus} ${squaresStatus[3]}`}
          onClick={() => onPlay(3)}
          character={gamePoint[3]}
        />
        <Button
          className={`square ${classStatus} ${squaresStatus[4]}`}
          onClick={() => onPlay(4)}
          character={gamePoint[4]}
        />
        <Button
          className={`square ${classStatus} ${squaresStatus[5]}`}
          onClick={() => onPlay(5)}
          character={gamePoint[5]}
        />
        <Button
          className={`square ${classStatus} ${squaresStatus[6]}`}
          onClick={() => onPlay(6)}
          character={gamePoint[6]}
        />
        <Button
          className={`square ${classStatus} ${squaresStatus[7]}`}
          onClick={() => onPlay(7)}
          character={gamePoint[7]}
        />
        <Button
          className={`square ${classStatus} ${squaresStatus[8]}`}
          onClick={() => onPlay(8)}
          character={gamePoint[8]}
        />
      </div>
    );
  }

  // Components
  function BackButton({ className, onClick, id, text }) {
    return (
      <div className={`buttonStart backButton ${className}`} id={id}>
        <button onClick={onClick}>{text}</button>
      </div>
    );
  }

  // Back handleClick
  function handleBack() {
    setPlayerStatusChecker('player1NonSelected');
  }

  // Pop Up close
  function popUpClose(e) {
    let popUp = document.querySelector('#popUpBody');
    let emptyText = document.querySelector('.closePopUp p');
    // console.log('Pop Up is ', popUp);
    // console.log('E is ', e.target);
    if (e.target == popUp || e.target == emptyText) {
      setPopUpStatusClass('noError');
    } else {
      return;
    }
  }

  // Back to Lobby
  function backToLobby() {
    if (!gameOver) {
      console.log('Error');
      // setPopUpError(lobbyError);
      // setPopUpStatusClass('error');
      return;
    } else {
      // Reset board
      setStatusText('Click Start when you Ready!!!');
      // setFirstGame(true);
      setGamePoint(Array(9).fill(nonePlayer));

      // Reset for Mobile
      setPlayerStatusChecker('player1NonSelected'); // For mobile
      setGameStatusClass('gameNotReady'); // For mobile
    }
  }

  // Win Configuration
  let [winningPhotoStatus, setWinningPhotoStatus] = useState('showHide'); // showUp | showHide
  let [bubbleTextWinStatus, setBubbleTextWinStatus] = useState('bubbleHide'); // bubbleShow | bubbleHide

  function closeBubbleTextWinHandleClick(e) {
    const bubbleTextContainer = document.querySelector('.bubbleTextContainer');
    const winningPhotoContainer = document.querySelector(
      '.winningPhotoContainer'
    );
    const photoContainer = document.querySelector('.photoContainer img');
    const bodyWinning = document.querySelector('.bodyWinning');

    const target = e.target;
    if (
      target == bubbleTextContainer ||
      target == winningPhotoContainer ||
      target == bodyWinning ||
      target == photoContainer
    ) {
      setBubbleTextWinStatus('bubbleHide');
      setTimeout(() => {
        setWinningPhotoStatus('showHide');
        setAudioStatus('paused');
      }, 1500);
    } else {
      return;
    }
  }

  return (
    <>
      <PopUp
        error={popUpError}
        status={popUpStatusClass}
        onClick={(e) => popUpClose(e)}
      />
      <WinningPhoto
        src={winnerImg.winningUrl}
        alt={winnerImg.alt}
        status={winningPhotoStatus}
        onClick={closeBubbleTextWinHandleClick}
      >
        <BubbleText
          name={winnerImg.name}
          status={bubbleTextWinStatus}
          color={winnerImg.color}
          ref={audioRef}
          voice={winnerImg.voice}
        />
      </WinningPhoto>

      <div className="bodyContainer">
        <div className="mobilePlayerPickerContainer">
          <PlayerPickerP1
            className={`playerPickerContainer player1 ${playerStatusClass}`}
            disabled={true}
          />

          <PlayerPickerP2
            className={`playerPickerContainer player2 ${playerStatusClass}`}
            disabled={true}
          />

          <BackButton
            className={` ${classStatus} ${playerStatusClass}`}
            id="backToP1Button"
            text="Back"
            onClick={handleBack}
          />
        </div>
        <div className={`gameContainer ${gameStatusClass}`}>
          <h3 className="statusText">{statusText}</h3>
          <Board />

          <div className={`buttonStart ${classStatus}`}>
            <button onClick={reset}>Start</button>
          </div>

          <BackButton
            className={` ${classStatus} ${playerStatusClass}`}
            id="backToLobbyButton"
            text="Change Character"
            onClick={backToLobby}
          />
        </div>
      </div>
      <div className="historyContainer">
        <h3 className="historyTitle">Winning History</h3>
        <ul>{historyJSX}</ul>
      </div>
      <div className="creditContainer"></div>
    </>
  );
}

export default Game;

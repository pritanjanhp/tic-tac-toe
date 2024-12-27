import { useState } from "react";
import Board from './Board';
import History from './History'; // We will create this component

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const newHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  return (
    <>
      <h1>Tic-Tac-Toe Game</h1>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <History history={history} currentMove={currentMove} jumpTo={jumpTo} />
        </div>
      </div>
    </>
  );
}

export default Game;


// App > game > board > square > history > moveButton

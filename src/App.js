// import { useState } from "react";

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// function Board({ xIsNext, square, onPlay }) {
//   // const [xIsNext, setXIsNext] = useState(true);
//   // const [square, setSquare] = useState(Array(9).fill(null));
//   // To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. The parent component can pass that state back down to the children via props. This keeps the child components in sync with each other and with their parent.

//   // closures handleclick function can read the squares state and call the setSquares method because they are both defined inside of the Board function.
//   function handleClick(i) {
//     if (square[i] || calculateWinner(square)) return; // to stop from updating the square again
//     let nextSq = square.slice(); // creates a copy of the squares arra
//     // nextSq[i] = "x"; // updates the nextSquares array to add X

//     if (xIsNext) nextSq[i] = "x";
//     else nextSq[i] = "o";

//     // setSquare(nextSq); // lets us know the state of the component has changed

//     // setXIsNext(!xIsNext);

//     onPlay(nextSq);
//   }

//   const winn = calculateWinner(square);
//   let status;
//   if (winn) status = "winner is " + winn;
//   else status = "next player turn" + (xIsNext ? "x" : "O");

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={square[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={square[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={square[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={square[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={square[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={square[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={square[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={square[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={square[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// export default function Game() {
//   // const [xIsNext, setXIsNext] = useState(true);
//   const xIsNext = currMove % 2 === 0;
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currMove, setCurrMove] = useState(0); // to keep track of which step the user is currently viewing
//   const currSq = history[currMove];

//   function handlePlay(nextSq) {
//     const nextHistory = [...history.slice(0, currMove + 1), nextSq];
//     setHistory(nextHistory);
//     setCurrMove(nextHistory.length - 1);
//     // setHistory([...history, nextSq]); // creates a new array that contains all the items in history, followed by nextSq
//     // setXIsNext(!xIsNext);
//   }
//   function jumpTo(nextMove) {
//     // to update the currMove
//     // we'll also set xIsNext to true if the number that you’re changing currMove to is even
//     setCurrMove(nextMove);
//     // setXIsNext(nextMove % 2 === 0);
//   }

//   const moves = history.map((square, move) => {
//     let desc;
//     if (move > 0) desc = "go to move #" + move;
//     else desc = "go to game start";

//     return (
//       // key={move} is added to remove the waring and make it unique
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}> {desc}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} square={currSq} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// function calculateWinner(square) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (square[a] && square[a] === square[b] && square[a] === square[c])
//       return square[a];
//   }
//   return null;
// }

// // ! export default function Square() {
// // The export JavaScript keyword makes this function accessible outside of this file.
// // The default keyword tells other files using your code that it’s the main function in your file.

// // ! return <button className="square">X</button>;
// // return JavaScript keyword means whatever comes after is returned as a value to the caller of the function
// // <button> is a JSX element. A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display.
// // className="square" is a button property or prop that tells CSS how to style the button.
// // X is the text displayed inside of the button and
// // </button> closes the JSX element to indicate that any following content shouldn’t be placed inside the button.

// // Since, we have lost the numbered squares we had before.
// // Now each square says “1”.
// // To fix this, we will use props to pass the value each square should have from the parent component (Board) to its child (Square).

// // ! function Square({ value })
// // indicates the Square component can be passed as prop called value.

import React from "react";
import Game from "./component/Game";

function App() {
  return (
    <div className="app">
      <h1>Tic-Tac-Toe Game</h1>
      <Game />
    </div>
  );
}

export default App;

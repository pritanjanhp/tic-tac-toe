import Square from './Square';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return; // to stop from updating the square again or after a winner
    let nextSquares = squares.slice();        //  creates a copy of the squares arra
    nextSquares[i] = xIsNext ? 'X' : 'O';     // Setting 'X' or 'O' based on the player
    onPlay(nextSquares);                    // now, Passing the new board state to the parent component
  }

  const winn = calculateWinner(squares);
  const status = winn ? `Win: ${winn}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  // return (
  //   <div>
  //     <div className="status">{status}</div>
  //     {[0, 3, 6].map((rowIndex) => (
  //       <div className="board-row" key={rowIndex}>
  //         {Array.from({ length: 3 }, (_, index) => {
  //           const i = rowIndex + index;
  //           return <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />;
  //         })}
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={Square[0]} onSquareClick={() => handleClick(0)} />
        <Square value={Square[1]} onSquareClick={() => handleClick(1)} />
        <Square value={Square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={Square[3]} onSquareClick={() => handleClick(3)} />
        <Square value={Square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={Square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={Square[6]} onSquareClick={() => handleClick(6)} />
        <Square value={Square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={Square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;

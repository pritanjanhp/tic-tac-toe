import MoveButton from './MoveButton'; // We will create this component

function History({ history, currentMove, jumpTo }) {
  const moves = history.map((_, move) => {
    const description = move > 0 ? `Go to move #${move}` : "Go to game start";
    return <MoveButton key={move} move={move} description={description} jumpTo={jumpTo} />;
  });

  return (
    <ol>{moves}</ol>
  );
}

export default History;

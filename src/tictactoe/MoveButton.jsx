function MoveButton({ move, description, jumpTo }) {
  return (
    <li>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
}

export default MoveButton;

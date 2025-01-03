

export default function GameBoard({ gameBoard, onSquareClick }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleClick(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const newGameBoard = [...prevGameBoard.map((rows) => [...rows])];
  //     newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return newGameBoard;
  //   });
  //   onSquareClick();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSquareClick(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

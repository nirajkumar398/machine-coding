import "./style.css";
import useTicTacToe from "./useTicTacToe";

const TicTacToe = ({ gridSize = 3 }) => {
  const { board, gameStatus, handleCellClick, handleStartClick } = useTicTacToe(gridSize);

  return (
    <div className="tictactoe__container">
      <h1>Tic Tac Toe</h1>
      <div
        className="grid__container"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {board.map((cell, index) => (
          <span key={index} onClick={() => handleCellClick(index)}>
            {cell}
          </span>
        ))}
      </div>

      {gameStatus.isGameOver && (
        <div className="grid__winner">
          <span>
            {gameStatus.hasWinner
              ? `Winner is: ${gameStatus.currentPlayer}`
              : "Game is Over!!"}
          </span>
          <button onClick={handleStartClick}>Start Again</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;

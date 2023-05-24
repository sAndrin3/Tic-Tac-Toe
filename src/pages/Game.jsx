import React from 'react'
import './game.css'
import { useState } from "react";

function Game() {
   // State variables

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  // Winning patterns on the tic-tac-toe board
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

   // Function to check if there is a winner or draw
  const checkWinner = () => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // If a winning pattern is found, return the winner (X or O)
        return board[a];
      }
    }
    if (board.every((value) => value !== "")) {
      // If the board is full and no winner is found, it's a draw
      return "draw";
    }
     // If there is no winner or draw yet, return null
    return null;
  };

   // Function to handle the click event on a grid item (cell)
  const changeValue = (idx) => {
    if (board[idx] === "" && !winner) {
      // If the clicked cell is empty and there is no winner yet
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[idx] = player; // Set the cell value to the current player (X or O)
        return newBoard;
        
      });

      const gameWinner = checkWinner(); // Check if there is a winner or draw
      if (gameWinner) {
        setWinner(gameWinner); // Set the winner (X, O, or draw)
      } else {
        setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X")); // Switch to the next player
      }
    }
  };

   // Function to reset the game board
  const resetBoard = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]); // Reset the board
    setPlayer("X"); // Set the initial player to X
    setWinner(null); // Reset the winner
  };

  return (
    <div>
      <div className='ourGame'>
        <h1 className="heading">Tic-tac-Toe</h1>
        <div className="Wrapper">
          <div className="Grid--board">
            {board.map((value, index) => (
              <span
                key={index}
                className="Grid--item"
                onClick={() => changeValue(index)}
              >
                {value}
              </span>
            ))}
          </div>
          {winner && (
            <div className="Result">
              {winner === "draw" ? <p>It's a draw!</p> : <p>Winner: {winner}</p>}
              <button onClick={resetBoard}>Restart</button>
            </div>
          )}
        </div>
      </div>
      
       
    </div>
  )
}

export default Game
import React from 'react'
import './about.css'
function About() {
  return (
    <div className='about'>
    <h1>Tic-Tac-Toe Game Instructions</h1>
  
    <h2>1. Set up the game:</h2>
    <ul>
      <li>Draw a 3x3 grid on a piece of paper or a playing surface. Alternatively, you can use a tic-tac-toe board if available.</li>
      <li>Decide which player will be X and which will be O.</li>
    </ul>
    
    <h2>2. Start the game:</h2>
    <ul>
      <li>Player X goes first. They choose any empty cell on the grid and place their X in that cell.</li>
      <li>Player O takes the next turn and places their O in any empty cell.</li>
    </ul>
    
    <h2>3. Alternate turns:</h2>
    <ul>
      <li>Players continue to take turns, placing their respective symbols (X or O) in empty cells on the grid.</li>
      <li>The goal is to get three of their symbols in a row, either horizontally, vertically, or diagonally.</li>
    </ul>
    
    <h2>4. Determine the winner:</h2>
    <ul>
      <li>If any player succeeds in getting three of their symbols in a row, they win the game.</li>
      <li>If all the cells on the grid are filled and no player has won, the game is a draw (also known as a tie or a cat's game).</li>
    </ul>
    
    <h2>5. End the game:</h2>
    <ul>
      <li>Once a player has won or the game is a draw, the game is over.</li>
      <li>If you want to play again, you can start from step 1 with the same or different players.</li>
    </ul>
    
    <h3>Tips for playing tic-tac-toe:</h3>
    <ul>
      <li>Pay attention to your opponent's moves and plan your strategy accordingly.</li>
      <li>Look for opportunities to create a winning line while also blocking your opponent's potential winning moves.</li>
      <li>Remember that the player going first (X) has a slight advantage if they play optimally.</li>
    </ul></div>
  )
}

export default About
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import "./style.css";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

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

  const checkWinner = () => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (board.every((value) => value !== "")) {
      return "draw";
    }
    return null;
  };

  const changeValue = (idx) => {
    if (board[idx] === "" && !winner) {
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[idx] = player;
        return newBoard;
      });

      const gameWinner = checkWinner();
      if (gameWinner) {
        setWinner(gameWinner);
      } else {
        setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
      }
    }
  };

  const resetBoard = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
    setWinner(null);
  };


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

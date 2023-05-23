import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Game from "./pages/Game";
function App() {
  const [Board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [Player, setPlayer] = useState("X");

  const changeValue = (idx) => {
    setBoard(Board.map((value, index) => {
      if (idx === index && value === "") {
        return Player;
      }
      return value;
    }));
    setPlayer(Player === "X" ? "O" : "X");
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Game/>} />
        </Routes>
        <div className="Wrapper">
          <div className="Grid--board">
            <span className="Grid--item" onClick={() => changeValue(0)}>{Board[0]}</span>
            <span className="Grid--item" onClick={() => changeValue(1)}>{Board[1]}</span>
            <span className="Grid--item" onClick={() => changeValue(2)}>{Board[2]}</span>
            <span className="Grid--item" onClick={() => changeValue(3)}>{Board[3]}</span>
            <span className="Grid--item" onClick={() => changeValue(4)}>{Board[4]}</span>
            <span className="Grid--item" onClick={() => changeValue(5)}>{Board[5]}</span>
            <span className="Grid--item" onClick={() => changeValue(6)}>{Board[6]}</span>
            <span className="Grid--item" onClick={() => changeValue(7)}>{Board[7]}</span>
            <span className="Grid--item" onClick={() => changeValue(8)}>{Board[8]}</span>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

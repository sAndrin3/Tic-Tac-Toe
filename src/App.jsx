import { useState } from "react";
import "./App.css";
// import Game from './Components/Game'

function App() {
  const [Board, setBoard] = useState(["","","","","","","","",""]);
  const [Player, setPlayer]= useState("X")

  const changevalue = (idx) =>{
    setBoard(Board.map((value,index) =>{
      if(idx === index && value === ""){
        // alert(Player)
        return Player
      }
       return value
    }))
    if(Player === "X"){
      setPlayer("O")
    } 
    else setPlayer("X")  
  }

  return (
    <div className="Wrapper">
      <div className="Grid--board">
        <span className="Grid--item" onClick={() => changevalue(0)}>{Board[0]}</span>
        <span className="Grid--item" onClick={() => changevalue(1)}>{Board[1]}</span>
        <span className="Grid--item" onClick={() => changevalue(2)}>{Board[2]}</span>
        <span className="Grid--item" onClick={() => changevalue(3)}>{Board[3]}</span>
        <span className="Grid--item" onClick={() => changevalue(4)}>{Board[4]}</span>
        <span className="Grid--item" onClick={() => changevalue(5)}>{Board[5]}</span>
        <span className="Grid--item" onClick={() => changevalue(6)}>{Board[6]}</span>
        <span className="Grid--item" onClick={() => changevalue(7)}>{Board[7]}</span>
        <span className="Grid--item" onClick={() => changevalue(8)}>{Board[8]}</span>
      </div>
    </div>
  );
}

export default App;

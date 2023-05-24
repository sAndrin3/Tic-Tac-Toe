import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Game from "./pages/Game";

function App() {
 
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

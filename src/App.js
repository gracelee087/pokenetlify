// App.js
import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MonsterAll from "./page/MonsterAll";
import MonsterDetail from "./page/MonsterDetail";
import Navbar from "./component/Navbar";
import CharacterDetail from "./page/CharacterDetail";
import GameBoard from "./page/Gameboard";

function App() {
  const [allMonsters, setAllMonsters] = useState([]);

  // fetching the data
  const getAllMonster = async () => {
    let url = `https://port-0-poke-k19y2kljln98xi.sel4.cloudtype.app/pokemon`;
    let response = await fetch(url);
    let data = await response.json();
    
    // seting the data to a state
    setAllMonsters(data);
  };

  useEffect(() => {
    getAllMonster();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<MonsterAll allMonsters={allMonsters} />} />
        <Route path='/pokemon/:id' element={<MonsterDetail />} />
        <Route path='/pokemon/:id/info' element={<CharacterDetail />} />
        <Route path='/pokemon/:id/gameboard' element={<GameBoard />} />
      </Routes>
    </div>
  );
}

export default App;

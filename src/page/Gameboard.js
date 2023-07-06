import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GameBoard() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        `https://port-0-poke-k19y2kljln98xi.sel4.cloudtype.app/pokemon/${id}`
      );
      const data = await response.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  useEffect(() => {
    const fetchOpponentPokemon = async () => {
      const randomId = Math.floor(Math.random() * 151) + 1;
      const response = await fetch(
        `https://port-0-poke-k19y2kljln98xi.sel4.cloudtype.app/pokemon/${randomId}`
      );
      const data = await response.json();
      setOpponentPokemon(data);
    };

    fetchOpponentPokemon();
  }, []);

  const handleStart = async () => {
    let fightWinner; //winnder updated 적는곳

    if (pokemon.base.Attack > opponentPokemon.base.Attack) {
      fightWinner = "pokemon";
    } else if (pokemon.base.Attack < opponentPokemon.base.Attack) {
      fightWinner = "opponent";
    } else {
      fightWinner = "draw";
    }

    // 승자 정보를 백엔드에 저장
    try {
      const response = await fetch(
        "https://pokeserverwbs.onrender.com/game/save",
        {
          //여기수정
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            winner: fightWinner,
            opponent: opponentPokemon.name.english,
            turns: 1, // 게임의 턴 수 등 추가 필드도 여기에 포함
          }),
        }
      );
      const data = await response.json();
      setWinner(fightWinner);
      console.log("Game saved:", data);
    } catch (error) {
      console.error("Error saving game:", error);
    }
  };   

  if (!pokemon || !opponentPokemon) return <div>Loading...</div>;

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div
            className='col'
            style={{
              border: "1px solid black",
              padding: "10px",
              boxShadow: winner === "pokemon" ? "0px 0px 10px blue" : "none",
            }}
          >
            <h1>{pokemon.name.english}</h1>
            <h2>{pokemon.type.join(", ")}</h2>
            {pokemon.base &&
              Object.entries(pokemon.base).map(([key, value]) => (
                <div key={key}>
                  {key}: {value}
                </div>
              ))}
          </div>
          <div className='col'>
            <div
              className='opponent'
              style={{
                border: "1px solid black",
                padding: "10px",
                boxShadow: winner === "opponent" ? "0px 0px 10px blue" : "none",
              }}
            >
              <h1>{opponentPokemon.name.english}</h1>
              <h2>{opponentPokemon.type.join(", ")}</h2>
              {opponentPokemon.base &&
                Object.entries(opponentPokemon.base).map(([key, value]) => (
                  <div key={key}>
                    {key}: {value}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button
            className='btn btn-primary'
            onClick={handleStart}
            style={{
              width: "30%",
              padding: "10px",
              margin: "20px",
              border: "2px solid lightgray",
              color: "black",
              backgroundColor: "transparent",
            }}
          >
            START
          </button>
        </div>
        {winner && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h3>
              {winner === "pokemon" && (
                <div style={{ padding: "10px" }}>
                  <span>Congratulations! You won!</span>
                  <br />
                </div>
              )}
              {winner === "opponent" && (
                <div style={{ padding: "10px" }}>
                  <span>Opponent won!</span>
                  <br />
                </div>
              )}
              {winner === "draw" && (
                <div style={{ padding: "10px" }}>
                  <span>It's a draw!</span>
                  <br />
                </div>
              )}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameBoard;

import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function LeaderBoard() {
  const [gameResults, setGameResults] = useState([]);

  useEffect(() => {
    const fetchGameResults = async () => {
      try {
        const response = await fetch(
          "https://pokeserverwbs.onrender.com/game/leaderboard"
        ); //여기서버주소수정
        const data = await response.json();
        if (Array.isArray(data.games)) {
          setGameResults(data.games);
        } else {
          console.error("Invalid game results data:", data);
        }
      } catch (error) {
        console.error("Error fetching game results:", error);
      }
    };

    fetchGameResults();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "50%" }}>
        <h1 className='text-center'>Leader's Board</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className='text-center'>Winner</th>
              <th className='text-center'>Opponent</th>
              <th className='text-center'>Turns</th>
            </tr>
          </thead>
          <tbody>
            {gameResults.map((result) => (
              <tr key={result._id}>
                <td className='text-center'>{result.winner}</td>
                <td className='text-center'>{result.opponent}</td>
                <td className='text-center'>{result.turns}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default LeaderBoard;

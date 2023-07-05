import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ padding: "3em 5px", fontSize: "2em" }}>
        <Link to='/' style={{ textDecoration: "none" }}>
          <div>Poke Fight!</div>
        </Link>
      </div>
      <div style={{ padding: "3em 5px", fontSize: "2em" }}>
        <div>Select Your Warrior</div>
      </div>
      <div style={{ padding: "3em 5px", fontSize: "2em" }}>
        <Link to='/pokemon/game/leaderboard' style={{ textDecoration: "none" }}>
          Go to Winner's Board
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

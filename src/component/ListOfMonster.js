// ListOfMonster.js
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ListOfMonster({ pokemon }) {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "10px", fontSize: "1.4em" }}>{pokemon?.id}</div>
      <div style={{ margin: "10px", fontSize: "1.4em" }}>
        {pokemon?.name.english}
      </div>
      {/* <div>{pokemon?.type.join(", ")}</div>
      {pokemon?.base &&
        Object.entries(pokemon.base).map(([key, value]) => (
          <div key={key}>
            {key}: {value}
          </div>
        ))} */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link to={`/pokemon/${pokemon.id}`} style={{ width: "100%" }}>
          <Button
            variant='secondary'
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "1px solid lightgray",
              color: "black",
            }}
          >
            Profile
          </Button>
        </Link>
        <Link to={`/pokemon/${pokemon.id}/gameboard`} style={{ width: "100%" }}>
          <Button
            variant='primary'
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "1px solid lightgray",
              color: "black",
            }}
          >
            Select
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ListOfMonster;

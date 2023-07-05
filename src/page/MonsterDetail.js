// MonsterDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function MonsterDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

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

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>{pokemon.name.english}</h1>
      <h2>{pokemon.type.join(", ")}</h2>
      {pokemon.base &&
        Object.entries(pokemon.base).map(([key, value]) => (
          <div key={key}>
            {key}: {value}
          </div>
        ))}

      <Link to={`/pokemon/${id}/info`}>
        <Button variant='secondary'>Show Details!!</Button>
      </Link>
    </div>
  );
}

export default MonsterDetail;

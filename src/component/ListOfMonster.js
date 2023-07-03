// ListOfMonster.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ListOfMonster({ pokemon }) {
  return (
    <div style={{ border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>{pokemon?.id}</div>
      <div>{pokemon?.name.english}</div>
      <div>{pokemon?.type.join(", ")}</div>
      {pokemon?.base && Object.entries(pokemon.base).map(([key, value]) => (
        <div key={key}>{key}: {value}</div>
      ))}
      <Link to={`/pokemon/${pokemon.id}/gameboard`} style={{ width: '100%', marginTop: '10px' }}>
        <Button variant="secondary" style={{ width: '100%' }}>Details</Button>
        <Button variant="primary" style={{ width: '100%' }}>Select</Button>
      </Link>
    </div>
  );
}

export default ListOfMonster;

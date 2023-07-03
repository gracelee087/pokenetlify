import React from 'react';

function CharacterDetail({ pokemon }) {
  return (
    <div>
      <h1> MONSTER INFORMATION : {pokemon?.name.english}</h1>
      {pokemon?.base && <div>Attack: {pokemon.base.Attack}</div>}
    </div>
  );
}

export default CharacterDetail;

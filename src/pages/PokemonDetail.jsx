import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const getData = async () => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await result.json();
    setPokemon(data);
  };

  useEffect(() => {
    getData();
  }, [name]);

  console.log(pokemon)


  return (
    <div>
      {pokemon && (
        <>
          <p>Nombre : {pokemon.name}</p>
          <p>Tipo : {pokemon.types[0]?.type.name}</p>
          {pokemon.stats?.map((item, i) => (
            <div key={i}>{item.stat.name} : {item.base_stat}</div>
          ))}
          <img src={pokemon.sprites?.front_default} alt="" />
        </>
      )}
    </div>
  );
};


export default PokemonDetail;

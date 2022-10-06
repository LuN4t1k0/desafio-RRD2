import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetchData2 } from "../hooks/useFetch2";

const PokemonDetail = () => {
  const { name } = useParams();
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const data = useFetchData2(BASE_URL);
  console.log(data);

  return (
    <div>
      <h1>Lista detalle</h1>
      <p>nombre : {name}</p>
      <p>Experiencie : {data.base_experience}</p>
      <p>peso : {data.weight}</p>
      {/* {pokemon ? <img src={pokemon.sprites.back_default} alt="" /> : <p>Vacio</p> } */}

      <img src={data.sprites?.other.home.front_default} alt="" />
    </div>
  );
};

export default PokemonDetail;

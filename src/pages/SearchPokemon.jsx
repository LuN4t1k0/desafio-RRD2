import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import { AppContext } from "../context/AppContext";

const SearchPokemon = () => {
  const [nombre, setNombre] = useState("");
  const { data } = useContext(AppContext);
  const navigate = useNavigate();
 

  const handleSearch = (e) => {
    const pokeName = e.target.value;
    if (pokeName && pokeName != "") {
      setNombre(pokeName);
    } else {
      alert("No existe");
    }
  };

  const searchPokemonByName = (e) => {
    e.preventDefault();
    navigate(`${nombre}`);
  };

  return (
    <>
      <select onChange={handleSearch} name="" id="">
        <option value="">Selecciona un Pokemon</option>
        {data.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <MyButton search={searchPokemonByName} text="Buscar Pokemon" />
    </>
  );
};

export default SearchPokemon;

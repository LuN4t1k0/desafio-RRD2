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
      <div className="flex flex-col items-center align-middle justify-center h-[calc(100vh-60px)] w-full bg-slate-500">
        <div className="ok">
          <img src="" alt="" />
        </div>

        <div>
          <select
            className="h-20 text-xl"
            onChange={handleSearch}
            name=""
            id=""
          >
            <option value="">Selecciona un Pokemon</option>
            {data.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <MyButton search={searchPokemonByName} text="Buscar Pokemon" />
      </div>
    </>
  );
};

export default SearchPokemon;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const MyNavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="p-5 bg-red-500 shadow text-white md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl md:flex items-center">
          <img
            className="h-10 inline mx-3"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
            alt="pokeball"
          />
          <h2 className="mx-4 font-semibold ">PokeAPI</h2>
        </span>
      </div>
      <ul className="md:flex md:items-center z[-1] md:z-auto ">
        <NavLink
          to={"/"}
          className={
            "text-xl text-white hover:text-black duration-500 mx-4 my-6 md:my-0"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to={"pokemon"}
          className={
            "text-xl text-white hover:text-black duration-500 mx-4 my-6 md:my-0"
          }
        >
          POKEMON
        </NavLink>
        <NavLink
          to={"buscar"}
          className={
            "text-xl text-white hover:text-black duration-500 mx-4 my-6 md:my-0"
          }
        >
          BUSCAR
        </NavLink>
        <a
          className="text-xl text-white hover:text-black duration-500 mx-4 my-6 md:my-0"
          href="https://pokeapi.co/"
          target={"_blank"}
        >
          API
        </a>
        <NavLink
          to={"/"}
          className={
            "text-xl text-white hover:text-black duration-500 mx-4 my-6 md:my-0"
          }
        >
          CONTACTO
        </NavLink>
      </ul>
    </nav>
  );
};

export default MyNavBar;

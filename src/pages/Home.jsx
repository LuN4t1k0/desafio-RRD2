import React from "react";
import MyButton from "../components/MyButton";
import principal from '../assets/img/imgPrincipal.png'
const Home = () => {
  const searchPokemonByName = (e) => {
    e.preventDefault();
    navigate(`${nombre}`);
  };
  return (
    <div className="h-[calc(100vh-60px)] w-full bg-green-500 ">
     
      {/* <div className="bg-red-500  flex justify-center">
        <img src={principal} alt="principal" />
      </div> */}
    </div>
  );
};

export default Home;

{/* <div className="sm:bg-black bg-cyan-500 flex flex-col h-[calc(100vh-80px)] w-screen  "></div> */}
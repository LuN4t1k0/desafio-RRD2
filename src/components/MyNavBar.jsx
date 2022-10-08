import { NavLink } from "react-router-dom";

const MyNavBar = () => {
  const setActiveClass = ({ isActive }) => {
    isActive ? "active" : null;
  };

  return (
    <div className="w-full h-[64px] bg-red-500 shadow text-white flex items-center">
      <div className="izquierda flex items-center">
        <div>
          <img
            className="h-10 pl-4 pr-4"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
            alt="pikachu"
          />
        </div>
        <div className="text font-semibold">PokeAPI</div>
      </div>

      <div className="izquierda w-1/3 lg:w-60 md:w-60">
        <div className="logo w-full flex items-center justify-center  ">
          <h1 className="text-lg pr-2">
            <i className="fa-solid fa-camera"></i>
          </h1>
          <div className="imgLogo"></div>
        </div>
      </div>
      <div className="flex justify-around w-60 ">
        <div>
          <NavLink style={setActiveClass} className="text-lg pl-4" end to="/">
            HOME
          </NavLink>
        </div>
        <div>
          <NavLink style={setActiveClass} className="text-lg" to="/pokemon">
            POKEMON
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyNavBar;

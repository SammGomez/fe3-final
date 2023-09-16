import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";


const Card = ({char}) => {

  const {state, dispatch} = useCharStates()
  const findChar = state.favs.find(fav => fav.id == char.id)
  
  const addFav = ()=>{
  //   // Aqui iria la logica para agregar la Card en el localStorage
    if (findChar){
      dispatch ({type: "DELETE_FAV", payload: findChar})
    } else{
      dispatch ({type: "ADD_FAV", payload: char})
    }
  }

  return (
    <div className="card">
      <Link to ={"/detail/" + char.id}>
        <img style={{width: 200}} src="./images/doctor.jpg" alt="doctor"></img>
        <h2>{char.name}</h2>
        <h3>{char.username}</h3>
      </Link>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favBtn">{findChar ? '🌟' : '⭐'}</button>
    </div>
  );
};

export default Card;

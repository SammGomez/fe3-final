import React from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from '../Context/Context';
import "../Styles/Navbar.css"


const Navbar = () => {

  const {state,dispatch} = useCharStates();

  const changeTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    dispatch({ type: newTheme, payload: newTheme });
  }

  return (
    <div className="navbar">
      <div className='title'>
          <h4>Proyecto DH</h4>
      </div>
      <nav> 
      
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link  to="/"><p className='nav-h3' >Home</p></Link>
        <Link  to="/contact"><p className='nav-h3'>Contact</p></Link>
        <Link  to="/favs"><p className='nav-h3'>Favs</p></Link>

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={changeTheme} className="theme-btn" >
          {state.theme === "dark" ? '🌙' : '🌞'} </button>
      </nav>
    </div>
  )
}

export default Navbar
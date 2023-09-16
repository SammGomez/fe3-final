import React from 'react'
import axios from "axios"
import { useCharStates } from '../Context/Context'
import {useParams} from "react-router-dom"
import { useEffect } from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {state, dispatch} = useCharStates()

  const params = useParams();

  const {name, email, phone, website} = state.char;

  const url = "https://jsonplaceholder.typicode.com/users/" + params.id

 

  useEffect(() =>{
    axios(url)
    .then(res => dispatch({type: "GET_CHAR", payload: res.data }))
  }, [])
 

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    
      <section className='card-container'>
        <h2>Dentist Information</h2>
      <div className='card-img'>
        <img style={{width: 200}} src="../images/doctor.jpg" alt="doctor"></img>
      </div>
      <div className='card-info'>
        <h3>name: {name}</h3>
        <h3>email: {email}</h3>
        <h3>celphone: {phone}</h3>
        <h3>website: {website}</h3>
      </div>
      </section>
  )
}

export default Detail
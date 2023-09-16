import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [usuario, setUsuario] = useState({
    nombreCompleto: "",
    email:""
  })

  const [enviado, setEnviado] = useState(false);
  const [error, setError] =useState(false)

  const validarEmail = (email) => {

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      return regexEmail.test(email);
  }


  const handleSubmit = () => {
    if(usuario.nombre.length > 5 && validarEmail(usuario.email) == true) {
        setEnviado(true)
        setError(false)
    } else {
        setError(true)
    }
}

  return (
    <div>
      
      <label>Nombre Completo: </label>
      <input type="text" onChange={(event) => setUsuario({...usuario, nombre: event.target.value})}/>
      <label>Email: </label>
      <input type="text" onChange={(event) => setUsuario({...usuario, email: event.target.value})}/>
      <button onClick={handleSubmit}>Enviar</button>
      {enviado && <h3>Gracias {usuario.nombre}, te contactaremos cuando antes vía mail</h3>}
      {error && <h3 style={{color: 'red'}}>Por favor verifique su información nuevamente</h3>}
  </div>
  );
};

export default Form;


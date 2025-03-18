import React, { useState,useEffect, } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import llamados from '../services/llamados'


function FormRegister() {

const [nombreUsuario,SetNombreUsuario]=useState()
const [nombreCorreo,SetNombreCorreo]=useState()
const [passwordUsuario,SetPasswordUsuario]=useState()

const navigate = useNavigate()


useEffect(() => {

        async function fetchDataUsers() {

            const datos = await llamados.getUsers()

            SetUsuario(datos)
        }
        fetchDataUsers();
    }, []);

    

    function nombre(evento) {
        SetNombreUsuario(evento.target.value);        
    }
    function correo(evento) {
        SetNombreCorreo(evento.target.value);        
    }

    function password(evento) {
        SetPasswordUsuario(evento.target.value);
    }

    function validar() {
        llamados.postUsers(nombreUsuario, nombreCorreo,passwordUsuario)
        navigate('/login')
    }










  return (
    <div>
      <label htmlFor="">Nombre</label>
      <input value={nombreUsuario} onChange={nombre} type="text" />
      <label htmlFor="">Correo Electronico</label>
      <input value={nombreCorreo} onChange={correo} type="text" />
      <label htmlFor="">Contraseña</label>
      <input value={passwordUsuario} onChange={password} type="text" />
      <button onClick={validar}>Iniciar</button>
      <p>¿ya tienes una cuenta? <Link to={"/login"}> Inicia aquí</Link></p>
    </div>
  )
}

  
export default FormRegister

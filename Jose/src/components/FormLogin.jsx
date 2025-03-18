import React, { useState,useEffect, } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import llamados from '../services/llamados'

function FormLogin() {

    const [nombreUsuario,SetNombreUsuario]=useState()
    const [passwordUsuario,SetPasswordUsuario]=useState()
    const [usuarios,SetUsuario]=useState()


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

    function password(evento) {
        SetPasswordUsuario(evento.target.value);
    }

    function validar() {

        console.log(nombreUsuario, passwordUsuario);
        console.log(usuarios);

        const encontrado = usuarios.filter(usuario => usuario.nombre===nombreUsuario && usuario.contraseña=== passwordUsuario)

       if (encontrado.length === 0) {
        console.log("Usuario o contrasena incorrectos");
        
       }else{


        navigate('/home')

       }
    }

    return (
        <div>
            <label htmlFor="">Nombre</label>
            <input value={nombreUsuario} onChange={nombre} type="text" />
            <label htmlFor="">Contraseña</label>
            <input value={passwordUsuario} onChange={password} type="text" />
            <button onClick={validar}>Iniciar</button>
            <p>¿ya tienes una cuenta? <Link to={"/register"}> Inicia aquí</Link></p>
        </div>
    );
}

export default FormLogin;

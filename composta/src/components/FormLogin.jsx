import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import llamados from '../services/llamados';
import Swal from 'sweetalert2';

function FormLogin() {
    const [nombreUsuario, SetNombreUsuario] = useState('');
    const [passwordUsuario, SetPasswordUsuario] = useState('');
    const [usuarios, SetUsuario] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchDataUsers() {
            const datos = await llamados.getUsers();
            SetUsuario(datos);
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

        const encontrado = usuarios.filter(usuario => usuario.nombre === nombreUsuario && usuario.contraseña === passwordUsuario);

        if (encontrado.length === 0) {
            // Mostrar alerta SweetAlert2 en caso de error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña incorrectos!',
            });
        } else {
            if (nombreUsuario === 'jose' && passwordUsuario === '1234') {
                navigate('/admin');
            } else {
                navigate('/home');
            }
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <label htmlFor="">Nombre</label>
            <input value={nombreUsuario} onChange={nombre} type="text" />
            <label htmlFor="">Contraseña</label>
            <input value={passwordUsuario} onChange={password} type="password" />
            <button onClick={validar}>Iniciar</button>
            <p>¿Ya tienes una cuenta? <Link to={"/register"}> Registrate aquí</Link></p>
        </div>
    );
}

export default FormLogin;

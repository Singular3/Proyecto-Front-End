import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import llamados from '../services/llamados';

function FormRegister() {
  const [nombreUsuario, SetNombreUsuario] = useState();
  const [nombreCorreo, SetNombreCorreo] = useState();
  const [passwordUsuario, SetPasswordUsuario] = useState();
  const [usuario, SetUsuario] = useState([]);
  const [error, setError] = useState(""); // Estado para manejar errores
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

  function correo(evento) {
    SetNombreCorreo(evento.target.value);
  }

  function password(evento) {
    SetPasswordUsuario(evento.target.value);
  }

  // Función para validar el correo
  function validarCorreo(correo) {
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regexCorreo.test(correo);
  }

  // Función para verificar si la contraseña es válida
  function validarPassword(password) {
    return password.length >= 6; // Puedes ajustar este valor según lo que consideres adecuado
  }

  function validar() {
    // Limpiar errores previos
    setError("");

    // Verificar si los campos están vacíos
    if (!nombreUsuario || !nombreCorreo || !passwordUsuario) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // Validar correo
    if (!validarCorreo(nombreCorreo)) {
      setError("Por favor ingresa un correo electrónico válido.");
      return;
    }

    // Validar contraseña
    if (!validarPassword(passwordUsuario)) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Verificar si el correo ya existe
    const correoExistente = usuario.some(user => user.correo === nombreCorreo);
    if (correoExistente) {
      setError("Este correo ya está registrado.");
      return;
    }

    // Si todo está bien, proceder a guardar el usuario
    llamados.postUsers(nombreUsuario, nombreCorreo, passwordUsuario);
    navigate('/login');
  }

  return (
    <div>
      <h1>Registro</h1>

      <label htmlFor="">Nombre</label>
      <input value={nombreUsuario} onChange={nombre} type="text" />

      <label htmlFor="">Correo Electrónico</label>
      <input value={nombreCorreo} onChange={correo} type="text" />

      <label htmlFor="">Contraseña</label>
      <input value={passwordUsuario} onChange={password} type="text" />

      <button onClick={validar}>Iniciar</button>

      {/* Mostrar error si existe */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p>¿Ya tienes una cuenta? <Link to={"/login"}>Inicia aquí</Link></p>

    </div>
  );
}

export default FormRegister;

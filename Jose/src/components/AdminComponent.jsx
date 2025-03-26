import React, { useState, useEffect } from 'react';
import llamados from '../services/llamados';

function AdminComponent() {
  const [centros, setCentros] = useState([]);
  const [nombreCentro, setNombreCentro] = useState('');
  const [direccionCentro, setDireccionCentro] = useState('');
  const [horaApertura, setHoraApertura] = useState('');
  const [horaCierre, setHoraCierre] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  // Cargar centros al iniciar el componente
  useEffect(() => {
    async function fetchCentros() {
      const centrosData = await llamados.getUsers(); // Usando getUsers para obtener todos los centros
      setCentros(centrosData); // Suponiendo que 'centros' está en la respuesta
    }

    fetchCentros();
  }, []);

  const handleNombreCentro = (e) => setNombreCentro(e.target.value);
  const handleDireccionCentro = (e) => setDireccionCentro(e.target.value);
  const handleHoraApertura = (e) => setHoraApertura(e.target.value);
  const handleHoraCierre = (e) => setHoraCierre(e.target.value);
  const handleFechaInicio = (e) => setFechaInicio(e.target.value);
  const handleFechaFin = (e) => setFechaFin(e.target.value);

  const handleRegistrarCentro = async () => {
    const nuevoCentro = {
      nombreCentro,
      direccionCentro,
      horaApertura,
      horaCierre,
      fechaInicio,
      fechaFin,
    };

    try {
      // Usando un servicio POST (suponiendo que centros se manejen con postUsers por ahora)
      await llamados.postUsers(nuevoCentro.nombreCentro, nuevoCentro.direccionCentro, nuevoCentro.horaApertura, nuevoCentro.horaCierre);
      alert('Centro registrado correctamente');
    } catch (error) {
      console.error('Error registrando centro:', error);
      alert('Hubo un error al registrar el centro');
    }
  };

  // Editar centro
  const handleEditarCentro = async (id) => {
    const centroActualizado = {
      nombreCentro,
      direccionCentro,
      horaApertura,
      horaCierre,
      fechaInicio,
      fechaFin,
    };

    try {
      // Usamos el servicio PUT para actualizar
      await llamados.updateUsers(id, centroActualizado.nombreCentro, centroActualizado.direccionCentro, centroActualizado.horaApertura, centroActualizado.horaCierre);
      alert('Centro actualizado correctamente');
    } catch (error) {
      console.error('Error actualizando centro:', error);
      alert('Hubo un error al actualizar el centro');
    }
  };

  // Eliminar centro
  const handleEliminarCentro = async (id) => {
    try {
      await llamados.deleteUser(id); // Llamamos el servicio DELETE
      alert('Centro eliminado correctamente');
    } catch (error) {
      console.error('Error eliminando centro:', error);
      alert('Hubo un error al eliminar el centro');
    }
  };

  return (
    <div>
      <h1>Registro de centros de compostaje</h1>

      <label htmlFor="nombreCentro">Nombre del centro</label><br />
      <input id="nombreCentro" value={nombreCentro} onChange={handleNombreCentro} type="text" /><br />

      <label htmlFor="direccionCentro">Dirección</label><br />
      <input id="direccionCentro" value={direccionCentro} onChange={handleDireccionCentro} type="text" /><br />

      <label htmlFor="horaApertura">Horario de atención</label><br />
      <label htmlFor="horaApertura">Apertura</label><br />
      <input id="horaApertura" value={horaApertura} onChange={handleHoraApertura} type="time" /><br />

      <label htmlFor="horaCierre">Cierre</label><br />
      <input id="horaCierre" value={horaCierre} onChange={handleHoraCierre} type="time" /><br />

      <label htmlFor="fechaInicio">Fechas disponibles para el compostaje</label><br />
      <label htmlFor="fechaInicio">Fecha de inicio</label><br />
      <input id="fechaInicio" value={fechaInicio} onChange={handleFechaInicio} type="date" /><br />
      <label htmlFor="fechaFin">Fecha de fin</label><br />
      <input id="fechaFin" value={fechaFin} onChange={handleFechaFin} type="date" /><br />

      <button onClick={handleRegistrarCentro}>Registrar centro</button>

      {/* Renderizar centros */}
      <h2>Centros de Compostaje</h2>
      <ul>
        {centros.map(centro => (
          <li key={centro.id}>
            {centro.nombreCentro} - {centro.direccionCentro}
            <button onClick={() => handleEditarCentro(centro.id)}>Editar</button>
            <button onClick={() => handleEliminarCentro(centro.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminComponent;



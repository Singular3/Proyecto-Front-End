import React, { useState, useEffect } from 'react';

function Notificaciones() {
  const [notificaciones, setNotificaciones] = useState([]);

  useEffect(() => {
    // Simula la obtención de datos desde un backend
    const obtenerNotificaciones = async () => {
      try {
        // Aquí podrías hacer una llamada a una API real
        const datos = await new Promise((resolve) =>
          setTimeout(() => resolve(['Recolección programada para mañana', 'Recolección completada en tu zona']), 1000)
        );
        setNotificaciones(datos);
      } catch (error) {
        console.error('Error al obtener notificaciones:', error);
      }
    };

    obtenerNotificaciones();
  }, []);

  return (
    <div>
      <h3>Notificaciones de Recolección</h3>
      <ul>
        {notificaciones.length > 0 ? (
          notificaciones.map((noti, index) => (
            <li key={index}>{noti}</li>
          ))
        ) : (
          <li>Cargando notificaciones...</li>
        )}
      </ul>
    </div>
  );
}

export default Notificaciones;

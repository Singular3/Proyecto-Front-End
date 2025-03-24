import React, { useState, useEffect } from 'react';

function Notificaciones() {
  // Definimos los días de recolección (Ejemplo: lunes, miércoles, viernes)
  const diasDeRecoleccion = [
    { dia: 'Lunes', hora: '08:00 AM' },
    { dia: 'Miércoles', hora: '08:00 AM' },
    { dia: 'Viernes', hora: '08:00 AM' }
  ];

  // Estado para las notificaciones
  const [notificaciones, setNotificaciones] = useState([]);

  // Función para verificar si hoy es día de recolección
  const verificarRecoleccion = () => {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const hoy = new Date();
    const diaHoy = dias[hoy.getDay()];

    const notificacionesHoy = diasDeRecoleccion.filter((recoleccion) => recoleccion.dia === diaHoy);
    if (notificacionesHoy.length > 0) {
      setNotificaciones(notificacionesHoy.map((recoleccion) => `¡Hoy es día de recolección! ${recoleccion.dia} a las ${recoleccion.hora}`));
    } else {
      setNotificaciones([]);
    }
  };

  // Usamos useEffect para ejecutar la verificación al cargar el componente
  useEffect(() => {
    verificarRecoleccion();

    // Configuramos para que verifique nuevamente al pasar un día
    const interval = setInterval(() => {
      verificarRecoleccion();
    }, 86400000); // 86400000 ms = 1 día

    return () => clearInterval(interval); // Limpiamos el intervalo cuando el componente se desmonte
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
          <li>No hay recolección hoy.</li>
        )}
      </ul>
    </div>
  );
}

export default Notificaciones;

import React from 'react'

function Notificaciones() {
  return (
    <div>
        <h3>Notificaciones de Recolección</h3>
      <ul>
        {notificaciones.map((noti, index) => (
          <li key={index}>{noti}</li>
        ))}
      </ul>
    </div>
  )
}

export default Notificaciones

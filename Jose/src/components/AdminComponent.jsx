import React from 'react'

function AdminComponent() {
  return (
    <div>
      <h1>Registro de Centros de Compostaje</h1>
      <form action="#" method="POST">
        {/* Nombre del centro */}
        <div>
          <label htmlFor="nombre">Nombre del Centro:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>

        {/* Dirección */}
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" required />
        </div>

        {/* Horarios */}
        <div>
          <label htmlFor="horarios">Horario de Atención:</label>
          <label htmlFor="hora_apertura">Apertura:</label>
          <input type="time" id="hora_apertura" name="hora_apertura" required />

          <label htmlFor="hora_cierre">Cierre:</label>
          <input type="time" id="hora_cierre" name="hora_cierre" required />
        </div>

        {/* Fechas disponibles */}
        <div>
          <label htmlFor="fechas_disponibles">Fechas disponibles para el compostaje:</label>
          <input type="date" id="fecha_inicio" name="fecha_inicio" required />
          <input type="date" id="fecha_fin" name="fecha_fin" required />
        </div>

        {/* Condiciones */}
        <div>
          <label htmlFor="condiciones">Condiciones:</label>
          <textarea id="condiciones" name="condiciones" rows="4" required></textarea>
        </div>

        {/* Enviar */}
        <div>
          <button type="submit">Registrar Centro</button>
        </div>
      </form>
    </div>
  )
}

export default AdminComponent

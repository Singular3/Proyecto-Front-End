import React from 'react'

function header() {
  return (
    <div>
      <header>
      <div className="logo">
        <img src="logo.png" alt="Logo del comercio o empresa" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Página Principal</Link></li>
          <li><Link to="/contacto">Contacto / Acerca de Nosotros</Link></li>
          <li><Link to="/crud">CRUD de Productos o Servicios</Link></li>
        </ul>
      </nav>
  </header>
)
    </div>
  )
}

export default header

import React, { useState } from 'react';

function Foro() {
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);

  const manejarPublicacion = (e) => {
    e.preventDefault();
    if (mensaje.trim() !== '') {
      setMensajes([...mensajes, mensaje]);
      setMensaje('');
    }
  };

  return (
    <div>
      <h3>Foro Comunitario</h3>
      <form onSubmit={manejarPublicacion}>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Comparte tus tips de compostaje"
        ></textarea>
        <button type="submit">Publicar</button>
      </form>
      <div>
        <h4>Mensajes Publicados:</h4>
        <ul>
          {mensajes.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Foro;

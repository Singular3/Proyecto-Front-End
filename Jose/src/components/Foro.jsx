import React from 'react'

function Foro() {
  return (
    <div>
       <h3>Foro Comunitario</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Comparte tus tips de compostaje"
        ></textarea>
        <button type="submit">Publicar</button>
      </form>
    </div>
  )
}

export default Foro

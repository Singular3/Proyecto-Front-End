import React, { useState, useEffect } from 'react'


import llamados2 from '../services/llamadosUpdates';

import ReactDOM from 'react-dom';





function ToDolist() {


  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState('')
  
  





   useEffect(() => {
  
          async function fetchDataUsers() {
  
              const datosTareas = await llamados.getUsers()
  
              SetUsuario(datos)
          }
          fetchDataUsers();
      }, []);

      function manejarCambioTarea(evento) {
   
        
        setNuevaTarea(evento.target.value)
      }

      async function agregarTarea() {
        console.log(nuevaTarea);

        input: "nuevaTarea"
        const response = await fetch("http://localhost:3001/tareas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaTarea)
        });
        
        
      }



  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Añadir nueva tarea"
        value={nuevaTarea}
        onChange={manejarCambioTarea}
      />
      <button onClick={agregarTarea}>Añadir tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDolist

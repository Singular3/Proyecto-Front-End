import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';  // Importa el estilo de Leaflet

function Mapa() {
  useEffect(() => {
    // Crear el mapa y establecer la vista inicial
    const map = L.map('map').setView([9.981397949778884, -84.75705174167729], 13);

    // Añadir la capa de OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Array con las ubicaciones (puedes agregar más ubicaciones aquí)
    const ubicaciones = [
      { lat: 9.981397949778884, lng: -84.75705174167729, info: 'Ubicación 1: Punto A' },
      { lat: 9.991397949778884, lng: -84.76705174167729, info: 'Ubicación 2: Punto B' },
      { lat: 9.975397949778884, lng: -84.73705174167729, info: 'Ubicación 3: Punto C' },
    ];

    // Agregar un marcador por cada ubicación
    ubicaciones.forEach((ubicacion) => {
      L.marker([ubicacion.lat, ubicacion.lng]).addTo(map)
        .bindPopup(ubicacion.info)
        .openPopup();
    });

    // Limpiar cuando el componente se desmonte
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <h3>Mapa de Puntos de Entrega</h3>
      <div className="mapa-container">
        <p>Mapa interactivo con los puntos de entrega cercanos.</p>
        <div id="map" style={{ height: '400px' }}></div> {/* Contenedor del mapa */}
      </div>
    </div>
  );
}

export default Mapa;


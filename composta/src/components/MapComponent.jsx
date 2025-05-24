import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';  // Importa el estilo de Leaflet

function Mapa() {
  const [userPosition, setUserPosition] = useState(null);  // Estado para guardar la ubicación del usuario

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

    // Obtener la ubicación en tiempo real del usuario
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserPosition({ lat: latitude, lng: longitude });

        // Mover el mapa y agregar un marcador para la ubicación actual del usuario
        map.setView([latitude, longitude], 13);  // Actualiza la vista del mapa
        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup('Ubicación Actual del Usuario')
          .openPopup();
      }, (error) => {
        console.error("Error al obtener la ubicación", error);
      }, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      });
    } else {
      alert("Geolocalización no es soportada en tu navegador.");
    }

    // Limpiar cuando el componente se desmonte
    return () => {
      map.remove();
    };
  }, []);  // El efecto solo se ejecuta una vez al montar el componente

  return (
    <div>
      <h3>Mapa de Puntos de Entrega</h3>
      <div className="mapa-container">
        <p>Mapa interactivo con los puntos de entrega cercanos.</p>
        <div id="map" style={{ height: '400px', width: '100%' }}></div> {/* Contenedor del mapa con anchura */}
      </div>
    </div>
  );
}

export default Mapa;

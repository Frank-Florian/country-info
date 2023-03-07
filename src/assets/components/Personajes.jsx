import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Personajes() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    async function fetchPersonajes() {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setPersonajes(response.data.results);
    }

    fetchPersonajes();
  }, []);

  const statusColor = (status) => {
    switch (status) {
      case 'Dead':
        return 'red';
      case 'Alive':
        return 'green';
      default:
        return 'gray';
    }
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '25%',
    padding: '10px',
    boxSizing: 'border-box',
  };

  const cardStyle = {
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px',
    width: '100%',
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div style={rowStyle}>
      {personajes.map((personaje) => (
        <div key={personaje.id} style={columnStyle}>
          <div style={cardStyle}>
            <img src={personaje.image} alt={`Imagen de ${personaje.name}`} style={imageStyle} />
            <p>{personaje.name}</p>
            <p style={{ color: statusColor(personaje.status) }}><strong>{personaje.status}</strong></p>
            <p>{personaje.species}</p>
            <p>{personaje.gender}</p>
            <p>{personaje.origin.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Personajes;

// components/templates/Lobby.js
import React, { useState } from 'react';
import './lobby-template.css'; // Asegúrate de importar tus estilos CSS aquí


const Lobby = () => {
  const [alias, setAlias] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con el alias y el color, como enviarlos a un servidor o guardarlos en el estado de la aplicación.
  };

  return (
    <div className="lobby">
      <form onSubmit={handleSubmit}>
        <label htmlFor="alias">Alias:</label>
        <input
          type="text"
          id="alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Lobby;
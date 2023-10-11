import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import './home-page.css';
import Lobby from '../../templates/lobby-Template/lobby-template';

const HomePage = () => {
  useEffect(() => {
    // Muestra una alerta de Swal cuando el componente se monta
    Swal.fire('Bienvenido!', 'Coloca la pantalla horizontal', 'warning');
  }, []);

  return (
    <div className="container">
      <div className='bubbles'>
      <span style={{ "--i": 11 }}></span>
      <span style={{ "--i": 12 }}></span>
      <span style={{ "--i": 24 }}></span>
      <span style={{ "--i": 10 }}></span>
      <span style={{ "--i": 14 }}></span>
      <span style={{ "--i": 23 }}></span>
      <span style={{ "--i": 18 }}></span>
      <span style={{ "--i": 16 }}></span>
      <span style={{ "--i": 19 }}></span>
      <span style={{ "--i": 20 }}></span>
      <span style={{ "--i": 22 }}></span>
      <span style={{ "--i": 25 }}></span>
      <span style={{ "--i": 18 }}></span>
      <span style={{ "--i": 21 }}></span>
      <span style={{ "--i": 15 }}></span>
      <span style={{ "--i": 13 }}></span>
      <span style={{ "--i": 26 }}></span>
      <span style={{ "--i": 32 }}></span>
      <span style={{ "--i": 25 }}></span>
      <span style={{ "--i": 12 }}></span>
      <span style={{ "--i": 16 }}></span>
      <span style={{ "--i": 19 }}></span>
      <span style={{ "--i": 16 }}></span>
      <span style={{ "--i": 20 }}></span>
      <span style={{ "--i": 29 }}></span>
      <span style={{ "--i": 25 }}></span>
      <span style={{ "--i": 23 }}></span>
      <span style={{ "--i": 10 }}></span>
      <span style={{ "--i": 11 }}></span>
      <span style={{ "--i": 14 }}></span>
      <span style={{ "--i": 15 }}></span>
      <span style={{ "--i": 16 }}></span>
      <span style={{ "--i": 18 }}></span>
      <span style={{ "--i": 11 }}></span>
      </div>
      <Lobby />
    </div>
  );
};

export default HomePage;
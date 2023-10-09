// components/page/home/HomePage.js
import React from 'react';
import './home-page.css'; // Asegúrate de importar tus estilos CSS aquí
import Lobby from './../../templates/lobby-Template/lobby-template';

const HomePage = () => {
  return (
    <div className="home-page">
       <h1>Welcome to the home page!</h1>
      <Lobby />
    </div>
  );
};

export default HomePage;
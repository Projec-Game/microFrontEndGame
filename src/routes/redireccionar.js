// Redireccionar.js

import { useEffect } from 'react';
import  useHistory  from 'react-router-dom';

const Redireccionar = () => {
  const history = useHistory();

  useEffect(() => {
    const name = localStorage.getItem('name');
    const color = localStorage.getItem('color');

    if (name && color) {
      // Ambos valores están en el Local Storage, redirige a la nueva página o componente
      history.push('/game-play'); // Reemplaza '/nueva-pagina' con la ruta que desees
    } else {
      // Al menos uno de los valores no está en el Local Storage, puedes redirigir a otra página si lo deseas
      history.push('/home'); // Reemplaza '/formulario' con la ruta del formulario original
    }
  }, [history]);

  return null; // Este componente no renderiza nada visible
};

export default Redireccionar;

import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import "./Lobby-template.css";

const Lobby = () => {
  const navigate = useNavigate(); // Obtiene el objeto de navegación
  const formik = useFormik({
    initialValues: {
      apodo: '',
      color: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.apodo) {
        errors.apodo = 'El apodo es requerido';
      }

      if (!values.color) {
        errors.color = 'El color es requerido';
      }

      return errors;
    },
    onSubmit: (values) => {
      // Guardar los valores en el Local Storage
      localStorage.setItem('name', values.apodo);
      localStorage.setItem('color', values.color);

      // Redirige al usuario a la vista GamePlayTemplate
      navigate('/game-play'); // Ajusta la ruta de acuerdo a tu configuración
    },
  });

  return (
    <div className="game-form">
      <h2>Ingresa al juego</h2>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="apodo">Apodo:</label>
        <input
          type="text"
          id="apodo"
          name="apodo"
          value={formik.values.apodo}
          onChange={formik.handleChange}
        />
        {formik.errors.apodo && <div className="error">{formik.errors.apodo}</div>}

        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formik.values.color}
          onChange={formik.handleChange}
        />
        {formik.errors.color && <div className="error">{formik.errors.color}</div>}

        <button type="submit" disabled={formik.errors.apodo || formik.errors.color}>
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Lobby;






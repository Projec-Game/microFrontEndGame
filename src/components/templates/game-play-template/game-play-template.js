import React, { useState, useEffect } from 'react';
import GameOver from '../game-over-template/game-over-template';
import { Assets } from '../../../assets';
import "./game-play-template.css";
// import Particles from 'particles.js';




 
const obstacleImages = [
  // {Assets.GameIcons.asteroide_icon},
  Assets.GameIcons.asteroide_icon,
  Assets.GameIcons.nebula,
  Assets.GameIcons.ovni
  // 'ruta_imagen_obstaculo_2',
  // 'ruta_imagen_obstaculo_3',
  // Agrega más rutas de imágenes de obstáculos aquí
];

const getRandomObstacleImage = () => {
  // Genera un índice aleatorio para seleccionar una imagen de obstáculo
  const randomIndex = Math.floor(Math.random() * obstacleImages.length);
  return obstacleImages[randomIndex];
};

const Game = () => {
  
  const [playerPosition, setPlayerPosition] = useState({ x: window.innerWidth / 2 - 24, y: window.innerHeight - 105 });
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(true);
  const [maxScore, setMaxScore] = useState(0);
  // const [maxScorePlayer, setMaxScorePlayer] = useState('Jugador Anónimo');
  const obstacleSpeed = 5;
  // const [playerName] = useState(localStorage.getItem('name'));
  const [lives, setLives] = useState(3); // Comenzamos con 3 vidas
  const [lifeImages, setLifeImages] = useState([1, 2, 3]); // Puedes cargar tus imágenes de vidas aquí
  const [isObstacleGenerationPaused, setIsObstacleGenerationPaused] = useState(false);




  useEffect(() => {
    const handleOrientation = (event) => {
      if (isGameRunning) {
        const gamma = event.gamma;
        // Invertimos la dirección basada en el valor de gamma
        const newX = playerPosition.x + gamma * 2;
        const minX = 0;
        const maxX = window.innerWidth - 50;
        const clampedX = Math.min(Math.max(newX, minX), maxX - 50);
        setPlayerPosition((prev) => ({ ...prev, x: clampedX }));
      }
    };
  
    if (isGameRunning) {
      window.addEventListener('deviceorientation', handleOrientation, true);
    }
  
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [isGameRunning, playerPosition]);

  useEffect(() => {
    const obstacleGenerator = setInterval(() => {
      if (isGameRunning && !isObstacleGenerationPaused) {
        const newObstacle = {
          id: Date.now(),
          x: Math.random() * (window.innerWidth - 50),
          y: -50,
          image: getRandomObstacleImage(), // Selección aleatoria de una imagen de obstáculo
        };
        setObstacles((prev) => [...prev, newObstacle]);
      }
    }, 1000);

    const moveObstacles = () => {
      if (isGameRunning) {
        setObstacles((prev) =>
          prev
            .map((obstacle) => ({ ...obstacle, y: obstacle.y + obstacleSpeed }))
            .filter((obstacle) => obstacle.y < window.innerHeight)
        );
      }
    };

    const obstacleMoveInterval = setInterval(moveObstacles, 50);

    return () => {
      clearInterval(obstacleGenerator);
      clearInterval(obstacleMoveInterval);
    };
  }, [isGameRunning, isObstacleGenerationPaused]);

  useEffect(() => {
    // const particleConfig = {
    //   particles: {
    //     number: {
    //       value: 10, // Ajusta la cantidad de partículas
    //     },
    //     color: {
    //       value: '#ff0000', // Ajusta el color de las partículas
    //     },
    //     shape: {
    //       type: 'circle', // Ajusta la forma de las partículas
    //     },
    //     opacity: {
    //       value: 0.5, // Ajusta la opacidad de las partículas
    //     },
    //     size: {
    //       value: 3, // Ajusta el tamaño de las partículas
    //     },
    //   },
    //   interactivity: {
    //     events: {
    //       onhover: {
    //         enable: false,
    //         mode: 'repulse',
    //       },
    //     },
    //   },
    // };
    if (isGameRunning) {
      const checkCollision = () => {
        for (const obstacle of obstacles) {
          if (
            playerPosition.x < obstacle.x + 50 &&
            playerPosition.x + 50 > obstacle.x &&
            playerPosition.y < obstacle.y + 50 &&
            playerPosition.y + 50 > obstacle.y
          ) {
            if (lives > 0) {
              // El jugador colisionó con un obstáculo, eliminamos una vida
              setLives((prev) => prev - 1);
  
              // Eliminamos la imagen de vida correspondiente
              setLifeImages((prev) => prev.slice(0, prev.length - 1));
              
              // Particles.init('collision-particles', particleConfig);
            }
  
            // Si se quedan sin vidas, termina el juego
            if (lives === 1) {
              setIsGameRunning(false);
            }
  
            // Eliminamos el obstáculo
            setObstacles((prev) =>
              prev.filter((ob) => ob.id !== obstacle.id)
            );
          }
        }
      };
  
      checkCollision();
  
      if (isGameRunning) {
        setScore((prev) => prev + 1);
      }
    }
  }, [isGameRunning, obstacles, playerPosition, lives]);

  useEffect(() => {
    if (!isGameRunning) {
      setIsObstacleGenerationPaused(true); // Pausar la generación de obstáculos
      if (score > maxScore) {
        setMaxScore(score);
      }
    }
  }, [isGameRunning, score, maxScore]);

  const resetGame = () => {
    setPlayerPosition({ x: window.innerWidth / 2 - 25, y: window.innerHeight - 105 });
    setObstacles([]);
    setScore(0);
    setLives(3); // Reiniciar las vidas
    setIsGameRunning(true);
    setIsObstacleGenerationPaused(false);
    setLifeImages([1, 2, 3])
  };

  useEffect(() => {
    if (lives === 0) {
      setIsGameRunning(false);
    }
  }, [lives]);

  return (
    <div>
      <div className="space-background">
        {
          Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              className="stars"
              style={{
                '--star-x': Math.random(),
                '--star-y': Math.random(),
              }}
            ></div>
          ))
        }
      </div>
      <div style={{ position: 'relative', height: '100vh' }}>
        <div
          style={{
          position: 'absolute',
          left: `${playerPosition.x}px`,
          top: `${playerPosition.y}px`,
          width: '50px', // Ajusta el ancho según el tamaño de la imagen
          height: '50px', // Ajusta la altura según el tamaño de la imagen
          backgroundImage: `url(${Assets.GameIcons.nave_spacial})`,// Reemplaza 'url_de_la_imagen.gif' con la URL de tu imagen animada
          backgroundSize: 'cover', // Ajusta el tamaño de la imagen según sea necesario
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'white'
          }}
        >
          {/* {playerName} */}
        </div>
        {obstacles.map((obstacle) => (
          <div
          key={obstacle.id}
          style={{
            position: 'absolute',
            left: `${obstacle.x}px`,
            top: `${obstacle.y}px`,
            width: '30px',
            height: '30px',
            backgroundImage: `url(${obstacle.image})`, // Usar la imagen seleccionada
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'white'
          }}
          ></div>
        ))}
        <p style={{ position: 'absolute', top: '10px', left: '10px', color: 'white' }}>
          Score: {score} 
          {/* | Max Score: {maxScore} (Jugador: {playerName}) */}
        </p>
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          {lifeImages.map((image, index) => (
            <img
              key={index}
              src={Assets.SharedIcons.icon_life}
              alt={`Vida ${index + 1}`}
              style={{ width: '30px', height: '30px', marginRight: '5px' }}
            />
          ))}
        </div>
        {/* <div id="collision-particles" style={{ position: 'absolute' }}></div> */}
        {!isGameRunning && lives === 0 && (
          <GameOver 
          onRestart={resetGame}
          score={score}
          maxScore={maxScore}/>
        )}
      </div>
    </div> 
  );
};

export default Game;
import React, { useState, useEffect } from 'react';

const Game = () => {
  
  const [playerPosition, setPlayerPosition] = useState({ x: window.innerWidth / 2 - 25, y: window.innerHeight - 75 });
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(true);
  const [maxScore, setMaxScore] = useState(0);
  // const [maxScorePlayer, setMaxScorePlayer] = useState('Jugador Anónimo');
  const obstacleSpeed = 5;
  const [playerName] = useState(localStorage.getItem('name'));

  useEffect(() => {
    const handleOrientation = (event) => {
      if (isGameRunning) {
        const x = event.beta;
        const newX = playerPosition.x - x * 2;
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
      if (isGameRunning) {
        const newObstacle = { id: Date.now(), x: Math.random() * (window.innerWidth - 50), y: -50 };
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
  }, [isGameRunning]);

  useEffect(() => {
    if (isGameRunning) {
      const checkCollision = () => {
        for (const obstacle of obstacles) {
          if (
            playerPosition.x < obstacle.x + 50 &&
            playerPosition.x + 50 > obstacle.x &&
            playerPosition.y < obstacle.y + 50 &&
            playerPosition.y + 50 > obstacle.y
          ) {
            setIsGameRunning(false);
          }
        }
      };

      checkCollision();

      if (isGameRunning) {
        setScore((prev) => prev + 1);
      }
    }
  }, [isGameRunning, obstacles, playerPosition]);

  useEffect(() => {
    if (!isGameRunning) {
      if (score > maxScore) {
        setMaxScore(score);
        // Puedes pedir al jugador que ingrese su nombre aquí y almacenarlo en maxScorePlayer
        // Por ahora, simplemente estableceremos un valor predeterminado
        // setMaxScorePlayer('Jugador Anónimo');
      }
    }
  }, [isGameRunning, score, maxScore]);

  const resetGame = () => {
    setPlayerPosition({ x: window.innerWidth / 2 - 25, y: window.innerHeight - 75 });
    setObstacles([]);
    setScore(0);
    setIsGameRunning(true);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div
        style={{
        position: 'absolute',
        left: `${playerPosition.x}px`,
        top: `${playerPosition.y}px`,
        width: '100px', // Ajusta el ancho según el tamaño de la imagen
        height: '100px', // Ajusta la altura según el tamaño de la imagen
        backgroundImage: `url(${require('./../../../assets/home/complete-registration/player.gif')})`,// Reemplaza 'url_de_la_imagen.gif' con la URL de tu imagen animada
        backgroundSize: 'cover', // Ajusta el tamaño de la imagen según sea necesario
        backgroundRepeat: 'no-repeat',
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
            width: '50px',
            height: '50px',
            background: 'red',
          }}
        >
          Obstacle
        </div>
      ))}
      <p style={{ position: 'absolute', top: '10px', left: '10px', color: 'white' }}>
        Score: {score} | Max Score: {maxScore} (Jugador: {playerName})
      </p>
      {!isGameRunning && (
        <button onClick={resetGame} style={{ position: 'absolute', top: '50px', left: '10px' }}>
          Reiniciar
        </button>
      )}
    </div>
  );
};

export default Game;

import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../components/pages/home/home-page";
import GamePlayTemplate from "../components/templates/game-play-template/game-play-template";
// import Lobby from "../components/templates/lobby-Template/lobby-template";

const AppRouter = () => {
  return (
    <Routes>

        
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/game-play" component={GamePlayTemplate} /> {/* Actualiza la ruta */}
      {/* <Route path="/lobby" element={<Lobby />} /> */}

      {/* Otras rutas de tu aplicación */}
      {/* <Router>
        <Switch>
            <Route path="/gameplay" component={GamePlayTemplate} /> */}
            {/* Otras rutas */}
        {/* </Switch> */}
      {/* </Router> */}
    </Routes>
    
  );
};

export default AppRouter;
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../components/pages/home/home-page";
import GamePlayTemplate from "../components/templates/game-play-template/game-play-template";
import Lobby from "../components/templates/lobby-Template/lobby-template";
import GameOver from "../components/templates/game-over-template/game-over-template";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/game-play" element={<GamePlayTemplate />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/gameOver" element={<GameOver />} />
    </Routes>
  );
};

export default AppRouter;

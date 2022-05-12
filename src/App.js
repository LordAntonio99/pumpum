import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Animes from "./pages/Animes";
import InfoAnime from "./pages/InfoAnime";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {!user && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/infoAnime" element={<InfoAnime />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;

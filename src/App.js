import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Animes from "./pages/Animes";
import InfoAnime from "./pages/InfoAnime"
import Watch from "./pages/Watch"
import InfoMovie from "./pages/InfoMovie";

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
        <Route path="/movieInfo" element={<InfoMovie />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;

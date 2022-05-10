import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Animes from "./pages/Animes";
<<<<<<< refs/remotes/origin/master
import InfoAnime from "./pages/InfoAnime";
import Watch from "./pages/Watch";
=======
import InfoMovie from "./pages/InfoMovie";
>>>>>>> Movie info page

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
<<<<<<< refs/remotes/origin/master
        <Route path="/watch" element={<Watch />} />
=======
        <Route path="/movieInfo" element={<InfoMovie />} />
>>>>>>> Movie info page
      </Routes>
    </Router>
  );
}

export default App;

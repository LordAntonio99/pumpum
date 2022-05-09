import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

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
        <Route path="/animes" element={<Home />} />
        <Route path="/movies" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EncryptPage from "./pages/EncryptPage";
import DecryptPage from "./pages/DecryptPage";
import "./App.css"

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Criptografar</Link> |{" "}
        <Link to="/decrypt">Descriptografar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<EncryptPage />} />
        <Route path="/decrypt" element={<DecryptPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Empleados from "../components/Empleados";
import Candidatos from "../components/Candidatos";

const LocalRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Candidatos />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/candidato" element={<Candidatos />} />
      </Routes>
    </Router>
  );
};

export default LocalRouter;

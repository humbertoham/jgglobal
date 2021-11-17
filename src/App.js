import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import { GlobalStyle } from "./GlobalStyle";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Empleados from "./components/Empleados";
import Propuesta from "./components/Propuesta";
import Foot from "./components/Foot";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/empleados" element={<Empleados />} />
      <Route path="/propuestadeinversion" element={<Propuesta />} />
    </Routes>
    <Foot />
    <GlobalStyle />
  </Router>
);

export default App;

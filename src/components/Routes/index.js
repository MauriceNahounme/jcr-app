import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Profil from "../../pages/Profil";
import Home from "../../pages/Home";
import Login from "../Authentification/Login";
import AddSaul from "../Ames/AddSaul";

const ProviderRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add_saul" element={<AddSaul />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ProviderRouter;

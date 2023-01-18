import React, { useContext } from "react";
import { uidContext } from "../components/Contexts/AppContext";
import Login from "../components/Authentification/Login";
import Dashboard from "./Dashboard";

const Home = () => {
  const user = useContext(uidContext);

  return <div>{!user ? <Login /> : <Dashboard />}</div>;
};

export default Home;

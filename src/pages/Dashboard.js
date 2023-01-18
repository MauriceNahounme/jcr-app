import React, { useContext } from "react";
import { uidContext } from "../components/Contexts/AppContext";
import "./pages.css";
import Sidebar from "../components/Navigation/Sidebar";
import Topbar from "../components/Navigation/Topbar";
import Ames from "../components/Ames/Ames";
import Login from "../components/Authentification/Login";

const Dashboard = () => {
  const user = useContext(uidContext);

  return (
    <>
      {user ? (
        <div className="dashboard container-fluid col-12">
          <Topbar />
          <div className="row col-12 content-saul">
            <Sidebar />
            <Ames />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Dashboard;

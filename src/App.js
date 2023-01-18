/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { uidContext } from "./components/Contexts/AppContext";
import Routers from "./components/Routes";
import axios from "axios";
import authHeader from "./utils/authHeader";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";
import { getSauls } from "./actions/sauls.actions";

if (localStorage.token) {
  authHeader(localStorage.token);
} else {
  authHeader(false);
}

const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const verifyLogin = async () => {
    axios
      .get("http://localhost:5000/jwt")
      .then((value) => {
        setUser(value.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (user) {
      dispatch(getUser(user));
      dispatch(getSauls(user));
    }
  };

  useEffect(() => {
    verifyLogin();
  }, [user]);

  return (
    <>
      <div>
        <uidContext.Provider value={user}>
          <Routers />
        </uidContext.Provider>
      </div>
    </>
  );
};

export default App;

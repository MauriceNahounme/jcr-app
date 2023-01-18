import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./authentification.css";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import axios from "axios";
import authHeader from "../../utils/authHeader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        authHeader(res.data.token);
        setUser(res.data);
        window.location = "/dashboard";
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <>
      <div className="form-div container-fluid">
        <div className="login-img">
          <img src="./login2.webp" alt="img-login" className="img" />
          {/* <h2 className="text-center mt-5">1 THIMOTHÉE 4:14</h2> */}
        </div>

        <Form className="form-login text-center" onSubmit={handleSubmit}>
          <h1 className="mb-5">
            <strong>Bonjour,</strong> bienvenue sur cette plateforme
          </h1>
          <h1 style={{ color: "#1C34E0" }}>
            <strong>Connectez-vous !</strong>
          </h1>

          <p className="mt-5" style={{ color: "red" }}>
            {error && error}
          </p>

          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3 form-input"
          >
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Mot de passe"
            className="mb-3 form-input"
          >
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>

          <Form.Group className="mb-3 container-fluid btn-submit">
            <NavLink to="/" className="nav-link">
              <p style={{ color: "#1C34E0" }}>Mot de passe oublié ?</p>
            </NavLink>

            <Button type="submit" style={{ padding: "10px" }}>
              Connexion
            </Button>

            <NavLink to="/profil" className="nav-link">
              <p style={{ color: "#1C34E0" }}>S'inscrire</p>
            </NavLink>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Login;

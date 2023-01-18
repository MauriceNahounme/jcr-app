/* eslint-disable react/jsx-no-duplicate-props */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row, FloatingLabel } from "react-bootstrap";

const Signup = () => {
  // const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users/signup", {
        email,
        password,
      })
      .then((res) => {
        navigate("/profil");
      })
      .catch((err) => {
        // setError(err.response.data.message);
        console.log(err);
        throw err;
      });
  };

  return (
    <div className="form-div container-fluid col-12">
      <div className="login-img">
        <img src="./login2.webp" alt="img-login" className="img" />
        {/* <h2 className="text-center mt-5">1 THIMOTHÉE 4:14</h2> */}
      </div>

      <Form className="form-login text-center" onSubmit={handleSubmit}>
        <h1 className="mb-5" style={{ color: "#1C34E0" }}>
          <strong>Inscription</strong>
        </h1>

        <p style={{ color: "red" }}>{error && error}</p>

        <FloatingLabel
          controlId="floatingInput"
          label="Email"
          className="mb-3 form-input"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
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
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Confirmation mot de passe"
          className="mb-3 form-input"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            onBlur={(e) => {
              setPasswordConfirmation(e.target.value);
              passwordConfirmation !== password
                ? setError("Mot de passe non conforme")
                : setError("");
            }}
          />
        </FloatingLabel>

        <Button
          variant="primary"
          type="submit"
          className={error ? "disabled" : "mb-5"}
        >
          S'inscrire
        </Button>
      </Form>
    </div>
  );
};

export default Signup;

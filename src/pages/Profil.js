/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useContext } from "react";
import { uidContext } from "../components/Contexts/AppContext";
import "./pages.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row, FloatingLabel } from "react-bootstrap";
import Dashboard from "./Dashboard";

const Profil = () => {
  const user = useContext(uidContext);
  // const [gender, setGender] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [additionalAddress, setAdditionalAddress] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  // const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/users/`, {
        last_name: lastname,
        first_name: firstname,
        phone,
        birthday,
        nationality,
        num_street: street,
        address,
        additional_address: additionalAddress,
        postal_code: codePostal,
        city,
      })
      .then((res) => {
        setSubmitted(true);
        navigate("/dashboard");
      })
      .catch((err) => {
        // setError(err.response.data.message);
        console.log(err);
        throw err;
      });
  };

  return (
    <>
      {!submitted && !user ? (
        <div className="container-fluid profil col-12">
          {/* <div className="login-img">
        <img src="./login2.webp" alt="img-login" className="img" />
      </div> */}

          <Form
            className="text-center col-11"
            onSubmit={handleSubmit}
            style={{ width: "70%", margin: "auto" }}
          >
            <h1 className="mb-5 mt-5" style={{ color: "#1C34E0" }}>
              <strong>Je complète mon profil</strong>
            </h1>

            <FloatingLabel
              controlId="floatingText"
              label="Nom"
              className="mb-3 form-input"
            >
              <Form.Control
                type="text"
                placeholder="Nom"
                onChange={(e) => setLastname(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingText"
              label="Prénom"
              className="mb-3 form-input"
            >
              <Form.Control
                type="text"
                placeholder="Prénom"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingText"
              label="Date de naissance"
              className="mb-3 form-input"
            >
              <Form.Control
                type="date"
                placeholder="Naissance"
                onChange={(e) => setBirthday(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingText"
              label="Nationalité"
              className="mb-3 form-input"
            >
              <Form.Control
                type="text"
                placeholder="Nationalité"
                onChange={(e) => setNationality(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingText"
              label="Téléphone"
              className="mb-3 form-input"
            >
              <Form.Control
                type="text"
                placeholder="Téléphone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </FloatingLabel>

            <Row>
              <Form.Group as={Col}>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Rue"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Rue"
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col}>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Adresse"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Adresse"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col}>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Complément d'adresse"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Complément"
                    onChange={(e) => setAdditionalAddress(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col}>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="CP"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="CP"
                    onChange={(e) => setCodePostal(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col}>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Ville"
                  className="mb-5"
                >
                  <Form.Control
                    type="text"
                    placeholder="Ville"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Button
              variant="primary"
              type="submit"
              className="mb-5"
              onClick={handleSubmit}
              disabled={
                lastname &&
                firstname &&
                birthday &&
                nationality &&
                phone &&
                street &&
                address &&
                additionalAddress &&
                codePostal &&
                city
                  ? false
                  : true
              }
            >
              S'inscrire
            </Button>
          </Form>
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default Profil;

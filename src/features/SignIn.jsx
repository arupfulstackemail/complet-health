import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import logo from "../assets/Logo/logo-health.png";
import Styled from "./Feature.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    // Dummy authentication logic
    if (email === "admin@example.com" && password === "password123") {
      alert("Login Successful!");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <>
      <div
        className={`vh-100 d-flex flex-column justify-content-center align-items-center p-0 m-0 ${Styled?.loginContainer}`}
      >
        <div className="d-flex justify-content-center align-items-center mb-4">
          <img src={logo} alt="Logo" width="200" />
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <Card className={`p-4 shadow ${Styled?.cardContainer}`}>
            <h3 className="text-center mb-3">Sign In</h3>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className={`w-100 ${Styled?.buttonContainer}`}>
                Login
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;

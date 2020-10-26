import React, { Component, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./login.css";
import { useAuth } from "../Firebase/AuthContext";
import { Link, useHistory, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import SignUp from "./SignUp";

export default function Login() {
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = emailid === "" || password === "";
  const INITIAL_STATE = () => {
    setEmailId("");
    setPassword("");
    setError("");
  };
  let history = useHistory();

  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const { signnow, userType } = useAuth();
  function handlerSubmit(event) {
    event.preventDefault();
    try {
      setError("");

      signnow(emailid, password);

      INITIAL_STATE();
      // (userType==='charity')?history.push('/ForCharities'):history.push('/ForSponsor');
      history.push("/");
    } catch {
      setError("Failed to Sign In");
    }
  }

  return (
    <Container className="CardPadding">
      <Row className="justify-content-md-center mt-4 mb-4">
        <h3>Sign In</h3>
      </Row>
      <Row className="justify-content-md-center">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => {
                setEmailId(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Group>

          <Row className="justify-content-md-center mb-4">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              disabled={isInvalid}
              onClick={handlerSubmit}
            >
              Log In
            </Button>
          </Row>
          <Row className="">
            <p className="text-center my-3">Don't have an account? </p>
            <Nav.Link
              className="text-center my-2"
              href="prettyplease-frontend/#/SignUp"
            >
              Sign up here
            </Nav.Link>
          </Row>
          <Link
            to="passwordReset"
            className="text-blue-500 hover:text-blue-600"
          >
            Forgot Password?
          </Link>
        </Form>
        {error && (
          <Row className="mt-2">
            <p>{error.message}</p>
          </Row>
        )}
      </Row>
    </Container>
  );
}

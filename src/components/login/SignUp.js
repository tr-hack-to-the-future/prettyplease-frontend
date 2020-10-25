import React, { useState } from "react";
import { Container, Row, Form, Button, Card, Alert } from "react-bootstrap";
import "./login.css";

import { useAuth } from "../Firebase/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [usertype, setUserType] = useState("");
  const [imageUrl,setimageUrl] = useState("");
  const [error, setError] = useState("");
  const isInvalid = emailid === "" || password === "" || passwordConfirm === "";
  const INITIAL_STATE = () => {
    setEmailId("");
    setPassword("");
    setPasswordConfirm("");
    setName("");
    setDescription("");
    setUserType("");
    setError("");
  };
  const { signup,signalong} = useAuth();

  let history = useHistory();
  async function handlerSignup(event) {
    if (password !== passwordConfirm) {
      return setError("Passwords dont match");
    }
    event.preventDefault();

    try {
      setError("");

      // await signup(emailid, password);
      await signalong(emailid, password,name, description, usertype,imageUrl);
      // await writeUserData(currentUser.uid, name, description, emailid, usertype,imageUrl)

      INITIAL_STATE();
      history.push("/");
    } catch {
      setError("Failed to load");
    }
  }
  return (
    <Container className="CardPadding">
      <Row className="justify-content-md-center mt-4 mb-4">
        <h4>Sign Up with Pretty Please</h4>
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
          <Form.Group controlId="formPasswordConfirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              onChange={(event) => {
                setPasswordConfirm(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              required
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="usertype">
            <Form.Label>How would you like to get involved</Form.Label>
            <Form.Control as="select"  onChange={(event) => {
                setUserType(event.target.value);
              }}>
              <option>I am a Sponsor</option>
              <option>I am a Fund Raiser/Charity</option>
            </Form.Control>
          </Form.Group>
          <Form.File
            id="img-file"
            label="Upload your image"
            lang="en"
            custom
            
          />

          <Row className="justify-content-md-center mt-4">
            <Button
              variant="primary"
              type="signup"
              size="lg"
              disabled={isInvalid}
              onClick={handlerSignup}
            >
              Sign Up
            </Button>
          </Row>
          {error && (
            <Row>
              <p>{error}</p>
            </Row>
          )}
        </Form>
      </Row>
    </Container>
  );
}

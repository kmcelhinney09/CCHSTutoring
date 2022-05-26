import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUp({ closeForm }) {
  const [signUpForm, setSignUpForm] = useState({});

  function handleFormOnChange() {}
  function handleSignUpSubmit() {}

  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form
        className="rounded p-3 p-sm-4"
        onSubmit={(e) => handleSignUpSubmit(e)}
      >
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={signUpForm}
            onChange={handleFormOnChange}
            name="login_id"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={signUpForm}
            onChange={handleFormOnChange}
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>{" "}
        <Button variant="primary" onClick={closeForm}>Cancel</Button>
      </Form>
    </div>
  );
}

export default SignUp;

import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import SignUp from "./SignUp";
import Login from "./Login";

function Home({ setCurrentUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  function splashScreen() {
    return (
      <Container fluid className="vh-100 d-flex flex-column">
        <Row className=" h-100">
          <Col md={4}>
            <Image
              fluid
              src="https://images.unsplash.com/photo-1600195077077-7c815f540a3d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689"
            />
          </Col>
          <Col>
            <Row className="h-25"></Row>
            <Row>
              <h1 className="text-center">Welcome to CCHS Tutoring</h1>
            </Row>
            <Row>
              <Col md={{ span: 2, offset: 5 }}>
                <Button variant="success" onClick={handleShowLogin}>
                  Login
                </Button>{" "}
                <Button variant="success" onClick={handleShowSignUp}>
                  Sign-Up
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      {splashScreen()}
      <Modal show={showSignUp} onHide={handleCloseSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Sign-Up for CCHS Tutoring</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUp
            closeForm={handleCloseSignUp}
            setCurrentUser={setCurrentUser}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login to CCHS Tutoring</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login closeForm={handleCloseLogin} setCurrentUser={setCurrentUser} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;

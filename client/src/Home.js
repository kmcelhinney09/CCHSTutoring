import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image";
import Modal from 'react-bootstrap/Modal'
import SignUp from "./SignUp";

function Home() {
  const signup = false;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <Button variant="success">Login</Button>{" "}
                <Button variant="success" onClick={handleShow}>Sign-Up</Button>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign-Up for CCHS Tutoring</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUp closeForm={handleClose}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;

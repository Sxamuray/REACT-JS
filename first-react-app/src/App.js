import React from 'react';
import { Badge, Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar className="app-navbar" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold">
              React Checkpoint
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
              <Nav className="ms-auto align-items-lg-center gap-lg-2">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Badge bg="info" text="dark">
                  v1.0
                </Badge>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="py-5">
          <div className="hero-section mb-5">
            <p className="text-uppercase fw-semibold mb-2">First Contact with React</p>
            <h1 className="display-5 fw-bold mb-3">Build beautiful UIs faster</h1>
            <p className="lead mb-4">
              This page combines React components and Bootstrap styling to create a clean,
              responsive layout.
            </p>
            <Button variant="light" className="fw-semibold">
              Explore Components
            </Button>
          </div>

          <Row className="g-4">
            <Col md={4}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <Card.Title className="fw-bold">Creative Layouts</Card.Title>
                  <Card.Text>
                    Design clean sections using Bootstrap grids, containers, and utility classes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <Card.Title className="fw-bold">Reusable Components</Card.Title>
                  <Card.Text>
                    Reuse cards, navbars, and buttons to build pages quickly and consistently.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <Card.Title className="fw-bold">Modern Styling</Card.Title>
                  <Card.Text>
                    Combine custom CSS with Bootstrap themes for an elegant, modern look.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;

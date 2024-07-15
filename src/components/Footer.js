
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-4">
      <Container>
        <Row className="py-2">
          <Col className="text-center">
            &copy; {new Date().getFullYear()} Our Blog. All rights reserved.
          </Col>
        </Row>

      </Container>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../images/reactdeveliopment.jpg';
import image2 from '../images/ecommerce.jpg';
import image3 from '../images/personal.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      <Container className="about-me-section my-5">
        <Row>
          
          <Col md={8}>
            <h2>About Us</h2>
            <p>
            Welcome to our blog! We are a passionate team of three, dedicated to sharing insights, stories, and experiences on various topics. Our mission is to provide valuable content that informs, inspires, and engages our readers.
            </p>
            <Button variant="outline-primary" as={Link} to="/about">Learn More</Button>
          </Col>
        </Row>
      </Container>

      <Container className="recent-posts-section my-5">
        <h2 className="text-center mb-4">Recent Posts</h2>
        <Row>
          <Col md={4}>
            <Card>
            <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Introduction to React Development</Card.Title>
                <Card.Text>
                In today's web development landscape, React has emerged as a powerful JavaScript library for building user interfaces. This blog post introduces React, its key features, and why developers should consider using it.
                </Card.Text>
                <Button variant="primary" as={Link} to="/posts">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>The Impact of E-Commerce on Modern Retail</Card.Title>
                <Card.Text>
                This post explores how e-commerce has revolutionized the retail industry, discussing its advantages, challenges, and future trends. It covers topics like online shopping behavior, market dynamics, and the role of technology.
                </Card.Text>
                <Button variant="primary" as={Link} to="/posts">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Personal Development Tips for Tech Enthusiasts</Card.Title>
                <Card.Text>
                Aspiring tech professionals often face challenges beyond technical skills. This article provides practical tips for personal development, including time management, continuous learning, and maintaining a healthy work-life balance.
                </Card.Text>
                <Button variant="primary" as={Link} to="/posts">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import mohamud from '../images/mohamud.jpg';
import abdulkaadir from '../images/caaqilka.jpeg';
import anisa from '../images/anisa.jpeg';


const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Container>
        <h1 className="text-center my-5">About Us</h1>

        <Row className="mb-5">
          <Col md={4}>
            <Image src={mohamud} roundedCircle fluid className="mb-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
            <h3 className="mt-3">Mohamud Mohamed Gurhan</h3>
            <p>Role: Developer</p>
            <p>
              Mohamud is a passionate developer with experience in building
              web applications using modern technologies like React. He enjoys
              creating user-friendly interfaces and solving complex technical
              challenges.
            </p>
          </Col>
          <Col md={4}>
            <Image src={abdulkaadir} roundedCircle fluid id='caqil' className="mb-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
            <h3 className="mt-3">Abdulkadir Shariif Mohamed</h3>
            <p>Role: Designer</p>
            <p>
              Abdulkadir is a talented designer specializing in creating
              visually appealing designs that enhance user experience. They
              have a keen eye for detail and a passion for innovative design
              concepts.
            </p>
          </Col>
          <Col md={4}>
            <Image src={anisa} roundedCircle fluid className="mb-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
            <h3 className="mt-3">Anisa Mohamed Ali</h3>
            <p>Role: Marketing</p>
            <p>
              Anisa is a skilled marketer with a focus on digital
              strategies. They are adept at leveraging social media and SEO to
              drive engagement and traffic. Their insights help to grow and
              promote the blog effectively.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h2>Mission</h2>
            <p>
              Our mission is to inspire and educate our readers through valuable
              insights, experiences, and stories. We aim to create content that
              empowers personal growth, fosters creativity, and encourages 
              meaningful connections within our community.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h2>Vision</h2>
            <p>
              Our vision is to become a trusted source of information and 
              inspiration for individuals seeking knowledge and personal 
              development. We aspire to expand our reach and impact, 
              continuously innovating and adapting to meet the evolving needs 
              of our audience.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h2>Connect With Us</h2>
            <p>
              Follow us on social media to stay updated with our latest posts
              and announcements. Feel free to reach out to us with your
              feedback, suggestions, or collaboration opportunities.
            </p>
            <ul>
              <li>
                <a href="https://wa.me/0618008736" target="_blank" rel="noopener noreferrer">Whatsapp</a>
              </li>
              <li>
                <a href="https://www.facebook.com/moha.yare.7399/" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mohamoud-gurhan-77809b224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">linkedin</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsPage;

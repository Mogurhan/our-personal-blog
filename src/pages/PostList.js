import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import image1 from '../images/reactdeveliopment.jpg';
import image2 from '../images/ecommerce.jpg';
import image3 from '../images/personal.jpg';
import image4 from '../images/socialmedia.jpg';
import image5 from '../images/ai.jpg';
import image6 from '../images/crypto.jpg';
import image7 from '../images/uiux.jpg';
import image8 from '../images/collaboration.jpg';


const blogPosts = [
  {
    id: 1,
    title: 'Introduction to React Development',
    description: "In today's web development landscape, React has emerged as a powerful JavaScript library for building user interfaces. This blog post introduces React, its key features, and why developers should consider using it.",
    image: image1,
  },
  {
    id: 2,
    title: 'The Impact of E-Commerce on Modern Retail',
    description: 'This post explores how e-commerce has revolutionized the retail industry, discussing its advantages, challenges, and future trends. It covers topics like online shopping behavior, market dynamics, and the role of technology.',
    image: image2,
  },
  {
    id: 3,
    title: 'Personal Development Tips for Tech Enthusiasts',
    description: 'Aspiring tech professionals often face challenges beyond technical skills. This article provides practical tips for personal development, including time management, continuous learning, and maintaining a healthy work-life balance.',
    image: image3,
  },
  {
    id: 4,
    title: 'The Evolution of Social Media Platforms',
    description: 'From Facebook to TikTok, this post traces the evolution of social media platforms, examining their impact on communication, marketing, and societal trends. It also discusses emerging platforms and the future of social networking.',
    image: image4,
  },{
    id: 5,
    title: 'Introduction to Artificial Intelligence',
    description: 'Artificial Intelligence (AI) is reshaping industries worldwide. This blog post offers a beginner-friendly introduction to AI, covering its applications, ethical considerations, and potential impact on various sectors.',
    image: image5,
  },{
    id: 6,
    title: 'Exploring the World of Cryptocurrency',
    description: 'Cryptocurrency and blockchain technology have gained significant attention. This article explains the basics of cryptocurrency, its underlying technology, popular cryptocurrencies like Bitcoin and Ethereum, and the future of digital currencies.',
    image: image6,
  },{
    id: 7,
    title: 'The Role of UX Design in Web Development',
    description: 'User Experience (UX) design plays a crucial role in creating intuitive and engaging websites. This post explores UX design principles, usability testing methods, and how UX impacts user satisfaction and business success.',
    image: image7,
  },{
    id: 8,
    title: 'Tips for Effective Remote Collaboration',
    description: 'Remote work has become more prevalent. This blog post offers tips for successful remote collaboration, including communication strategies, project management tools, and maintaining team cohesion across different time zones.',
    image: image8,
  },
];

const BlogsPage = () => {
  return (
    <div className="blogs-page">
      <Container className="my-5">
        <h2 className="text-center mb-4">Blog Posts</h2>
        <Row>
          {blogPosts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={post.image} alt={post.title} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogsPage;

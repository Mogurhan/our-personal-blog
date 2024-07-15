import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, including image upload
    console.log({ title, content, image });
    // Reset form fields after submission
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Create a New Post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="postTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="postContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter post content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="postImage">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Post
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePostPage;

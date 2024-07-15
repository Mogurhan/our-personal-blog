import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className="list-group-item">
      <h4>{post.title}</h4>
      <p>{post.content.slice(0, 100)}...</p>
      <Link to={`/posts/${post.id}`} className="btn btn-primary btn-sm">Read more</Link>
    </div>
  );
};

export default Post;

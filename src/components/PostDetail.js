import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/api';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getPostById(id);
      setPost(postData);
    };

    fetchPost();
  }, [id]);

  return (
    post ? (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p className="card-text">{post.content}</p>
          
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default PostDetail;

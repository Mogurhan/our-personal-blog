const mockPosts = [
    { id: 1, title: 'First Post', content: 'Lorem ipsum...', author: 'John Doe' },
    { id: 2, title: 'Second Post', content: 'Lorem ipsum...', author: 'Jane Smith' },
    // More mock posts
  ];
  
  export const getAllPosts = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockPosts;
  };
  
  export const getPostById = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockPosts.find(post => post.id === parseInt(id));
  };
  
  export const createPost = async (newPost) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    newPost.id = mockPosts.length + 1;
    mockPosts.push(newPost);
    return newPost;
  };
  
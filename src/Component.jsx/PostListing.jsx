
import React from 'react';

const PostListing = ({ posts }) => {
  return (
    <div>
    
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostListing;

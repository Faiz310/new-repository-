// App.js
import React from 'react';
import Details from './Details';
import Footer from './Footer';
import Navbar from './Navbar';
import PostListing from './PostListing';
import './index.css'; 

const App = () => {
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
  ];

  return (
    <div>
      <Navbar />
      <Details title="Welcome to My Website" content="This is a sample website." />
      <PostListing posts={posts} />
      <Footer />
    </div>
  );
};

export default App;



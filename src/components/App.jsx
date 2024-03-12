import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';
import styles from './App.module.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Router>
      <div className={styles.app}>
        <nav className={styles.nav}>
          <Link to="/">домой</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<PostList posts={posts} />}
          />
          <Route
            path="/posts/:postId"
            element={<Post posts={posts} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

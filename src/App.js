import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PostList from './pages/PostList';
import CreatePost from './pages/CreatePost';






function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path='/login' element={<Login/>}/>
            
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Routes, Route,  BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Queries from './components/Queries';
import Feedback from './components/Feedback';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Feed from './components/Feed';
import Singlefeed from './components/Singlefeed';

function App() {
  return (
    
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/queries" element={<Queries />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/singlefeed" element={<Singlefeed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;

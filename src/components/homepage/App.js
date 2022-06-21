import React from 'react'
import Feed from './Feed'
import '../css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Room from './Room';

export default function App() {
  return (
    <Router>
      <div className='main-container'>
        <Routes>
          <Route exact path="/" element={<Feed />}></Route>
          <Route exact path="/room" element={<Room />}></Route>
        </Routes>
      </div>
    </Router>
    
  )
}

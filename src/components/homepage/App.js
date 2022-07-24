import React from 'react'
import Feed from './Feed'
import '../css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Room from './Room';
import ContactHost from './Room Listing/ContactHost';

export default function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Feed />}></Route>
          <Route exact path="/room/:id" element={<Room/>}></Route>
          <Route exact path="/contact_host/:id/" element={<ContactHost />}></Route>
        </Routes>
      </>
    </Router>
    
  )
}

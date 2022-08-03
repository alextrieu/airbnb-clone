import React from 'react'
import Feed from './Main/Feed'
import '../css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Room from './Main/Room';
import ContactHost from './Room Listing/ContactHost';

export default function App() {
  
  const [title, setTitle] = React.useState("Vacation Homes & Condo Rentals - Airbnb");

  React.useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Feed title={title} />}></Route>
          <Route exact path="/room/:id" element={<Room/>}></Route>
          <Route exact path="/contact_host/:id/" element={<ContactHost />}></Route>
        </Routes>
      </>
    </Router>
    
  )
}

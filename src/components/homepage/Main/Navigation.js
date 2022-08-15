import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <>
      <nav className='navigation-bar'>
        <div className='logo' onClick={() => navigate('/')}>
          <img src='/logo.png' alt="logo"></img>
        </div>
        <div className='filter'>
            <div>Anywhere</div>
            <div>Any week</div>
            <div>Add guests</div>
            <div><i className="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <div className='profile-setting'>
            <div className='host-setting'>
              Become a Host
            </div>
            <div className='language-setting'>
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className='navbar'>
              <i className="fa-solid fa-bars"></i>
              <i className="fa-regular fa-user"></i>
            </div>
        </div>
      </nav>
      <nav className='mobile-search-bar-container'>
        <div className='mobile-search-bar-wrapper'>
          <div className='mobile-search-bar'>
            <div className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></div>
            <div className='mobile-search-options-container'>
              <div className='mobile-search-destination'>Where to?</div>
              <div className='mobile-search-options'>
                <ul>
                  <li><a href="#">Anywhere</a></li>
                  <li><a href="#">Any week</a></li>
                  <li><a href="#">Add guests</a></li>
                </ul>
              </div>
            </div>
            <div className='filter-icon'><i className="fa-solid fa-sliders"></i></div>
          </div>
        </div>
      </nav>
    </>
  )
}

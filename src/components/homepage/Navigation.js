import React from 'react'

export default function Navigation() {
  return (
    <nav>
        <div className='logo'>
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
  )
}

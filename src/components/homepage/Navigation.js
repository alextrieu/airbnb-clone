import React from 'react'

export default function Navigation() {
  return (
    <nav>
        <div className='logo'>
          <img src='/logo.png'></img>
        </div>
        <div className='filter'>
            <div>Anywhere</div>
            <div>Any week</div>
            <div>Add guests</div>
            <div><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <div className='profile-setting'>
            <div className='host-setting'>
              Become a Host
            </div>
            <div className='language-setting'>
              <i class="fa-solid fa-globe"></i>
            </div>
            <div className='navbar'>
              <i class="fa-solid fa-bars"></i>
              <i class="fa-regular fa-user"></i>
            </div>
        </div>
    </nav>
  )
}

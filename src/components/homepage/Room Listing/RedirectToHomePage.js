import React from 'react'

export default function RedirectToHomePage() {
  return (
    <div className='redirect-container'>
        <div className='redirect-to-home'>
            <a href="https://www.airbnb.com"><i class="fa-solid fa-chevron-left redirect-left-arrow-icon"></i>Homes • Airbnb</a>
        </div>
        <div className='redirect-icons'>
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
            <i class="fa-regular fa-heart"></i>
        </div>
    </div>
  )
}

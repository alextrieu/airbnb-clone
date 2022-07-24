import React from 'react'

export default function CheckInDetails() {
  return (
    <>
        <div className='check-in-info'>
            <div className='check-in-container'>
                <span><i className="fa-solid fa-door-open fa-icon"></i></span>
                <div className='check-in-details'>
                    <p>Self check-in</p>
                    <p>Check yourself in with the lockbox.</p>
                </div>
            </div>
            <div className='check-in-container'>
                <span><i className="fa-solid fa-key fa-icon"></i></span>
                <div className='check-in-details'>
                    <p>Great check-in experience</p>
                    <p>100% of recent guests gave the check-in process a 5-star rating.</p>
                </div>
            </div>
            <div className='check-in-container'>
                <span><i className="fa-solid fa-calendar-days fa-icon"></i></span>
                <div className='check-in-details'>
                    <p>Free cancellation before Nov 5.</p>
                </div>
            </div>
        </div>
        <hr></hr>
    </>
  )
}

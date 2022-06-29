import React from 'react'

export default function Sidebar(props) {
    const {
        price,
        rating,
        reviews
    } = props.data
    
  return (
    <>
        <div className='sidebar-container'>
            <div className='sidebar-header'>
              <p><span className='sidebar-price'>${price}</span> night</p>
              <div className='sidebar-reviews'>
                <ul>
                  <li><i className="fa-solid fa-star fa-sm"></i> {rating}</li>
                  <li>{reviews.length} reviews</li>
                </ul>
              </div>
            </div> {/* end sidebar-header */}

            <div className="sidebar-dates">
              <div className='sidebar-available-dates'>
                <div className='sidebar-check-in'>
                  <p>check-in</p>
                  <p>8/12/2022</p>
                </div>
                <div className='sidebar-check-out'>
                  <p>check-out</p>
                  <p>8/15/2022</p>
                </div>
              </div>
              <div className="sidebar-guests">
                <p>guests</p>
                <p>1 guest</p>
              </div>
            </div>
            <div className='sidebar-book-listing'>
              <button>Reserve</button>
              <p>You won't be charged yet</p>
            </div>
            <div className='sidebar-listing-calculator'>
              <div className='sidebar-night'>
                <p>{price} x 2 nights</p>
                <p>${price * 2}</p>
              </div>
              <div className='sidebar-cleaning'>
                <p>Cleaning Fee</p>
                <p>$224</p>
              </div>
              <div className='sidebar-service-fee'>
                <p>Service Fee</p>
                <p>$128</p>
              </div>
              <hr></hr>
              <div className='sidebar-total'>
                <p>Total before taxes</p>
                <p>$1,762</p>
              </div>
            </div>
        </div> {/* end sidebar-container */}
    </>
  )
}

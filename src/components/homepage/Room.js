import React from 'react'
import { useLocation } from "react-router-dom";
import Navigation from './Navigation.js';
import { v4 as uuidv4 } from 'uuid';

export default function Room() {
  const location = useLocation()

  const {
    id,
    title,
    city,
    reviews,
    state, 
    country,
    distance,
    date,
    category,
    host,
    price,
    rating,
    accomodates,
    img
  } = location.state.props.listing

  const imgElements = img.map((image) => {
    return (
      <img key={uuidv4()} src={image.url} className='listing-gallery-images'/>
    )
  })

  return (
    <>
      <Navigation />
      <div>{title}</div>
      <div className='listing-information'>
        <div className='listing-stats'>
          <div>{rating}<i className="fa-solid fa-star fa-sm"></i></div>
          <div>{reviews.length} reviews</div>
          <div><i className="fa-solid fa-square-check"></i></div>
          <div><p>Superhost</p></div>
          <div>{city}, {state}, {country}</div>
        </div>
        <div className='listing-social-plugins'>
          <div>
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
            <span>Share</span>
          </div>
          <div>
            <i className="fa-regular fa-heart"></i>
            <span>Save</span>
          </div>
        </div>
      </div> { /* end listing-information */ }
      <div className='listing-gallery'>
        {imgElements}
      </div>
      <div className='listing-description'>
        <div className='accommodation-container'> {/* 60% width */}
          <div className='accommodation-details'>
            <div className='accommodation-header'>
              <p>Entire {category} hosted by {host}</p>
            </div>
            <div className='accommodation-specs'>
              <ul>
                <li>{accomodates.guests} guests</li>
                <li>{accomodates.bedrooms} bedrooms</li>
                <li>{accomodates.beds} beds</li>
                <li>{accomodates.baths} baths</li>
              </ul>
            </div>
          </div>
          <div className='host-profile-picture'>
            <img src={"https://a0.muscache.com/im/pictures/user/4a227ebe-74c0-4180-881a-f4db35adb1a0.jpg?im_w=240"}/>
          </div>
        </div> 
        <div className='modal-container'>
          <div className='modal-header'>
            <p><span className='modal-price'>${price}</span> night</p>
            <div className='modal-reviews'>
              <ul>
                <li><i className="fa-solid fa-star fa-sm"></i> {rating}</li>
                <li>{reviews.length} reviews</li>
              </ul>
            </div>
          </div> {/* end modal-header */}

          <div className="modal-dates">
            <div className='modal-available-dates'>
              <div className='modal-check-in'>
                <p>check-in</p>
                <p>8/12/2022</p>
              </div>
              <div className='modal-check-out'>
                <p>check-out</p>
                <p>8/15/2022</p>
              </div>
            </div>
            <div class="modal-guests">
              <p>guests</p>
              <p>1 guest</p>
            </div>
          </div>
          <div className='modal-book-listing'>
            <button>Reserve</button>
            <p>You won't be charged yet</p>
          </div>

          <div className='modal-listing-calculator'>
            <div className='modal-night'>
              <p>{price} x 2 nights</p>
              <p>${price * 2}</p>
            </div>
            <div className='modal-cleaning'>
              <p>Cleaning Fee</p>
              <p>$224</p>
            </div>
            <div className='modal-service-fee'>
              <p>Service Fee</p>
              <p>$128</p>
            </div>
            <hr></hr>
            <div className='modal-total'>
              <p>Total before taxes</p>
              <p>$1,037</p>
            </div>
          </div>
        </div> {/* end modal-container */}
      </div> {/* end listing-description */}
    </>
  )
}

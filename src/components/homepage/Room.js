import React from 'react'
import { useLocation } from "react-router-dom";
import Navigation from './Navigation.js';

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
    price,
    rating,
    img
  } = location.state.props.listing

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
      </div>
    </>
  )
}

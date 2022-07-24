import React from 'react'

export default function ListingInfo(props) {
    const {
        rating,
        reviews,
        city,
        state,
        country
    } = props.data

  return (
    <>
        <div className='listing-information'>
            <ul className='listing-stats'>
              <li>{rating}<i className="fa-solid fa-star fa-sm"></i></li>
              <li>{reviews.length} reviews</li>
              <li><i className="fa-solid fa-square-check"></i> Superhost</li>
              <li><span>{city}, {state}, {country}</span></li>
            </ul>
        <div className='listing-social-plugins'>
          <div>
            <i className="fa-solid fa-arrow-up-from-bracket social-icons"></i>
            <span>Share</span>
          </div>
          <div>
            <i className="fa-regular fa-heart social-icons"></i>
            <span>Save</span>
          </div>
        </div>
      </div> { /* end listing-information */ }
    </>
  )
}

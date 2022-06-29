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
    </>
  )
}

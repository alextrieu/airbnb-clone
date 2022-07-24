import React from 'react'
import ReviewModal from './Modals/ReviewModal'

export default function ListingInfo(props) {
  const {
      rating,
      reviews,
      city,
      state,
      country,
      superHost
  } = props.data

  const [showModal, setShowModal] = React.useState(false)

  function openModal() {
    setShowModal(true)
  }

  return (
    <>
        <div className='listing-information'>
            <ul className='listing-stats'>
              <li>{rating}<i className="fa-solid fa-star fa-sm"></i></li>
              <li onClick={openModal}><span>{reviews.length} reviews</span></li>
              {showModal ? <ReviewModal setShowModal={setShowModal} reviews={reviews} /> : null}
              {superHost? <li><i className="fa-solid fa-square-check"></i> Superhost</li> : null}
              <li><span>{city}, {state}, {country}</span></li>
            </ul>
        <div className='listing-social-plugins'>
          <div>
            <i className="fa-solid fa-arrow-up-from-bracket fa-icon"></i>
            <span>Share</span>
          </div>
          <div>
            <i className="fa-regular fa-heart fa-icon"></i>
            <span>Save</span>
          </div>
        </div>
      </div> { /* end listing-information */ }
    </>
  )
}

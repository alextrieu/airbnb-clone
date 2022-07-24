import React, { useState } from 'react'
import ListingDescriptionModal from './Modals/ListingDescriptionModal'

export default function ListingDescription() {
  const [showModal, setShowModal] = useState(false)

  function openModal() {
    setShowModal(true)
  }

  return (
    <>
        <div className='listing-description-container'>
            <p>Collins Lakehouse</p>
            <p>Life's fast-paced grind seems to slip away as you walk through the door of this pet-friendly Lake Chelan getaway. Sitting on the shores of Lake Chelan, nature surrounds you outside as the premium amenities like a private hot tub and dock.</p>
            <a onClick={openModal}>Show more</a>
            {showModal ? <ListingDescriptionModal setShowModal={setShowModal}/> : null}
        </div>
        <hr></hr>
    </>
  )
}

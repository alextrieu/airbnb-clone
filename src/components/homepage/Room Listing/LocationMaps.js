import React from 'react'
import CustomMap from './CustomMap'
import LocationMapsModal from './Modals/LocationMapsModal'

export default function LocationMaps( { listing }) {
  const [showModal, setShowModal] = React.useState(false)

  function openModal() {
    setShowModal(true)
  }

  const style = {
    width: '80%',
    height: '400px'  
  }

  return (
    <>
      <div className='location-title'>
        <h1>Where you'll be</h1>
        <p>{listing.city}, {listing.state}, {listing.country}</p>
      </div>
      <div className='map-container'>
          <CustomMap style={style}/>
      </div>
      <p onClick ={openModal} className='review-show-more-link location-display-more'>Show More<i className="fa-solid fa-greater-than"></i></p>
      {showModal ? <LocationMapsModal setShowModal={setShowModal}/> : null}
      <hr></hr>
    </>
  )
}

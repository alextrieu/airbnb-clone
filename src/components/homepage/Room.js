import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import Navigation from './Navigation.js';
import CheckInDetails from './Room Listing/CheckInDetails.js';
import AirCover from './Room Listing/AirCover.js';
import ListingDescription from './Room Listing/ListingDescription.js';
import Sidebar from './Room Listing/Sidebar.js';
import ListingInfo from './Room Listing/ListingInfo.js';
import ListingGalleryModal from './Room Listing/ListingGalleryModal.js';
import { v4 as uuidv4 } from 'uuid';
import ListingHeader from './Room Listing/ListingHeader.js';

export default function Room() {
  const location = useLocation()

  const { id, title, city, reviews, state, country, distance, date, category, host, price, rating, accomodates, img } = location.state.props.listing

  const [showGalleryModal, setShowGalleryModal] = useState(false)

  function openModal() {
    setShowGalleryModal(true)
  }

  const imgElements = img.map((image) => {
    return (
      <img key={uuidv4()} src={image.url} className='listing-gallery-images'/>
    )
  })

  return (
    <>
      <Navigation />
      <div>{title}</div>
      <ListingInfo data={location.state.props.listing}/>

      <div className='listing-gallery'>
        {imgElements}
        <div className='expand-listing-gallery' onClick={openModal}>
          <i className="fa-solid fa-grip-vertical"></i> 
          <span> Show all photos</span>
        </div>
        {showGalleryModal ? <ListingGalleryModal setShowGalleryModal={setShowGalleryModal} img={img} /> : null}
      </div>

      {/* New Start */}
      <div className='listing-wrapper'>
        <div className='left-side-content'>
          <ListingHeader data={location.state.props.listing}/>
          <hr></hr>
          {/* Insert Component */}
          <CheckInDetails />
          <AirCover />
          <ListingDescription />
        </div> {/* Left Side*/}

        <div className='right-sidebar'>
          <Sidebar data={location.state.props.listing}/>            
        </div> {/* Right Side Sidebar */}

      </div>
    </>
  )
}

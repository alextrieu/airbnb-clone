import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import Navigation from './Navigation.js';
import CheckInDetails from './Room Listing/CheckInDetails.js';
import AirCover from './Room Listing/AirCover.js';
import ListingDescription from './Room Listing/ListingDescription.js';
import Sidebar from './Room Listing/Sidebar.js';
import ListingInfo from './Room Listing/ListingInfo.js';
import ListingGalleryModal from './Room Listing/ListingGalleryModal.js';
import SleepingArrangements from './Room Listing/SleepingArrangements.js';
import Review from './Room Listing/Review.js';
import Amenities from './Room Listing/Amenities.js';
import { v4 as uuidv4 } from 'uuid';
import ListingHeader from './Room Listing/ListingHeader.js';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, DateRange } from 'react-date-range';
import { addDays, setDate } from 'date-fns';



export default function Room() {

  // Calendar
  
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection'
    }
  ]);

  var options = { year: 'numeric', month: 'long', day: 'numeric' };

  // start date 
  const startDate = dates[0].startDate.toLocaleDateString("en-US", options); 

  // end date 
  const endDate = dates[0].endDate.toLocaleDateString("en-US", options); 

  const [differenceInDays, setdifferenceInDays] = React.useState()

  useEffect(() => {
    if (endDate) {
      setdifferenceInDays((dates[0].endDate.getTime() - dates[0].startDate.getTime()) / (1000 * 3600 * 24))
    } 
  }, [endDate])

  const location = useLocation()

  const { id, title, city, reviews, state, country, distance, date, category, host, price, rating, amenities, accomodates, img, additionalImages } = location.state.props.listing

  const [showGalleryModal, setShowGalleryModal] = useState(false)

  function openModal() {
    setShowGalleryModal(true)
  }

  const imgElements = img.map((image, index, {length}) => {
    if (index + 1 === length) {
      return (
        <div className='listing-gallery-images-container' key={uuidv4()}>
          <img key={uuidv4()} src={image.url} className='listing-gallery-images'/>
          <div className='expand-listing-gallery' onClick={openModal}>
            <i className="fa-solid fa-grip-vertical"></i> 
            <span> Show all photos</span>
          </div>
        </div>
      )
    } else {
      return (
        <img key={uuidv4()} src={image.url} className='listing-gallery-images'/>
      )
    }
  })

  return (
    <>
      <Navigation />
      <div>{title}</div>
      <ListingInfo data={location.state.props.listing}/>

      <div className='listing-gallery'>
        {imgElements}
        {showGalleryModal ? <ListingGalleryModal setShowGalleryModal={setShowGalleryModal} img={img} additionalImages={additionalImages}/> : null}
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
          <SleepingArrangements />
          <Amenities data={location.state.props.listing}/>
          <div className='date-range-container'>
            <h2>{startDate === endDate ? "Select checkout date" : differenceInDays + " nights in " + city}</h2>
            <p>{startDate === endDate ? "Minimum stay: 2 nights" : startDate + " - " + endDate}</p>
            <DateRangePicker
              onChange={item => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={dates}
              direction="horizontal"
              showDateDisplay={false}
              staticRanges={[]}
              inputRanges={[]}
            />
          </div>{/* end date-range-container */}
        </div> {/* Left Side*/}

        <div className='right-sidebar'>
          <Sidebar data={location.state.props.listing}/>            
        </div> {/* Right Side Sidebar */}

      </div>
      <hr></hr>
      <div>
        <Review reviews={reviews} listing={location.state.props.listing} />
      </div>
      {/* <ListingDescription />
      <ListingDescription /> */}
    </>
  )
}

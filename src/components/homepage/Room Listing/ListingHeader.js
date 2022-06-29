import React from 'react'

export default function ListingHeader(props) {
    const {
        category,
        host,
        accomodates
    } = props.data
  return (
    <>
        <div className='listing-header'>
            <div>
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
    </>
  )
}

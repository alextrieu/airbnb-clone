import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function ListingHeader(props) {
    const {
        category,
        host,
        accomodates,
        hostPP
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
                  <li key={uuidv4()}>{accomodates.guests} guests</li>
                  <li key={uuidv4()}>{accomodates.bedrooms} bedrooms</li>
                  <li key={uuidv4()}>{accomodates.beds} beds</li>
                  <li key={uuidv4()}>{accomodates.baths} baths</li>
                </ul>
              </div>
            </div>
            <div className='host-profile-picture'>
              <img src={hostPP}/>
            </div>
          </div>
    </>
  )
}

import React from 'react'
import { useMediaQuery } from 'react-responsive';

export default function HealthSafety({ showModal }) {
  const isMobile = useMediaQuery({ query: `(max-width: 1150px)` });
  return (
    <>
      <h4>Health & Safety</h4>
      {
        isMobile ? 
        <>
          <div>Airbnb's COVID-19 safety practices apply</div>
        </>
        : 
        <>
          <div><i class="fa-solid fa-shield-heart fa-icon"></i>Airbnb's COVID-19 safety practices apply</div>
          <div>
            <i class="fa-solid fa-triangle-exclamation fa-icon"></i>
            <span>Security camera/recording device </span>
            {showModal ? "— Airbnb prohibits cameras and recording devices in private spaces like bedrooms or bathrooms " : null}
            <a target="_blank" href="https://www.airbnb.ca/help/article/3061/use-of-cameras-and-recording-devices">Show More</a>
          </div>
          <div><i class="fa-solid fa-bell fa-icon"></i>Carbon monoxide alarm</div>
          <div><i class="fa-solid fa-bell fa-icon"></i>Smoke alarm</div>
        </>
      }
    </>
  )
}



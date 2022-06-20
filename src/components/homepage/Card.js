import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

export default function Card(props) {
  const {
      city,
      state, 
      distance,
      date,
      price,
      rating,
      img
  } = props.listing
  return (
    <div className='card-container'>
      <div className='card-image'>
        <SimpleImageSlider
          width={300}
          height={290}
          images={img}
          showBullets={true}
          showNavs={true}
          navMargin={1}
          navSize={30}
        />
      </div>
      <div className='card-description'>
        <div className='card-title'>
          <span className='card-location'>{city}, {state}</span>
          <span className='card-rating'>{rating}<i className="fa-solid fa-star fa-sm"></i></span>
        </div>
        <div className='card-distance-date'>
          <p>{distance}</p>
          <p>{date}</p>
        </div>
        <div className='card-price'>
          <p><span>${price}</span> night</p>
        </div>
      </div>
    </div>
  )
}

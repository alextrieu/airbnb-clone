import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from "react-router-dom";

export default function Card(props) {

  const {
      id,
      city,
      state, 
      distance,
      date,
      price,
      rating,
      img
  } = props.listing

  const navigate = useNavigate();

  const imageStyle = {
    backgroundColor: 'none'
  }

  const [activeImg, setActiveImg] = React.useState(false)

  const onNavigationPageClick = (e) => {
    e.preventDefault();

    navigate('/room/' + id, { 
      state: { props } })
  }

  return (
    <div className='card-container' onMouseEnter={() => setActiveImg(true)} onMouseLeave={() => setActiveImg(false)}>
          <div className='card-favourite'>
            <i className="fa-solid fa-heart"></i>
          </div>
        <div className='card-image'>
          <SimpleImageSlider
            width={150}
            height={287}
            images={img}
            showBullets={true}
            showNavs={activeImg}
            navMargin={1}
            navSize={30}
            style={imageStyle}
            slideDuration={0.6}
          />
          <div className='card-overlay'></div>
        </div>

        <div className='card-description' onClick={onNavigationPageClick}>
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

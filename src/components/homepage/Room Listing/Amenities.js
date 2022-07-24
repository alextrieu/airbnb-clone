import React from 'react'
import AmenitiesModal from './Modals/AmenitiesModal'

export default function Amenities(props) {
  const [showModal, setShowModal] = React.useState(false)

  function openModal() {
    setShowModal(true)
  }
  return (
    <div className='amenities-main-wrapper'>  
        <h2 className='amenities-title'>What this place offers</h2>
        <div className='amenities-container'>
            <div className='amenities-grid'>
                <div className='amenities-grid-item'><i className="fa-solid fa-leaf fa-icon"></i> Garden View</div>
                <div className='amenities-grid-item remove'><i className="fa-solid fa-water fa-icon"></i> Lake view</div>
                <div className='amenities-grid-item'><i className="fa-solid fa-umbrella-beach fa-icon"></i> Beach access – Beachfront</div>
                <div className='amenities-grid-item remove'><i className="fa-solid fa-utensils fa-icon"></i> Kitchen</div>
                <div className='amenities-grid-item'><i className="fa-solid fa-wifi fa-icon"></i> Wifi</div>

                <div className='amenities-grid-item remove'><i className="fa-solid fa-building fa-icon"></i> Dedicated workspace</div>
                <div className='amenities-grid-item'><i className="fa-solid fa-car-side fa-icon"></i> Free parking on premises</div>
                <div className='amenities-grid-item remove'><i className="fa-solid fa-water-ladder fa-icon"></i> Private outdoor pool</div>
                <div className='amenities-grid-item'><i className="fa-solid fa-hot-tub-person fa-icon"></i> Private hot tub</div>
                <div className='amenities-grid-item remove'><i className="fa-solid fa-video fa-icon"></i> Security cameras on property</div>
            </div>
        </div>
        <button className='amenities-btn-modal' onClick={openModal}>Show all amenities</button>
        {showModal ? <AmenitiesModal setShowModal={setShowModal} props={props}/> : null}
        <hr></hr>
    </div>
  )
}

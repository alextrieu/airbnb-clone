import React from 'react'
import AmenitiesModal from './Modals/AmenitiesModal'

export default function Amenities(props) {
  const [showModal, setShowModal] = React.useState(false)

  function openModal() {
    setShowModal(true)
  }
  return (
    <>  
        <h2 className='amenities-title'>What this place offers</h2>
        <div className='amenities-container'>
            <div className='amenities-grid'>
                <div className='amenities-grid-item'><i className="fa-solid fa-leaf amenities-icon"></i> Garden View</div>
                <div className='amenities-grid-item remove'><i className="fa-solid fa-water amenities-icon"></i> Lake view</div>
                <div className='amenities-grid-item'><i className="fa-solid fa-umbrella-beach amenities-icon"></i> Beach access – Beachfront</div>
                <div className='amenities-grid-item remove'><i className="fa-solid fa-utensils amenities-icon"></i> Kitchen</div>
                <div className='amenities-grid-item'><i className="fa-solid fa-wifi amenities-icon"></i> Wifi</div>

                <div className='amenities-grid-item remove'><i className="fa-solid fa-building amenities-icon"></i> Dedicated workspace</div>
                <div className='amenities-grid-item'><i className="fa-solid fa-car-side amenities-icon"></i> Free parking on premises</div>
                <div className='amenities-grid-item remove'><i className="fa-solid fa-water-ladder amenities-icon"></i> Private outdoor pool</div>
                <div className='amenities-grid-item'><i className="fa-solid fa-hot-tub-person amenities-icon"></i> Private hot tub</div>
                <div className='amenities-grid-item remove'><i className="fa-solid fa-video amenities-icon"></i> Security cameras on property</div>
            </div>
        </div>
        <button className='amenities-btn-modal' onClick={openModal}>Show all amenities</button>
        {showModal ? <AmenitiesModal setShowModal={setShowModal} props={props}/> : null}
        <hr></hr>
    </>
  )
}

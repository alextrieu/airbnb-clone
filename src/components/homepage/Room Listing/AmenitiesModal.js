import React, { useRef } from 'react';
import ReactDom from 'react-dom';

export default function AmenitiesModal({ setShowModal }) {
    const modalRef = useRef()

    function closeModal(e) {
        if (e.target === modalRef.current) {
            setShowModal(false)
        }
    }

    return ReactDom.createPortal(
        <div className="amenities-modal-container" ref={modalRef} onClick={(e) => closeModal(e)}>
          <div className="amenities-modal">
            <h2 className='amenities-modal-title'>What this place offers</h2>

            <div className='amenities-list'>
                <h3 className='amenities-list-title'>Scenic views</h3>
                <div className='amenities-list-item'>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Garden view</span>
                    <hr></hr>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Lake view</span>
                    <hr></hr>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Mountain view</span>
                    <hr></hr>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Pool view</span>
                    <hr></hr>
                </div>
            </div>

            <div className='amenities-list'>
                <h3 className='amenities-list-title'>Scenic views</h3>
                <div className='amenities-list-item'>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Garden view</span>
                    <hr></hr>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Lake view</span>
                    <hr></hr>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Mountain view</span>
                    <hr></hr>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Pool view</span>
                    <hr></hr>
                </div>
            </div>

            <div className='amenities-list'>
                <h3 className='amenities-list-title'>Scenic views</h3>
                <div className='amenities-list-item'>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Garden view</span>
                    <hr></hr>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Lake view</span>
                    <hr></hr>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Mountain view</span>
                    <hr></hr>
                    <span><i class="fa-solid fa-leaf amenities-list-icon"></i> Pool view</span>
                    <hr></hr>
                </div>
            </div>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>,
        document.getElementById("portal")
      );
}

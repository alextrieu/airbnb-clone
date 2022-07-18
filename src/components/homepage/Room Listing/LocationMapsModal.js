import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import CustomMap from './CustomMap';

export default function LocationMapsModal({ setShowModal }) {
    const modalRef = useRef()

    function closeModal(e) {
        if (e.target === modalRef.current) {
            setShowModal(false)
        }
    }

    const style = {
        width: '60%',
        height: '400px'
    }

    return ReactDom.createPortal(
        <div className="location-modal-container" ref={modalRef} onClick={(e) => closeModal(e)}>
          <div className="location-modal">
            <div className='location-content'>
                <div className='location-info'>
                    <h1>Where you'll be</h1>
                    <p>Getting around</p>
                    <p>4WD/Traction May Be Required In Winter</p>
                </div>
                <div className='modal-map'>
                    <CustomMap style={style}/>
                </div>
            </div>
            <button onClick={() => setShowModal(false)}><i className="fa-solid fa-less-than"></i></button>
          </div>{/* end location-modal */}
        </div>,
        document.getElementById("portal")
      );
}

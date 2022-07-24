import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import HealthSafety from '../Rules/HealthSafety';

export default function HealthSafetyModal({ setShowModal, showModal }) {
    const modalRef = useRef()

    function closeModal(e) {
        if (e.target === modalRef.current) {
            setShowModal(false)
        }
    }

    return ReactDom.createPortal(
        <div className="hs-modal-container" ref={modalRef} onClick={(e) => closeModal(e)}>
          <div className="modal">
            <h2>Health & Safety</h2>
            <HealthSafety showModal={showModal}/>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>,
        document.getElementById("portal")
      );
}

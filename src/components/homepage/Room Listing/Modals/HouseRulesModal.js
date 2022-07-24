import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import HouseRules from '../Rules/HouseRules';
import AdditionalRules from '../Rules/AdditionalRules';

export default function HouseRulesModal({ setShowModal }) {
    const modalRef = useRef()

    function closeModal(e) {
        if (e.target === modalRef.current) {
            setShowModal(false)
        }
    }

    return ReactDom.createPortal(
        <div className="host-modal-container" ref={modalRef} onClick={(e) => closeModal(e)}>
          <div className="modal">
            <div className='host-rules-modal'>
                <HouseRules />
                <h4>Additional rules</h4>
                <AdditionalRules />
            </div>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>,
        document.getElementById("portal")
      );
}

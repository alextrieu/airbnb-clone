import React, { useRef } from 'react';
import ReactDom from 'react-dom';

export default function CancellationModal({ setShowModal }) {
    const modalRef = useRef()

    function closeModal(e) {
        if (e.target === modalRef.current) {
            setShowModal(false)
        }
    }

    return ReactDom.createPortal(
        <div className="cancel-modal-container" ref={modalRef} onClick={(e) => closeModal(e)}>
          <div className="modal">
            <div className='cancellation-container'>
                <h1>Cancellation Policy</h1>
                <p>Before you book, make sure you're comfortable with this Host's cancellation policy. Keep in mind that Airbnb's Extenuating Circumstances policy doesn't cover cancellations due to illness or travel disruptions caused by COVID-19.</p>
                <h3>Cancel by</h3>
                <div className='check-in-dates'>
                    <div>
                        <h4>Aug 16</h4>
                        <p>4:00 pm</p>
                    </div>
                    <div className='cancellation-policy'>
                        <p>Full refund: Get back 100% of what you paid.</p>
                    </div>
                </div>
                <hr></hr>
                <div className='check-out-dates'>
                    <div>
                        <h4>Aug 22</h4>
                        <p>4:00 pm</p>
                        <p>(check-in)</p>
                    </div>
                    <div className='cancellation-policy'>
                        <p>Partial refund: Get back 50% of every night but the first one. No refund of the first night or the service fee.</p>
                    </div>
                </div>
                <hr></hr>
                <a className="cancellation-policy-link" href="https://www.airbnb.ca/help/article/149/find-the-cancellation-policy-for-your-stay" target="_blank">Learn more about cancellation policies</a>
            </div>
            
            <button onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>,
        document.getElementById("portal")
      );
}

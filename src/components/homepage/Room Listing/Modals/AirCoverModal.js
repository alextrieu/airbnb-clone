import React, { useRef } from 'react';
import ReactDom from 'react-dom';

export default function Modal({ setShowModal }) {
    const modalRef = useRef()

    function closeModal(e) {
        if (e.target === modalRef.current) {
            setShowModal(false)
        }
    }

    return ReactDom.createPortal(
        <div className="modal-container" ref={modalRef} onClick={(e) => closeModal(e)}>
          <div className="modal">
            <div className='modal-header'>
                <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"/>
                <p>AirCover is comprehensive protection included for free with every booking.</p>
            </div>
            <hr></hr>
            <div className='modal-grid'>
                <div className='modal-grid-items'>
                    <h3>Booking Protection Guarantee</h3>
                    <p>In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home, or we’ll refund you.</p>
                </div>
                <div className='modal-grid-items'>
                    <h3>Check-In Guarantee</h3>
                    <p>If you can’t check into your home and the Host cannot resolve the issue, we’ll find you a similar or better home for the length of your original stay, or we’ll refund you.</p>
                </div>
                <div className='modal-grid-items'>
                    <h3>Get-What-You-Booked Guarantee</h3>
                    <p>If at any time during your stay you find your listing isn't as advertised—for example, the refrigerator stops working and your Host can’t easily fix it, or it has fewer bedrooms than listed—you'll have three days to report it and we’ll find you a similar or better home, or we’ll refund you.</p>
                </div>
                <div className='modal-grid-items'>
                    <h3>24-hour Safety Line</h3>
                    <p>If you ever feel unsafe, you’ll get priority access to specially-trained safety agents, day or night.</p>
                </div>
            </div>
            <span className='modal-footer'>Find complete details on how AirCover protects your booking in our <a target="_blank" href="https://www.airbnb.com/help/article/3218">Help Center</a></span>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>,
        document.getElementById("portal")
      );
}

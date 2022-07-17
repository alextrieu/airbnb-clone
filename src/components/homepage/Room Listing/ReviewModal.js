import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Modal({ setShowModal, reviews }) {
    const modalRef = useRef()

    function closeModal(e) {
        if (e.target === modalRef.current) {
            setShowModal(false)
        }
    }


    const customerReviewElements = reviews.map((review) => {
        return (
        <div className='modal-testimonial-box' key={uuidv4()}>
            <div className='modal-review-testimonial-box-heading'>
              <div className='modal-customer-profile'>
                <div className='modal-customer-profile-pic'>
                  <img src={review.profilePic}></img>
                </div>
                <div className='modal-customer-name-date'>
                  <p>{review.id}</p>
                  <p>{review.date}</p>
                </div>
              </div>
            </div>
  
            <div className='modal-testimonial-box-body'>
              <div>
                <p>{review.comment}</p>
              </div>
            </div>
        </div>
        )
    
    })

    return ReactDom.createPortal(
        <div className="review-modal-container" ref={modalRef} onClick={(e) => closeModal(e)}>
          <div className="modal">
            <div className='modal-listing-review'>
                4.10 - 21 reviews
            </div>
            <div className='modal-customer-reviews'>
            <form action="/action_page.php">
                <div className="input-container">
                    <input type="search" id="review-search" name="review-search" placeholder='Search Reviews'></input>
                    <i className="fa-solid fa-magnifying-glass modal-search-icon"></i>
                </div>
            </form>

                {customerReviewElements}
            </div>
            {/* {customerReviewElements} */}
            <button onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>,
        document.getElementById("portal")
      );
}

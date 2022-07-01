import React, { useRef } from "react";
import ReactDom from "react-dom";
import { v4 as uuidv4 } from 'uuid';

export default function ListingGalleryModal({ setShowGalleryModal, img, additionalImages }) {
  const imgElements = img.map((image) => {
      return (
        <img key={uuidv4()} src={image.url} className='modal-images'/>
      )
  })

  const [isAdditionalImages, setisAdditionalImages] = React.useState(additionalImages)
  
  let modalImages;
  
  if (isAdditionalImages) {
    modalImages = additionalImages.map((image) => {
      return (
        <img key={uuidv4()} src={image.url} className='modal-images'/>
      )
    })
  }
    
    const modalRef = useRef()

    function closeModal(e) {
        if (e.target === modalRef.current) {
            setShowGalleryModal(false);
        }
    }
    return ReactDom.createPortal(
        <div className="gallery-modal-container" ref={modalRef} onClick={closeModal}>
          <div className="gallery-modal">
            <div className="gallery-content-container">
                <div className="gallery-content">
                    {imgElements}
                    {modalImages}
                </div>
            </div>
            <i className="fa-solid fa-arrow-left-long" onClick={() => setShowGalleryModal(false)}></i>
          </div>
        </div>,
        document.getElementById("portal")
      );
}

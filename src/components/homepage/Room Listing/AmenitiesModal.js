import React, { useCallback, useRef } from 'react';
import ReactDom from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

export default function AmenitiesModal({ setShowModal, props}) {
    const scenicViews = props.data.amenities[0].scenicViews
    
    const [listOfScenicViews, setlistOfScenicViews] = React.useState(scenicViews)

    const GetIconClassNames = useCallback((view) => {
        switch (view) {
            case "Garden view": 
                return "fa-solid fa-umbrella-beach";
            case "Lake view": 
                return 'fa-solid fa-water';
            case "Mountain view":
                return "fa-solid fa-wifi";
            case "Pool view":
                return "fa-solid fa-video";

        }
    }, [listOfScenicViews])

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
                <div className='amenities-list-item' key={uuidv4()}>
                    {listOfScenicViews.map(view => (
                        <>
                        <span><i className={GetIconClassNames(view) + " amenities-list-icon"}></i> {view}</span>
                        <hr></hr>
                        </>
                    ))}
                </div>
            </div>

            <div className='amenities-list'>
                <h3 className='amenities-list-title'>Scenic views</h3>
                <div className='amenities-list-item'>
                    {/* {viewElements} */}
                </div>
            </div>

            <div className='amenities-list'>
                <h3 className='amenities-list-title'>Scenic views</h3>
                <div className='amenities-list-item'>
                    {/* {viewElements} */}
                </div>
            </div>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>,
        document.getElementById("portal")
      );
}

import React, { useRef } from 'react';
import ReactDom from 'react-dom';

export default function ListingDescriptionModal({ setShowModal }) {
    const modalRef = useRef()

    function closeModal(e) {
        if (e.target === modalRef.current) {
            setShowModal(false)
        }
    }

    return ReactDom.createPortal(
        <div className="ld-modal-container" ref={modalRef} onClick={(e) => closeModal(e)}>
          <div className="ld-modal">
            <div className='ld-content'>
                <h1 className="ld-main-header">About this space</h1>
                <p className="ld-description">Alert: Our two luxury rentals have more availability than Airbnb shows due to it blocking days. Find us online to see our full availability.</p>
                <p className="ld-description">Located at Hood Canal Resort in Union, WA, this home is built on the beach and displays stunning views of Hood Canal, the Olympics & wildlife. The home is spacious, bright, modern, and very comfortable.</p>
                <p className="ld-description">Enjoy a private hot tub, BBQ, outdoor fireplace (wood not included), Cali King bed, high speed Wi-Fi, board/card games, a private beach to explore & more.</p>

                <h3>The space</h3>
                <p className="ld-description">There is no other property on Hood Canal that offers the same combination of amazing views, sunsets, comfort, amenities and proximity to Alderbrook Resort. It also has a private hot tub.</p>
                <p className="ld-description">You are literally on the beach with the water within a few feet of the windows; it feels like you are on a houseboat.</p>
                <p className="ld-description">Pet policy: Pets are allowed with our approval. We don't charge a pet fee, but ask that pets are counted as "guests" instead of "pets."</p>

                <h3>Guest access</h3>
                <ul className='ld-guest-access'>
                    <li>California King bed</li>
                    <li>Private hot tub</li>
                    <li>Gas BBQ</li>
                    <li>Fully equipped kitchen</li>
                    <li>Work space</li>
                    <li>High speed Wi-Fi</li>
                    <li>Cable TV, Netflix, Amazon Prime, Disney+ and HBO</li>
                    <li>Alexa system</li>
                    <li> 2 paddle boards (shared)</li>
                    <li>2 kayaks (shared)</li>
                </ul>

                <h3>Other things to note</h3>
                <p className="ld-description">This home is ideal for up to 4 people.</p>
                <p className="ld-description">Pet policy: Pets are allowed with the host's approval and are counted as "guests" instead of "pets". For this property, any guest over 4 comes with an additional fee per night.</p>
                <p className="ld-description">The indoors is child safe (baby gate is available at the top of the stairs) whereas the outdoors is safe for older children with supervision.</p>
                <p className="ld-description">The kitchen is fully stocked and we provide salt, pepper, olive oil, various seasonings, coffee, creamer and sugar, plastic wrap, aluminum foil, baking sheet; a large selection of utensils, pots and pans; blender, toaster, cutting boards, knives, ice machine, convection oven, and full sized appliances,</p>
            </div>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>{/* end ld-modal */}
        </div>,
        document.getElementById("portal")
      );
}

import React, { useState } from 'react'
import AirCoverModal from './AirCoverModal'

export default function () {
  const [showModal, setShowModal] = useState(false)

  function openModal() {
    setShowModal(true)
  }

  return (
    <>
      <div className='air-cover-container'>
        <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"/>
        <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
        <a onClick={openModal}>Learn more</a>
        {showModal ? <AirCoverModal setShowModal={setShowModal}/> : null}
      </div>
      <hr></hr>
    </>
  )
}

import React from 'react'
import HouseRulesModal from './Modals/HouseRulesModal'
import CancellationModal from './Modals/CancellationModal'
import HealthSafetyModal from './Modals/HealthSafetyModal'
import HouseRules from './Rules/HouseRules'
import HealthSafety from './Rules/HealthSafety'

export default function HostRules() {
  const [showModal, setShowModal] = React.useState({
      houseRules: false,
      cancellation: false,
      healthSafety: false
  })

  function openModal(arg) {
    setShowModal({
        ...showModal,
        [arg]: !showModal[arg]
    })
  }

  return (
    <>
        <h3 className='host-rules-title'>Things to know</h3>
        <div className='host-rules-container'> 
            <div className='host-rules'>
                <HouseRules />
                <p onClick={() => openModal('houseRules')} className='review-show-more-link'>Show More<i className="fa-solid fa-greater-than"></i></p>
                {showModal.houseRules ? <HouseRulesModal setShowModal={setShowModal}/> : null}
            </div>
            <div className='host-rules'>
                <h4>Health & Safety</h4>
                <HealthSafety/>
                <p onClick={() => openModal('healthSafety')} className='review-show-more-link'>Show More<i className="fa-solid fa-greater-than"></i></p>
                {showModal.healthSafety ? <HealthSafetyModal setShowModal={setShowModal} showModal={showModal.healthSafety}/> : null}           
            </div>
            <div className='host-rules'>
                <h4>Cancellation policy</h4>
                <p>Free cancellation before Aug 17</p>
                <p>Review the Host’s full cancellation policy, which applies even if you cancel for illness or disruptions caused by COVID-19.</p>
                <p onClick={() => openModal('cancellation')} className='review-show-more-link'>Show More<i className="fa-solid fa-greater-than"></i></p>
                {showModal.cancellation ? <CancellationModal setShowModal={setShowModal}/> : null}                </div>
        </div>
    </>
  )
}

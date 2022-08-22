import React from 'react'
import { useMediaQuery } from 'react-responsive';

export default function HouseRules() {
  const isMobile = useMediaQuery({ query: `(max-width: 1150px)` });
  return (
    <>
    <h4 className='house-rules-title'>House rules</h4>
    {
      isMobile ? <div>Check-in: After 4:00 p.m.</div> :
    <>
      <div><i class="fa-solid fa-clock fa-icon"></i>Check-in: After 4:00 p.m.</div>
      <div><i class="fa-solid fa-door-closed fa-icon"></i>Self check-in with lockbox</div>
      <div><i class="fa-solid fa-ban-smoking fa-icon"></i>No smoking</div>
      <div><i class="fa-solid fa-paw fa-icon"></i>No pets</div>
      <div><i class="fa-solid fa-microphone-slash fa-icon"></i>No parties or events</div> 
    </>
    }
    </>
  )
}

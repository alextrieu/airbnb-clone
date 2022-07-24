import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from '../Navigation';
import Sidebar from './Sidebar';

export default function ContactHost() {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { data } = state;

    return (
    <>
        <Navigation />
        <div className='contact-host-container-width'>
            <div className='navigate-back'>
                <i className="fa-solid fa-less-than" onClick={() => navigate(-1)}></i>
            </div>
            <main className='host-main-container'>
            <div className='host-container'>
                <div className='host-title'>
                    <div className='host-info'>
                        <p>Contact {data.host}</p>
                        <p>Typically responds within an hour</p>
                    </div>
                    <div className='host-logo'>
                        <img src={data.hostPP}></img>
                    </div>
                </div>
                <hr></hr>
                <div className='host-traveller-container'>
                    <div className='host-traveller-info'>
                        <h2>Most travellers ask about</h2>
                    </div>
                    <div className='host-traveller-info'>
                        <h4 className='host-traveller-info-styling'>Getting there</h4>
                        <ul>
                            <li>Free parking on the premises</li>
                            <li>Check-in time for this home starts at 4:00 p.m. and checkout is at 10:00 a.m..</li>
                        </ul>
                    </div>
                    <div className='host-traveller-info'>
                        <h4 className='host-traveller-info-styling'>House details and rules</h4>
                        <ul>
                            <li>No smoking. No parties or events. No pets</li>
                        </ul>
                    </div>
                    <div className='host-traveller-info'>
                        <h4 className='host-traveller-info-styling'>Price and availability</h4>
                        <ul>
                            <li>{data.host}'s home is available from Aug. 22 - 26. Book soon.</li>
                            <li>Cancel up to 5 days before check-in and get a full refund. After that, cancel before check-in and get a 50% refund, minus the first night and service fee.</li>
                        </ul>
                    </div>
                    <hr></hr>
                    <div className='host-question-container'>
                        <div>
                            <h4>Still have questions? Message the host</h4>
                        </div>
                        <div className='host-question-text-area'>
                            <textarea></textarea>
                        </div>
                        <div className='host-question-btn'>
                            <button>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar data={data}/>
        </main>
        </div>
    </>
  )
}

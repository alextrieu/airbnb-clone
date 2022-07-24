import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

export default function HostInfo({ data }) {
    const [verification, setVerification] = React.useState(data.idVerification)
    const navigate = useNavigate();

  return (
    <>
        <div className='testimonial-box-heading'>
          <div className='customer-profile'>
            <div className='customer-profile-pic'>
              <img src={data.hostPP}></img>
            </div>
            <div className='customer-name-date'>
              <p>Hosted by {data.host}</p>
              <p>Joined in {data.dateJoined.month} {data.dateJoined.year}</p>
            </div>
          </div>
        </div>

        <div className='host-info-container'>
            <div className='host-left-side-container'>
                <div className="host-records">
                    <p><i className="fa-solid fa-star fa-icon"></i> {data.reviews.length} Reviews</p>
                    {
                        verification ? <p><i className="fa-regular fa-circle-check fa-icon"></i> Identity verified</p> : null
                    }
                </div>
                <div>
                    <p>{data.host}</p>
                    <p>Home management</p>
                </div>
                <div>
                    <p>Vacasa unlocks the possibilities of how we enjoy vacation homes. We take care of managing our homeowners’ vacation houses so they can have peace of mind (and their home when they want to). And our guests book vacations confidently knowing they’re going to find exactly what they’re looking for without any surprises.</p>
                </div>
            </div>

            <div className='host-right-side-container'>
                <div>
                    <span>Languages: </span>  
                    { 
                        data.languages.map((language) => {
                            return <span key={uuidv4()} className='host-languages'>{language}</span>
                        })
                    }
                </div>
                <div>
                    <p>Response rate: 96%</p>
                </div>
                <div>
                    <p>Response time: within an hour </p>
                </div>
                <div className='host-contact'>
                    <button className='host-contact-btn' onClick={() => navigate('/contact_host/' + data.id, { state: { data } })}>Contact Host</button>
                </div>
                <div className='host-warning'>
                <i className="fa-solid fa-ribbon"></i><p>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
                </div>

            </div>
        </div>
        <hr></hr>
    </>
  )
}

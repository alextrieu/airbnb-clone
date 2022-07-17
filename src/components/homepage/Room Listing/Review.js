import React, { useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ReviewModal from './ReviewModal';

export default function Review({ reviews, listing }) {
  const [customerFeedback, setCustomerFeedback] = React.useState(reviews[0].rating)

  const [showModal, setShowModal] = React.useState(false)

  function openModal() {
    setShowModal(true)
  }

  let sum = []; 
  let sumOfRating = 0;
  let averageRating = 0;
  let numberOfReviews = 0;

  if (customerFeedback) {
    reviews.forEach(function(item) {
      item.rating.forEach(function(rating) {
        let values = Object.values(rating)
        sum.push(values)
      })
    })

    sumOfRating = sum.flat().reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
  
    averageRating = (Math.round((Math.round((sumOfRating/36) * 100) / 100) * 10) / 10).toFixed(2)
  
    numberOfReviews = reviews.length;
  }

  const countLetters = useCallback((str) => {
    return str.trim().split(/\s+/).length;
  })
  
  const testimonialElements = reviews.map((review) => {

    let lettersInTestimonial = countLetters(review.comment)

    const displayShowMore = lettersInTestimonial > 30

    return (
      <div className='testimonial-box' key={uuidv4()}>
          <div className='testimonial-box-heading'>
            <div className='customer-profile'>
              <div className='customer-profile-pic'>
                <img src={review.profilePic}></img>
              </div>
              <div className='customer-name-date'>
                <p>{review.id}</p>
                <p>{review.date}</p>
              </div>
            </div>
          </div>

          <div className='testimonial-box-body'>
            <div className='testimonial-comment'>
              <p>{review.comment}</p>
            </div>
            
            {
              displayShowMore ? 
            <div className='testimonial-comment-modal'>
              <p onClick={openModal} className='review-show-more-link'>Show More<i className="fa-solid fa-greater-than"></i></p>
              {showModal ? <ReviewModal setShowModal={setShowModal} reviews={reviews}/> : null}
            </div> : 
            null
            }
              
            
          </div>
        </div>
    )
  })


  
  return (
    <div className='review-container'>
      <div className='review-title'>
        <span><i className="fa-solid fa-star"></i>{averageRating}</span>
        &bull;
        <p>{numberOfReviews} reviews</p>
      </div>

      <div className='review-rating-container'> {/* Grid container */}
        <div className='review-rating-cleanliness'> {/* Contains both text + container */}
          <div className='review-rating-cleanliness-title'>
            <p>Cleanliness</p>
          </div>

          <div className='review-rating-bar-container'> {/* Contains both rating bar + rating value */}
          <div className='review-rating-bar-wrapper'>
            <div className='review-rating-border'>
                <div className='review-rating-bar'></div>
            </div>
          </div>
            <div> {/* Rating Value*/}
              <p>4.2</p>
            </div>
          </div> {/* end of review-rating-bar-container */}

        </div> {/* end of review-rating-cleanliness */}

        <div className='review-rating-cleanliness'> {/* Contains both text + container */}
          <div className='review-rating-cleanliness-title'>
            <p>Cleanliness</p>
          </div>

          <div className='review-rating-bar-container'> {/* Contains both rating bar + rating value */}
            <div className='review-rating-bar-wrapper'>
              <div className='review-rating-border'>
                  <div className='review-rating-bar'></div>
              </div>
            </div>
            <div> {/* Rating Value*/}
              <p>4.2</p>
            </div>
          </div> {/* end of review-rating-bar-container */}

        </div> {/* end of review-rating-cleanliness */}

        <div className='review-rating-cleanliness'> {/* Contains both text + container */}
          <div className='review-rating-cleanliness-title'>
            <p>Cleanliness</p>
          </div>

          <div className='review-rating-bar-container'> {/* Contains both rating bar + rating value */}
            <div className='review-rating-bar-wrapper'>
              <div className='review-rating-border'>
                  <div className='review-rating-bar'></div>
              </div>
            </div>
            <div> {/* Rating Value*/}
              <p>4.2</p>
            </div>
          </div> {/* end of review-rating-bar-container */}

        </div> {/* end of review-rating-cleanliness */}

        <div className='review-rating-cleanliness'> {/* Contains both text + container */}
          <div className='review-rating-cleanliness-title'>
            <p>Cleanliness</p>
          </div>

          <div className='review-rating-bar-container'> {/* Contains both rating bar + rating value */}
            <div className='review-rating-bar-wrapper'>
              <div className='review-rating-border'>
                  <div className='review-rating-bar'></div>
              </div>
            </div>
            <div> {/* Rating Value*/}
              <p>4.2</p>
            </div>
          </div> {/* end of review-rating-bar-container */}

        </div> {/* end of review-rating-cleanliness */}

        <div className='review-rating-cleanliness'> {/* Contains both text + container */}
          <div className='review-rating-cleanliness-title'>
            <p>Cleanliness</p>
          </div>

          <div className='review-rating-bar-container'> {/* Contains both rating bar + rating value */}
            <div className='review-rating-bar-wrapper'>
              <div className='review-rating-border'>
                  <div className='review-rating-bar'></div>
              </div>
            </div>
            <div> {/* Rating Value*/}
              <p>4.2</p>
            </div>
          </div> {/* end of review-rating-bar-container */}

        </div> {/* end of review-rating-cleanliness */}

        <div className='review-rating-cleanliness'> {/* Contains both text + container */}
          <div className='review-rating-cleanliness-title'>
            <p>Cleanliness</p>
          </div>

          <div className='review-rating-bar-container'> {/* Contains both rating bar + rating value */}
            <div className='review-rating-bar-wrapper'>
              <div className='review-rating-border'>
                  <div className='review-rating-bar'></div>
              </div>
            </div>
            <div> {/* Rating Value*/}
              <p>4.2</p>
            </div>
          </div> {/* end of review-rating-bar-container */}

        </div> {/* end of review-rating-cleanliness */}
      </div> {/* review-rating-container */}

      <div className='testimonial-box-container'>
        {testimonialElements}
        <button className='display-modal-reviews' onClick={openModal}>Show all {numberOfReviews} reviews</button>
      </div>
      <hr></hr>
    </div>
  )
}

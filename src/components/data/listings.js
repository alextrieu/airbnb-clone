import { v4 as uuidv4 } from 'uuid';
export const listings = [
    {  
      id: uuidv4(),
      title: 'Upscale lakefront house with stunning views & dock - spacious interior with fireplace',
      city: 'Chelan',
      reviews: [
        {
          id: "Alexander",
          profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          date: "June 2022",
          rating: [
            {
              cleanliness: 4.2,
              communication: 4.4,
              checkIn: 4.9,
              accuracy: 4.1,
              location: 4.8,
              value: 4.2
            }
          ],
          comment: "Big, clean house in great location. Had everything we needed and communication was fast. Parking is really limited for a house with that capacity and checkout was pretty early, but otherwise it was a great weekend getaway"
        },
        {
          id: "Rawan",
          profilePic: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
          date: "July 2022",
          rating: [
            {
              cleanliness: 4.4,
              communication: 4.4,
              checkIn: 4.9,
              accuracy: 4.1,
              location: 4.8,
              value: 4.1
            }
          ],
          comment: "This is the 2nd time I stay with Vacasa. Great location, gorgeous view and spacious house. The only reason I didn’t give 5 star rating is the cleanliness in beddings and bathroom. Sent pictures to the host, but we love the staff and janitor who came to check on us and clean our place at check out. Super nice guy!"
        },
        {
          id: "Kateryna",
          profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
          date: "January 2022",
          rating: [
            {
              cleanliness: 4.1,
              communication: 4.4,
              checkIn: 4.9,
              accuracy: 4.6,
              location: 4.8,
              value: 3.1
            }
          ],
          comment: "Very disappointed in the quality and accuracy of this property, at least for the price we paid. For starters, we got in late and it was very chilly however the thermostat was behind a locked box where we couldn’t adjust the temperature in the house so we had to sleep in it very cold that night. After messaging someone came by the next day and removed it but it made me question why did they put it on in the first place then? Next it was lacking some amenities that are usually pretty typical. Paper towels being the biggest thing! We had to go out and buy paper towels to bring cause they didn’t provide any. They didn’t have any blankets around so when sitting in the cold house we had to carry out the comforters to the couch. None of the fireplaces work from what I could tell. There was no instruction for anything… how to turn on the fireplace, what dock is part of it or not, where the dumpster is, etc. Also I would say one of the main sells of this house is the windows, however half of the blinds are broken so we couldn’t even open them up to enjoy the views on the water. I tried to take a bath in the master and all of the blinds in that corner were broken. With that in mind, the shower heads were awful in every bathroom and did not provide for a comfortable bathing experience at all. I think this house has a lot of potential to be a great getaway to enjoy but many updates need to be made to the property for me to rate it as such."
        },
        {
          id: "Christian",
          profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          date: "February 2022",
          rating: [
            {
              cleanliness: 4.7,
              communication: 4.4,
              checkIn: 4.9,
              accuracy: 4.1,
              location: 3.8,
              value: 4.1
            }
          ],
          comment: "The views were wonderful, and we loved the various decks and spent a lot of time on them! I was disappointed in the cleanliness of the home."
        },
        {
          id: "Liz",
          profilePic: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
          date: "March 2022",
          rating: [
            {
              cleanliness: 4.9,
              communication: 4.4,
              checkIn: 4.9,
              accuracy: 4.1,
              location: 4.8,
              value: 4.1
            }
          ],
          comment: "Beautiful home with amazing views! We enjoyed our stay and hope to be back soon :)"
        },
        {
          id: "Tom",
          profilePic: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
          date: "April 2022",
          rating: [
            {
              cleanliness: 4.0,
              communication: 4.4,
              checkIn: 4.9,
              accuracy: 4.1,
              location: 4.8,
              value: 4.1
            }
          ],
          comment: "We really enjoyed our stay. The house is clean and very stylish, enough space for everyone. The view from living room is beautiful"
        },
        {
          id: "Mike",
          profilePic: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          date: "May 2022",
          rating: [
            {
              cleanliness: 4.0,
              communication: 4.4,
              checkIn: 4.9,
              accuracy: 4.1,
              location: 4.8,
              value: 4.1
            }
          ],
          comment: "The dock they advertise in the first few pictures isn’t theirs it’s the neighbor properties. The tub/tap water was brown and the maintenance people said it would go away. we fixed a broken toilet. The food all table is broken."
        }
      ],
      state: 'Washington',
      country: 'United States',
      distance: '100 miles away',
      date: 'Aug 21 - 26',
      dateJoined: {
        month: "January",
        date: "21",
        year: "2017"
      },
      hostPP: 'https://a0.muscache.com/im/pictures/user/4a227ebe-74c0-4180-881a-f4db35adb1a0.jpg?im_w=240',
      category: 'home',
      host: 'Vacasa Washington',
      idVerification: true,
      superHost: true,
      languages: ["Nederlands", "English", "Français", "Deutsch", "Italiano", "Português", "Español"],
      price: 705,
      rating: 4.98,
      amenities: [
        {
          scenicViews: ['Garden view', 'Lake view', 'Mountain view', 'Pool view']
        },
        {
          bathroom: ['Bathtub', 'Hair dryer', 'Cleaning products', 'Shampoo', 'Conditioner', 'Body soap']
        },
        {
          bedroomAndLaundry: ['Free washer', 'Free Dryer', 'Essentials', 'Hangers']
        },
        {
          entertainment: ['85" HDTV with Netflix', 'Pool table', 'Books and reading material']
        },
        {
          Family: ['Crib', 'High chair', 'Board games', 'Baby safety gates']
        },
        {
          heatingAndCooling: ['Central air conditioning', 'Indoor fireplace: gas']
        }
      ],
      accomodates: {
        guests: 8,
        bedrooms: 3,
        beds: 10,
        baths: 2.5
      },
      img: [
        {
          url: 'https://imgur.com/nNHRwnK.png'
        },
        {
          url: 'https://imgur.com/R7RlVBI.png'
        },
        {
          url: 'https://imgur.com/3lk487H.png'
        },
        {
          url: 'https://imgur.com/8ViosHN.png'
        },
        {
          url: 'https://imgur.com/Hqfor9k.png'
        }
      ],
      additionalImages: [
        {
          url: 'https://imgur.com/nNHRwnK.png'
        },
        {
          url: 'https://imgur.com/R7RlVBI.png'
        },
        {
          url: 'https://imgur.com/3lk487H.png'
        },
        {
          url: 'https://imgur.com/8ViosHN.png'
        },
        {
          url: 'https://imgur.com/Hqfor9k.png'
        }
      ]
    }, 
    {
      id: uuidv4(),
      title: 'Luxury Lookout Hood Canal Vacation Rental (#1)',
      city: 'Vancouver',
      reviews: [['good'], ['decent'], ['bad']],
      state: 'Washington',
      country: 'United States',
      distance: '100 miles away',
      date: 'Aug 21 - 26',
      dateJoined: {
        month: "January",
        date: "21",
        year: "2017"
      },
      hostPP: 'https://a0.muscache.com/im/pictures/user/4a227ebe-74c0-4180-881a-f4db35adb1a0.jpg?im_w=240',
      category: 'suite',
      host: 'George Washington',
      price: 705,
      rating: 4.1,
      amenities: [
        {
          scenicViews: ['Garden view', 'Lake view', 'Mountain view', 'Pool view']
        },
        {
          bathroom: ['Bathtub', 'Hair dryer', 'Cleaning products', 'Shampoo', 'Conditioner', 'Body soap']
        },
        {
          bedroomAndLaundry: ['Free washer', 'Free Dryer', 'Essentials', 'Hangers']
        },
        {
          entertainment: ['85" HDTV with Netflix', 'Pool table', 'Books and reading material']
        },
        {
          Family: ['Crib', 'High chair', 'Board games', 'Baby safety gates']
        },
        {
          heatingAndCooling: ['Central air conditioning', 'Indoor fireplace: gas']
        }
      ],
      accomodates: {
        guests: 8,
        bedrooms: 3,
        beds: 10,
        baths: 2.5
      },
      img: [
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        }
      ]
    }, 
    {
      id: uuidv4(),
      title: 'Lakeridge Gardens Suite by the Lake',
      city: 'Seattle',
      reviews: [['good'], ['decent'], ['bad']],
      state: 'Washington',
      country: 'United States',
      distance: '100 miles away',
      date: 'Aug 21 - 26',
      dateJoined: {
        month: "January",
        date: "21",
        year: "2017"
      },
      hostPP: 'https://a0.muscache.com/im/pictures/user/4a227ebe-74c0-4180-881a-f4db35adb1a0.jpg?im_w=240',
      category: 'home',
      host: 'Bill Washington',
      price: 705,
      rating: 4.1,
      amenities: [
        {
          scenicViews: ['Garden view', 'Lake view', 'Mountain view', 'Pool view']
        },
        {
          bathroom: ['Bathtub', 'Hair dryer', 'Cleaning products', 'Shampoo', 'Conditioner', 'Body soap']
        },
        {
          bedroomAndLaundry: ['Free washer', 'Free Dryer', 'Essentials', 'Hangers']
        },
        {
          entertainment: ['85" HDTV with Netflix', 'Pool table', 'Books and reading material']
        },
        {
          Family: ['Crib', 'High chair', 'Board games', 'Baby safety gates']
        },
        {
          heatingAndCooling: ['Central air conditioning', 'Indoor fireplace: gas']
        }
      ],
      accomodates: {
        guests: 8,
        bedrooms: 3,
        beds: 10,
        baths: 2.5
      },
      img: [
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        }
      ]
    }, 
    {
      id: uuidv4(),
      title: "Friesen's Lake House",
      city: 'Olympia',
      reviews: [['good'], ['decent'], ['bad']],
      state: 'Washington',
      country: 'United States',
      distance: '100 miles away',
      date: 'Aug 21 - 26',
      dateJoined: {
        month: "January",
        date: "21",
        year: "2017"
      },
      hostPP: 'https://a0.muscache.com/im/pictures/user/4a227ebe-74c0-4180-881a-f4db35adb1a0.jpg?im_w=240',
      category: 'suite',
      host: 'Manny Washington',
      price: 705,
      rating: 4.1,
      amenities: [
        {
          scenicViews: ['Garden view', 'Lake view', 'Mountain view', 'Pool view']
        },
        {
          bathroom: ['Bathtub', 'Hair dryer', 'Cleaning products', 'Shampoo', 'Conditioner', 'Body soap']
        },
        {
          bedroomAndLaundry: ['Free washer', 'Free Dryer', 'Essentials', 'Hangers']
        },
        {
          entertainment: ['85" HDTV with Netflix', 'Pool table', 'Books and reading material']
        },
        {
          Family: ['Crib', 'High chair', 'Board games', 'Baby safety gates']
        },
        {
          heatingAndCooling: ['Central air conditioning', 'Indoor fireplace: gas']
        }
      ],
      accomodates: {
        guests: 8,
        bedrooms: 3,
        beds: 10,
        baths: 2.5
      },
      img: [
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        }
      ]
    }, 
    {  
      id: uuidv4(),
      title: 'Spacious Family Retreat with Lake & Mountain Views',
      city: 'Chelan',
      reviews: [['good'], ['decent'], ['bad']],
      state: 'Washington',
      country: 'United States',
      distance: '100 miles away',
      date: 'Aug 21 - 26',
      dateJoined: {
        month: "January",
        date: "21",
        year: "2017"
      },
      hostPP: 'https://a0.muscache.com/im/pictures/user/4a227ebe-74c0-4180-881a-f4db35adb1a0.jpg?im_w=240',
      category: 'home',
      host: 'Aly Washington',
      price: 705,
      rating: 4.98,
      amenities: [
        {
          scenicViews: ['Garden view', 'Lake view', 'Mountain view', 'Pool view']
        },
        {
          bathroom: ['Bathtub', 'Hair dryer', 'Cleaning products', 'Shampoo', 'Conditioner', 'Body soap']
        },
        {
          bedroomAndLaundry: ['Free washer', 'Free Dryer', 'Essentials', 'Hangers']
        },
        {
          entertainment: ['85" HDTV with Netflix', 'Pool table', 'Books and reading material']
        },
        {
          Family: ['Crib', 'High chair', 'Board games', 'Baby safety gates']
        },
        {
          heatingAndCooling: ['Central air conditioning', 'Indoor fireplace: gas']
        }
      ],
      accomodates: {
        guests: 8,
        bedrooms: 3,
        beds: 10,
        baths: 2.5
      },
      img: [
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        }
      ]
    }, 
    {
      id: uuidv4(),
      title: 'Newly constructed lakefront home w/ private pool, boat dock, & wrap-around deck!',
      city: 'Vancouver',
      reviews: [['good'], ['decent'], ['bad']],
      state: 'Washington',
      country: 'United States',
      distance: '100 miles away',
      date: 'Aug 21 - 26',
      dateJoined: {
        month: "January",
        date: "21",
        year: "2017"
      },
      hostPP: 'https://a0.muscache.com/im/pictures/user/4a227ebe-74c0-4180-881a-f4db35adb1a0.jpg?im_w=240',
      category: 'home',
      host: 'Vanessa Washington',
      price: 705,
      rating: 4.1,
      amenities: [
        {
          scenicViews: ['Garden view', 'Lake view', 'Mountain view', 'Pool view']
        },
        {
          bathroom: ['Bathtub', 'Hair dryer', 'Cleaning products', 'Shampoo', 'Conditioner', 'Body soap']
        },
        {
          bedroomAndLaundry: ['Free washer', 'Free Dryer', 'Essentials', 'Hangers']
        },
        {
          entertainment: ['85" HDTV with Netflix', 'Pool table', 'Books and reading material']
        },
        {
          Family: ['Crib', 'High chair', 'Board games', 'Baby safety gates']
        },
        {
          heatingAndCooling: ['Central air conditioning', 'Indoor fireplace: gas']
        }
      ],
      accomodates: {
        guests: 8,
        bedrooms: 3,
        beds: 10,
        baths: 2.5
      },
      img: [
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        }
      ]
    }, 
    {
      id: uuidv4(),
      title: 'Lakefront with Three Levels, Hot Tub, Dock, and Great Views - Dogs Welcome',
      city: 'Seattle',
      reviews: [['good'], ['decent'], ['bad']],
      state: 'Washington',
      country: 'United States',
      distance: '100 miles away',
      date: 'Aug 21 - 26',
      dateJoined: {
        month: "January",
        date: "21",
        year: "2017"
      },
      hostPP: 'https://a0.muscache.com/im/pictures/user/4a227ebe-74c0-4180-881a-f4db35adb1a0.jpg?im_w=240',
      category: 'suite',
      host: 'Kelly Washington',
      price: 705,
      rating: 4.1,
      amenities: [
        {
          scenicViews: ['Garden view', 'Lake view', 'Mountain view', 'Pool view']
        },
        {
          bathroom: ['Bathtub', 'Hair dryer', 'Cleaning products', 'Shampoo', 'Conditioner', 'Body soap']
        },
        {
          bedroomAndLaundry: ['Free washer', 'Free Dryer', 'Essentials', 'Hangers']
        },
        {
          entertainment: ['85" HDTV with Netflix', 'Pool table', 'Books and reading material']
        },
        {
          Family: ['Crib', 'High chair', 'Board games', 'Baby safety gates']
        },
        {
          heatingAndCooling: ['Central air conditioning', 'Indoor fireplace: gas']
        }
      ],
      accomodates: {
        guests: 8,
        bedrooms: 3,
        beds: 10,
        baths: 2.5
      },
      img: [
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        }
      ]
    }, 
    {
      id: uuidv4(),
      title: 'Lakefront Home to Relax - 30mins to Seattle',
      city: 'Olympia',
      reviews: [['good'], ['decent'], ['bad']],
      state: 'Washington',
      country: 'United States',
      distance: '100 miles away',
      date: 'Aug 21 - 26',
      dateJoined: {
        month: "January",
        date: "21",
        year: "2017"
      },
      hostPP: 'https://a0.muscache.com/im/pictures/user/4a227ebe-74c0-4180-881a-f4db35adb1a0.jpg?im_w=240',
      category: 'suite',
      host: 'Kimberly Washington',
      price: 705,
      rating: 4.1,
      amenities: [
        {
          scenicViews: ['Garden view', 'Lake view', 'Mountain view', 'Pool view']
        },
        {
          bathroom: ['Bathtub', 'Hair dryer', 'Cleaning products', 'Shampoo', 'Conditioner', 'Body soap']
        },
        {
          bedroomAndLaundry: ['Free washer', 'Free Dryer', 'Essentials', 'Hangers']
        },
        {
          entertainment: ['85" HDTV with Netflix', 'Pool table', 'Books and reading material']
        },
        {
          Family: ['Crib', 'High chair', 'Board games', 'Baby safety gates']
        },
        {
          heatingAndCooling: ['Central air conditioning', 'Indoor fireplace: gas']
        }
      ],
      accomodates: {
        guests: 8,
        bedrooms: 3,
        beds: 10,
        baths: 2.5
      },
      img: [
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        },
        {
          url: 'https://i.imgur.com/S59GQ9A.png'
        }
      ]
    }
  ]
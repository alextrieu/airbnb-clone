import { v4 as uuidv4 } from 'uuid';
export const listings = [
    {  
      id: uuidv4(),
      title: 'Upscale lakefront house with stunning views & dock - spacious interior with fireplace',
      city: 'Chelan',
      reviews: [
        {
          id: "Alexa",
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
          profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
          comment: "and and and and and and and and and and and and and and and and and and and and and and and and and and and "
        },
        {
          id: "Kateryna",
          profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          date: "January 2022",
          rating: [
            {
              cleanliness: 4.2,
              communication: 4.4,
              checkIn: 4.9,
              accuracy: 4.6,
              location: 4.8,
              value: 3.1
            }
          ],
          comment: "Big, clean house in great location. Had everything we needed and communication was fast. Parking is really limited for a house with that capacity and checkout was pretty early, but otherwise it was a great weekend getaway"
        },
        {
          id: "Cristiana",
          profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          date: "February 2022",
          rating: [
            {
              cleanliness: 4.2,
              communication: 4.4,
              checkIn: 4.9,
              accuracy: 4.1,
              location: 3.8,
              value: 4.1
            }
          ],
          comment: "Big, clean house in great location. Had everything we needed and communication was fast. Parking is really limited for a house with that capacity and checkout was pretty early, but otherwise it was a great weekend getaway"
        },
        {
          id: "Liz",
          profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          date: "March 2022",
          rating: [
            {
              cleanliness: 4.2,
              communication: 4.4,
              checkIn: 4.9,
              accuracy: 4.1,
              location: 4.8,
              value: 4.1
            }
          ],
          comment: "Big, clean house in great location. Had everything we needed and communication was fast. Parking is really limited for a house with that capacity and checkout was pretty early, but otherwise it was a great weekend getaway"
        },
        {
          id: "Kristi",
          profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          date: "April 2022",
          rating: [
            {
              cleanliness: 4.2,
              communication: 4.4,
              checkIn: 4.9,
              accuracy: 4.1,
              location: 4.8,
              value: 4.1
            }
          ],
          comment: "Big, clean house in great location. Had everything we needed and communication was fast. Parking is really limited for a house with that capacity and checkout was pretty early, but otherwise it was a great weekend getaway"
        }
      ],
      state: 'Washington',
      country: 'United States',
      distance: '100 miles away',
      date: 'Aug 21 - 26',
      category: 'home',
      host: 'Vacasa Washington',
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
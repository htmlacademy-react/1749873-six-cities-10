import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'],
    title: 'Beautiful & luxurious studio at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    rating: 4.5,
    type: 'Apartment',
    rooms: 3,
    capacity: 4,
    features: ['Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'],
    owner: {
      id: 1,
      name: 'Billy Stocks',
      avatar: 'img/avatar-angelina.jpg',
      status: true,
    },
    favorite: true,
    price: 120,
    address:{
      lat:655652,
      lng: 989550,
    },
    reviews: [1],
    premium: true,
  },
  {
    id: 2,
    images: [ 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg','img/room.jpg'],
    title: 'Beautiful & luxurious studio at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    rating: 4.2,
    type: 'Private room',
    rooms: 2,
    capacity: 5,
    features: ['Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'],
    owner: {
      id: 2,
      name: 'Hank Moody',
      avatar: 'img/avatar-angelina.jpg',
      status: false,
    },
    favorite: false,
    price: 100,
    address:{
      lat:655652,
      lng: 989550,
    },
    reviews: [2],
    premium: true,
  },
  {
    id: 3,
    images: ['img/apartment-03.jpg','img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
    title: 'Beautiful & luxurious studio at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    rating: 4.5,
    type: 'Private room',
    rooms: 1,
    capacity: 2,
    features: ['Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
    ],
    owner: {
      id: 3,
      name: 'Lilly Ericsson',
      avatar: 'img/avatar-angelina.jpg',
      status: true,
    },
    favorite: true,
    price: 80,
    address:{
      lat:655652,
      lng: 989550,
    },
    reviews: [3],
    premium: false,
  },
  {
    id: 4,
    images: ['img/apartment-02.jpg', 'img/room.jpg', 'img/apartment-01.jpg', ],
    title: 'Luxurious studio at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    rating: 5,
    type: 'Apartment',
    rooms: 5,
    capacity: 10,
    features: ['Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'],
    owner: {
      id: 4,
      name: 'Willy Stocks',
      avatar: 'img/avatar-angelina.jpg',
      status: true,
    },
    favorite: false,
    price: 200,
    address:{
      lat:655652,
      lng: 989550,
    },
    reviews: [4],
    premium: false,
  }
];

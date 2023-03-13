export interface Attraction {
  id?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  name: string;
  video: string;
  image: string;
  exerpt: string;
  description: string;
  location: string;
  country: string;
}

export interface User {
  token: string;
  id?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: string;
  name: string;
  avatar: string;
  role: string;
}

export interface Trip {
  id?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  name: string;
  country: string;
  start_location: string;
  end_location: string;
  distance: number;
  type: string;
  description: string;
  attractions: string[];
}

export interface Activity {
  cost: number;
  id?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  name: string;
  location: string;
  price: number;
  description: string;
  country: string;
  duration_in_hours: number;
}

export interface Itinerary {
  id?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  name: string;
  country: string;
  approved: boolean;
  price_per_person: number;
  duration: number;
  trips: string[];
  activities: string[];
  accomodations?: string[];
  user: string;
}

export interface Tour {
  id?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  name: string;
  type?: string;
  price?: number;
  description?: string;
  image?: string;
  itinerary?: string;
  country?: string;
  client?: string;
  rating?: string;
  duration_in_days?: number;
}

export interface Accomodation {
  id?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  name: string;
  description: string;
  price: number;
  type: string;
  location: string;
  country: string;
  cover_image: string;
  active: boolean;
}

export interface Car {
  id?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  make: string;
  model: string;
  transmission: string;
  max_price: number;
  min_price: number;
  camping_equiped: boolean;
  four_wheel_drive: boolean;
  image: string;
}

export interface Booking {
  id?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  date: string;
  price: number;
  number_of_people: number;
  tour?: string;
  car?: string;
  user: string;
}

export interface Rating {
  id?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  rate: number;
  comment: string;
  user: string;
  tour: string;
  car: string;
}

export interface List {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items:
    | Trip[]
    | Attraction[]
    | User[]
    | Activity[]
    | Tour[]
    | Accomodation[]
    | Car[]
    | Booking[]
    | Rating[]
    | Itinerary[];
}

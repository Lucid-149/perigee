import { ApiCalls } from ".";
import {
  createOne,
  deleteOne,
  getFullList,
  getOne,
  ListQueryParams,
  search,
} from "./functions";

//auth routes

// app data base routes

// ! Trip
const getTripList: ApiCalls = {
  method: getFullList,
  collectionName: "trips",
  params: {},
  callback: (data) => {},
  data: {},
  id: "",
};

function searchTripList(params: ListQueryParams): ApiCalls {
  return {
    method: search,
    collectionName: "trips",
    params: params,
    callback: (data) => {},
    data: {},
    id: "",
  };
}

function getTrip(id: string): ApiCalls {
  return {
    method: getFullList,
    collectionName: "trips",
    params: {},
    callback: (data) => {},
    data: {},
    id: id,
  };
}

function deleteTrip(id: string): ApiCalls {
  return {
    method: deleteOne,
    collectionName: "trips",
    params: {},
    callback: (data) => {},
    data: {},
    auth: true,
    id: id,
  };
}

function createTrip(data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "trips",
    params: {},
    callback: (data) => {},
    data: data,
    auth: true,
    id: "",
  };
}

function updateTrip(id: string, data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "trips",
    params: {},
    callback: (data) => {},
    data: data,
    auth: true,
    id: id,
  };
}

// ! Activity
const getActivityList: ApiCalls = {
  method: getFullList,
  collectionName: "activities",
  params: {},
  callback: (data) => {},
  data: {},
  id: "",
};

function searchActivityList(params: ListQueryParams): ApiCalls {
  return {
    method: search,
    collectionName: "activities",
    params: params,
    callback: (data) => {},
    data: {},
    id: "",
  };
}

function getActivity(id: string): ApiCalls {
  return {
    method: getFullList,
    collectionName: "activities",
    params: {},
    callback: (data) => {},
    data: {},
    id: id,
  };
}

function deleteActivity(id: string): ApiCalls {
  return {
    method: deleteOne,
    collectionName: "activities",
    params: {},
    callback: (data) => {},
    data: {},
    auth: false,
    id: id,
  };
}

function createActivity(data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "activities",
    params: {},
    callback: (data) => {},
    data: data,
    auth: false,
    id: "",
  };
}

function updateActivity(id: string, data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "activities",
    params: {},
    callback: (data) => {},
    data: data,
    auth: false,
    id: id,
  };
}

// ! Accomodation

const getAccomodationList: ApiCalls = {
  method: getFullList,
  collectionName: "accomodation",
  params: {},
  callback: (data) => {},
  data: {},
  id: "",
};

function searchAccomodationList(params: ListQueryParams): ApiCalls {
  return {
    method: search,
    collectionName: "accomodation",
    params: params,
    callback: (data) => {},
    data: {},
    id: "",
  };
}

function getAccomodation(id: string): ApiCalls {
  return {
    method: getFullList,
    collectionName: "accomodation",
    params: {},
    callback: (data) => {},
    data: {},
    id: id,
  };
}

function deleteAccomodation(id: string): ApiCalls {
  return {
    method: deleteOne,
    collectionName: "accomodation",
    params: {},
    callback: (data) => {},
    data: {},
    auth: false,
    id: id,
  };
}

function createAccomodation(data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "accomodation",
    params: {},
    callback: (data) => {},
    data: data,
    auth: false,
    id: "",
  };
}

function updateAccomodation(id: string, data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "accomodation",
    params: {},
    callback: (data) => {},
    data: data,
    auth: false,
    id: id,
  };
}

// ! Attraction

const getAttractionList: ApiCalls = {
  method: getFullList,
  collectionName: "attractions",
  params: {},
  callback: (data) => {},
  data: {},
  id: "",
};

function searchAttractionList(params: ListQueryParams): ApiCalls {
  return {
    method: search,
    collectionName: "attractions",
    params: params,
    callback: (data) => {},
    data: {},
    id: "",
  };
}

function getAttraction(id: string): ApiCalls {
  return {
    method: getFullList,
    collectionName: "attractions",
    params: {},
    callback: (data) => {},
    data: {},
    id: id,
  };
}

function deleteAttraction(id: string): ApiCalls {
  return {
    method: deleteOne,
    collectionName: "attractions",
    params: {},
    callback: (data) => {},
    data: {},
    auth: false,
    id: id,
  };
}

function createAttraction(data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "attractions",
    params: {},
    callback: (data) => {},
    data: data,
    auth: false,
    id: "",
  };
}

function updateAttraction(id: string, data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "attractions",
    params: {},
    callback: (data) => {},
    data: data,
    auth: true,
    id: id,
  };
}

// ! Tour

const getTourList: ApiCalls = {
  method: getFullList,
  collectionName: "tours",
  params: {},
  callback: (data) => {},
  data: {},
  id: "",
};

function searchTourList(params: ListQueryParams): ApiCalls {
  return {
    method: search,
    collectionName: "tours",
    params: params,
    callback: (data) => {},
    data: {},
    id: "",
  };
}

function getTour(id: string): ApiCalls {
  return {
    method: getFullList,
    collectionName: "tours",
    params: {},
    callback: (data) => {},
    data: {},
    id: id,
  };
}

function deleteTour(id: string): ApiCalls {
  return {
    method: deleteOne,
    collectionName: "tours",
    params: {},
    callback: (data) => {},
    data: {},
    auth: true,
    id: id,
  };
}

function createTour(data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "tours",
    params: {},
    callback: (data) => {},
    data: data,
    auth: true,
    id: "",
  };
}

function updateTour(id: string, data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "tours",
    params: {},
    callback: (data) => {},
    data: data,
    auth: true,
    id: id,
  };
}

// ! Booking

function searchBookingList(params: ListQueryParams): ApiCalls {
  return {
    method: search,
    collectionName: "booking",
    params: params,
    callback: (data) => {},
    data: {},
    id: "",
  };
}

function getBooking(id: string): ApiCalls {
  return {
    method: getFullList,
    collectionName: "booking",
    params: {},
    callback: (data) => {},
    data: {},
    id: id,
  };
}

function deleteBooking(id: string): ApiCalls {
  return {
    method: deleteOne,
    collectionName: "booking",
    params: {},
    callback: (data) => {},
    data: {},
    auth: true,
    id: id,
  };
}

function createBooking(data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "booking",
    params: {},
    callback: (data) => {},
    data: data,
    auth: true,
    id: "",
  };
}

function updateBooking(id: string, data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "booking",
    params: {},
    callback: (data) => {},
    data: data,
    auth: true,
    id: id,
  };
}
//! Car 

const getCarList: ApiCalls = {
  method: getFullList,
  collectionName: "cars",
  params: {},
  callback: (data) => {},
  data: {},
  id: "",
};

function searchCarList(params: ListQueryParams): ApiCalls {
  return {
    method: search,
    collectionName: "cars",
    params: params,
    callback: (data) => {},
    data: {},
    id: "",
  };
}

function getCar(id: string): ApiCalls {
  return {
    method: getOne,
    collectionName: "cars",
    params: {},
    callback: (data) => {},
    data: {},
    id: id,
  };
}

function deleteCar(id: string): ApiCalls {
  return {
    method: deleteOne,
    collectionName: "cars",
    params: {},
    callback: (data) => {},
    data: {},
    auth: true,
    id: id,
  };

}

function createCar(data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "cars",
    params: {},
    callback: (data) => {},
    data: data,
    auth: false,
    id: "",
  };
}
// ! itineraries

const getItineraryList: ApiCalls = {
  method: getFullList,
  collectionName: "itineraries",
  params: {},
  callback: (data) => {},
  data: {},
  id: "",
};

function searchItineraryList(params: ListQueryParams): ApiCalls {
  return {
    method: search,
    collectionName: "itineraries",
    params: params,
    callback: (data) => {},
    data: {},
    id: "",
  };
}

function getItinerary(id: string): ApiCalls {
  return {
    method: getOne,
    collectionName: "itineraries",
    params: {},
    callback: (data) => {},
    data: {},
    id: id,
  };

}

function deleteItinerary(id: string): ApiCalls {
  return {
    method: deleteOne,
    collectionName: "itineraries",
    params: {},
    callback: (data) => {},
    data: {},
    auth: true,
    id: id,
  };

}

function createItinerary(data: any): ApiCalls {
  return {
    method: createOne,
    collectionName: "itineraries",
    params: {},
    callback: (data) => {},
    data: data,
    auth: false,
    id: "",

  };
}

function updateItinerary(id: string, data: any): ApiCalls {
  return {  
    method: createOne,
    collectionName: "itineraries",
    params: {},
    callback: (data) => {},
    data: data,
    auth: true,
    id: id,
  };
}


const TourApiCalls = {
  getTripList,
  searchTripList,
  getTrip,
  deleteTrip,
  createTrip,
  updateTrip,
  getActivityList,
  searchActivityList,
  getActivity,
  deleteActivity,
  createActivity,
  getAccomodationList,
  searchAccomodationList,
  getAccomodation,
  deleteAccomodation,
  createAccomodation,
  updateAccomodation,
  getAttractionList,
  searchAttractionList,
  getAttraction,
  deleteAttraction,
  createAttraction,
  updateAttraction,
  getTourList,
  searchTourList,
  getTour,
  deleteTour,
  createTour,
  updateTour,
  searchBookingList,
  getBooking,
  deleteBooking,
  createBooking,
  updateBooking,
  getCarList,
  searchCarList,
  getCar,
  deleteCar,
  createCar,
  getItineraryList,
  searchItineraryList,
  getItinerary,
  deleteItinerary,
  createItinerary,
  updateItinerary,
};

export default TourApiCalls;

import {
  User,
  Trip,
  Activity,
  Accomodation,
  Attraction,
  Tour,
  Car,
  Booking,
  Rating,
  Itinerary,
} from "./models";
import {
  search,
  getFullList,
  getOne,
  subscribe,
  createOne,
  deleteOne,
  updateOne,
  DB,
  ErrorResponse,
} from "./functions";
import { ListQueryParams } from "./functions";
type API = {
  user: User;
  trip: Trip;
  activity: Activity;
  accomodation: Accomodation;
  attraction: Attraction;
  tour: Tour;
  car: Car;
  booking: Booking;
  rating: Rating;
  itinerary: Itinerary;
  search: typeof search;
  getFullList: typeof getFullList;
  getOne: typeof getOne;
  subscribe: typeof subscribe;
  createOne: typeof createOne;
  deleteOne: typeof deleteOne;
  updateOne: typeof updateOne;
};
import {List} from "./models";

export interface ApiCalls {
  method:
    | API["getFullList"]
    | API["getOne"]
    | API["search"]
    | API["createOne"]
    | API["updateOne"]
    | API["deleteOne"];
  collectionName: string;
  params: ListQueryParams;
  callback: (data: any) => void;
  data: object;
  id: string;
  auth?: boolean;
}

export const apiController = (call: ApiCalls) => {
  let data: Promise<List | ErrorResponse | Trip | User | Activity | Accomodation | Attraction | Tour | Car | Booking | Rating | Itinerary | unknown>;
  if (call.auth) {
    const token = DB.authStore.token;
    if (!token) {
      throw new Error("You are not authorized to perform this action");
    }
  }
  if (call.method === getFullList) {
    data = getFullList(call.params, call.collectionName);
    console.log("data", data);
  } else if (call.method === getOne) {
    data = getOne(call.id, call.collectionName);
  } else if (call.method === search) {
    data = search(call.params, call.collectionName);
  } else if (call.method === createOne) {
    data = createOne(call.data, call.collectionName);
    console.log("data", data);
  } else if (call.method === updateOne) {
    data = updateOne(call.id, call.data, call.collectionName);
  } else if (call.method === deleteOne) {
    data = deleteOne(call.id, call.collectionName);
  } else {
    throw new Error("Unknown method");
  }
    return data;

};

interface constructor {
  call: ApiCalls;
  name: string;
  callFn: (call: ApiCalls) => Promise<any>;
}

class Api {
  call: ApiCalls;
  name: string;
  callFn: (call: ApiCalls) => Promise<any>;
  constructor({ call, name, callFn }: constructor) {
    this.call = call;
    this.name = name;
    this.callFn = callFn;
  }
  callApi() {
    return this.callFn(this.call);
  }
}

export default Api;

import { useData } from "./useData";
import {
  Activity,
  Accomodation,
  Trip,
  Attraction,
} from "../../../data/api/models";
import {
  useEffect,
  useState,
  useMemo,
  useReducer,
  createContext,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

/*
    * This hook is to be used in the Planner component.
    * It is used to store the data for the planner.
    $ IT ALLOWS A USER TO PLAN A TROUR BY CREATING A CUSTOM ITINERARY
    !Rules:
    * A user can create up to 5 itineraries at a time. 
      each itinerary is country specific.
      once a user has created 5 itineraries, they can no longer create until they are approved by the admin.
    * Itineraries can be created for a maximum of 30 days. 
        if a user tries to create an itinerary for more than 30 days, they will be notified.
        in a day a user is allowed to have 12 active hours. with a maximum of 9 hours of driving. 
    * A user cannot have 5 consecutive days of driving. hence a rest day is required after 4 days of driving.
        rest days are recommended in locations with attractions or activities and accomodations.
        if a user tries to create an itinerary that does not meet these requirements, they will be notified.
    ? Workflow: 
    * A user selects a country from the planner page.
    * then selects a start date and end date for the itinerary. new Day Class is created for each day.
    * then can selects attractions they want to visit. 
    * Then the can plan each day of the itinerary. 
    * They can add trips, activities, accomodations and attractions to each day.
    ? How to use:
    * import { usePlanner } from "./usePlanner";
    * const {itineraries, setItineraries, addItinerary, removeItinerary, addDay, removeDay, addTrip, removeTrip, addActivity, removeActivity, addAccomodation, removeAccomodation, addAttraction, removeAttraction} = usePlanner();
    ! Note:
    * The add and remove functions are used to update the state of the itineraries.
    @ Example:
    * addItinerary(newItinerary);
    * removeItinerary(itinerary);
    * addDay(itinerary, newDay);
    * removeDay(itinerary, day);
    * addTrip(day, newTrip);
    * removeTrip(day, trip);
    * addActivity(day, newActivity);
    * removeActivity(day, activity);
    * addAccomodation(day, newAccomodation);
    * removeAccomodation(day, accomodation);
    
    Code Breakdown:
    * The useReducer hook is used to manage the state of the itineraries; 
     -The itineraries are stored in an array of Itinerary objects.
        -The Itinerary object has a country property and a days property.
        -The days property is an array of Day objects.
        -The Day object has a date property, trips property, activities property, accomodations property, driving property, rest property, drivingHours property, restHours property, totalHours property, totalCost property and totalDistance property.
        -The trips property is an array of Trip objects.
    * The Itinerary class is used to create new Itinerary objects.
    * The Day class is used to create new Day objects.                
*/

interface DayContructor {
  date: Date;
  trips: Trip[];
  activities?: Activity[];
  accomodations?: Accomodation[];
  driving: boolean;
  rest: boolean;
  drivingHours: number;
  restHours: number;
  totalHours: number;
  totalCost: number;
  totalDistance: number;
}

export class Day {
  date: Date;
  trips: Trip[];
  activities?: Activity[];
  accomodations?: Accomodation[];
  driving: boolean;
  rest: boolean;
  drivingHours: number;
  restHours: number;
  totalHours: number;
  totalCost: number;
  totalDistance: number;
  constructor({
    date,
    trips,
    activities,
    accomodations,
    driving,
    rest,
    drivingHours,
    restHours,
    totalHours,
    totalCost,
    totalDistance,
  }: DayContructor) {
    this.date = date;
    this.trips = trips;
    this.activities = activities;
    this.accomodations = accomodations;
    this.driving = driving;
    this.rest = rest;
    this.drivingHours = drivingHours;
    this.restHours = restHours;
    this.totalHours = totalHours;
    this.totalCost = totalCost;
    this.totalDistance = totalDistance;
  }

  addTrip(trip: Trip) {
    this.trips.push(trip);
  }

  addActivity(activity: Activity) {
    this.activities?.push(activity);
  }

  addAccomodation(accomodation: Accomodation) {
    this.accomodations?.push(accomodation);
  }

  removeTrip(trip: Trip) {
    this.trips = this.trips.filter((trip) => trip !== trip);
  }

  removeActivity(activity: Activity) {
    this.activities = this.activities?.filter(
      (activity) => activity !== activity
    );
  }

  removeAccomodation(accomodation: Accomodation) {
    this.accomodations = this.accomodations?.filter(
      (accomodation) => accomodation !== accomodation
    );
  }

  calculateTotalHours() {
    this.totalHours = this.drivingHours + this.restHours;
  }

  calculateTotalCost() {
    if (this.activities) {
      this.totalCost = +this.activities.reduce((a, b) => a + b.cost, 0);
    }
    if (this.accomodations) {
      this.totalCost = +this.accomodations.reduce((a, b) => a + b.price, 0);
    }
  }
  calculateTotalDistance() {
    this.totalDistance = this.trips.reduce((a, b) => a + b.distance, 0);
  }
}

interface ItineraryContructor {
  country: string;
  days: Day[];
}

export class Itinerary {
  country: string;
  days: Day[];
  constructor({ country, days }: ItineraryContructor) {
    this.country = country;
    this.days = days;
  }
  addDay(day: Day) {
    this.days.push(day);
  }
  removeDay(day: Day) {
    this.days = this.days.filter((day) => day !== day);
  }
}

export const RULES = {
  maxItineraries: 5,
  maxDays: 30,
  maxHours: 12,
  maxDrivingHours: 9,
  maxConsecutiveDrivingDays: 4,
  maxConsecutiveRestDays: 4,
  maxConsecutiveDrivingHours: 8,
};

const initialState = {
  itineraries: [],
  error: null,
  loading: false,
};

const plannerReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_ITINERARY":
      return {
        ...state,
        itineraries: [...state.itineraries, action.payload],
      };
    case "REMOVE_ITINERARY":
      return {
        ...state,
        itineraries: state.itineraries.filter(
          (itinerary: Itinerary) => itinerary !== action.payload
        ),
      };
    case "ADD_DAY":
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary: Itinerary) => {
          if (itinerary === action.payload.itinerary) {
            itinerary.addDay(action.payload.day);
          }
          return itinerary;
        }),
      };
    case "REMOVE_DAY":
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary: Itinerary) => {
          if (itinerary === action.payload.itinerary) {
            itinerary.removeDay(action.payload.day);
          }
          return itinerary;
        }),
      };
    case "ADD_TRIP":
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary: Itinerary) => {
          if (itinerary === action.payload.itinerary) {
            itinerary.days.map((day: Day) => {
              if (day === action.payload.day) {
                day.addTrip(action.payload.trip);
              }
              return day;
            });
          }
          return itinerary;
        }),
      };
    case "REMOVE_TRIP":
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary: Itinerary) => {
          if (itinerary === action.payload.itinerary) {
            itinerary.days.map((day: Day) => {
              if (day === action.payload.day) {
                day.removeTrip(action.payload.trip);
              }
              return day;
            });
          }
          return itinerary;
        }),
      };
    case "ADD_ACTIVITY":
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary: Itinerary) => {
          if (itinerary === action.payload.itinerary) {
            itinerary.days.map((day: Day) => {
              if (day === action.payload.day) {
                day.addActivity(action.payload.activity);
              }
              return day;
            });
          }
          return itinerary;
        }),
      };
    case "REMOVE_ACTIVITY":
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary: Itinerary) => {
          if (itinerary === action.payload.itinerary) {
            itinerary.days.map((day: Day) => {
              if (day === action.payload.day) {
                day.removeActivity(action.payload.activity);
              }
              return day;
            });
          }
          return itinerary;
        }),
      };
    case "ADD_ACCOMODATION":
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary: Itinerary) => {
          if (itinerary === action.payload.itinerary) {
            itinerary.days.map((day: Day) => {
              if (day === action.payload.day) {
                day.addAccomodation(action.payload.accomodation);
              }
              return day;
            });
          }
          return itinerary;
        }),
      };
    case "REMOVE_ACCOMODATION":
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary: Itinerary) => {
          if (itinerary === action.payload.itinerary) {
            itinerary.days.map((day: Day) => {
              if (day === action.payload.day) {
                day.removeAccomodation(action.payload.accomodation);
              }
              return day;
            });
          }
          return itinerary;
        }),
      };
    case "CALCULATE_TOTAL_HOURS":
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary: Itinerary) => {
          itinerary.days.map((day: Day) => {
            day.calculateTotalHours();
            return day;
          });
          return itinerary;
        }),
      };
    case "CALCULATE_TOTAL_COST":
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary: Itinerary) => {
          itinerary.days.map((day: Day) => {
            day.calculateTotalCost();
            return day;
          });
          return itinerary;
        }),
      };
    case "CALCULATE_TOTAL_DISTANCE":
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary: Itinerary) => {
          itinerary.days.map((day: Day) => {
            day.calculateTotalDistance();
            return day;
          });
          return itinerary;
        }),
      };

    default:
      return state;
  }
};

const PlannerContext = createContext<{
  state: any;
  addItinerary: (itinerary: Itinerary) => void;
  removeItinerary: (itinerary: Itinerary) => void;
  addDay: (itinerary: Itinerary, day: Day) => void;
  removeDay: (itinerary: Itinerary, day: Day) => void;
  addTrip: (itinerary: Itinerary, day: Day, trip: Trip) => void;
  removeTrip: (itinerary: Itinerary, day: Day, trip: Trip) => void;
  addActivity: (itinerary: Itinerary, day: Day, activity: Activity) => void;
  removeActivity: (itinerary: Itinerary, day: Day, activity: Activity) => void;
  addAccomodation: (
    itinerary: Itinerary,
    day: Day,
    accomodation: Accomodation
  ) => void;
  removeAccomodation: (
    itinerary: Itinerary,
    day: Day,
    accomodation: Accomodation
  ) => void;
  calculateTotalHours: (itinerary: Itinerary, day: Day) => void;
  calculateTotalCost: (itinerary: Itinerary, day: Day) => void;
  calculateTotalDistance: (itinerary: Itinerary, day: Day) => void;
}>({
  state: initialState,
  addItinerary: () => {},
  removeItinerary: () => {},
  addDay: () => {},
  removeDay: () => {},
  addTrip: () => {},
  removeTrip: () => {},
  addActivity: () => {},
  removeActivity: () => {},
  addAccomodation: () => {},
  removeAccomodation: () => {},
  calculateTotalHours: () => {},
  calculateTotalCost: () => {},
  calculateTotalDistance: () => {},
});

export const PlannerProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(plannerReducer, initialState);

  const addItinerary = (itinerary: Itinerary) => {
    dispatch({ type: "ADD_ITINERARY", payload: itinerary });
  };

  const removeItinerary = (itinerary: Itinerary) => {
    dispatch({ type: "REMOVE_ITINERARY", payload: itinerary });
  };

  const addDay = (itinerary: Itinerary, day: Day) => {
    dispatch({ type: "ADD_DAY", payload: { itinerary, day } });
  };

  const removeDay = (itinerary: Itinerary, day: Day) => {
    dispatch({ type: "REMOVE_DAY", payload: { itinerary, day } });
  };

  const addTrip = (itinerary: Itinerary, day: Day, trip: Trip) => {
    dispatch({ type: "ADD_TRIP", payload: { itinerary, day, trip } });
  };

  const removeTrip = (itinerary: Itinerary, day: Day, trip: Trip) => {
    dispatch({ type: "REMOVE_TRIP", payload: { itinerary, day, trip } });
  };

  const addActivity = (itinerary: Itinerary, day: Day, activity: Activity) => {
    dispatch({ type: "ADD_ACTIVITY", payload: { itinerary, day, activity } });
  };

  const removeActivity = (
    itinerary: Itinerary,
    day: Day,
    activity: Activity
  ) => {
    dispatch({
      type: "REMOVE_ACTIVITY",
      payload: { itinerary, day, activity },
    });
  };

  const addAccomodation = (
    itinerary: Itinerary,
    day: Day,
    accomodation: Accomodation
  ) => {
    dispatch({
      type: "ADD_ACCOMODATION",
      payload: { itinerary, day, accomodation },
    });
  };

  const removeAccomodation = (
    itinerary: Itinerary,
    day: Day,
    accomodation: Accomodation
  ) => {
    dispatch({
      type: "REMOVE_ACCOMODATION",
      payload: { itinerary, day, accomodation },
    });
  };

  const calculateTotalHours = (itinerary: Itinerary, day: Day) => {
    dispatch({ type: "CALCULATE_TOTAL_HOURS", payload: { itinerary, day } });
  };

  const calculateTotalCost = (itinerary: Itinerary, day: Day) => {
    dispatch({ type: "CALCULATE_TOTAL_COST", payload: { itinerary, day } });
  };

  const calculateTotalDistance = (itinerary: Itinerary, day: Day) => {
    dispatch({ type: "CALCULATE_TOTAL_DISTANCE", payload: { itinerary, day } });
  };

  return (
    <PlannerContext.Provider
      value={{
        state,
        addItinerary,
        removeItinerary,
        addDay,
        removeDay,
        addTrip,
        removeTrip,
        addActivity,
        removeActivity,
        addAccomodation,
        removeAccomodation,
        calculateTotalHours,
        calculateTotalCost,
        calculateTotalDistance,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};

const usePlanner = () => useContext(PlannerContext);

export default usePlanner;

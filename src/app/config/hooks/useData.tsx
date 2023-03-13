import {
  Tour,
  Trip,
  Itinerary,
  Accomodation,
  Attraction,
  Activity,
  Booking,
} from "../../../data/api/models";
import Countries, { Country } from "../../model/CountryHandler";

import AppModel from "../../model/app";
import { useQuery } from "react-query";
import { apiController } from "../../../data/api";
import TourApiCalls from "../../../data/api/routes";
import { ErrorResponse } from "../../../data/api/functions";
import {
  useState,
  useEffect,
  useContext,
  useMemo,
  createContext,
} from "react";
import { useNavigate } from "react-router-dom";

interface sortedData {
  country: Country;
  data:
    | Tour[]
    | Trip[]
    | Itinerary[]
    | Accomodation[]
    | Attraction[]
    | Activity[];
}

interface DataContextProps {
  tours: Tour[] | undefined;
  tourView: Tour | undefined;
  tourViewItinerary: Itinerary | undefined;
  trips: Trip[] | undefined;
  itineraries: Itinerary[] | undefined;
  accomodations: Accomodation[] | undefined;
  activities: Activity[] | undefined;
  attractions: Attraction[] | undefined;
  bookings: Booking[] | undefined;
  sortedData: sortedData[] | undefined;
  countries: Country[] | undefined;
  setTours: (tours: Tour[] | undefined) => void;
  setTourView: (tour: Tour | undefined) => void;
  setTrips: (trips: Trip[] | undefined) => void;
  setItineraries: (itineraries: Itinerary[] | undefined) => void;
  setAccomodations: (accomodations: Accomodation[] | undefined) => void;
  setActivities: (activities: Activity[] | undefined) => void;
  setBookings: (bookings: Booking[] | undefined) => void;
}

const DataContext = createContext<DataContextProps>({
  tours: undefined,
  tourView: undefined,
  tourViewItinerary: undefined,
  trips: undefined,
  itineraries: undefined,
  accomodations: undefined,
  activities: undefined,
  attractions: undefined,
  bookings: undefined,
  sortedData: undefined,
  countries: undefined,
  setTours: () => {},
  setTourView: () => {},
  setTrips: () => {},
  setItineraries: () => {},
  setAccomodations: () => {},
  setActivities: () => {},
  setBookings: () => {},
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: any) => {
  const [tours, setTours] = useState<Tour[] | undefined>(undefined);
  const [tourView, setTourView] = useState<Tour | undefined>();
  const [tourViewItinerary, setTourViewItinerary] = useState<
    Itinerary | undefined
  >();
  const [trips, setTrips] = useState<Trip[] | undefined>(undefined);
  const [itineraries, setItineraries] = useState<Itinerary[] | undefined>(
    undefined
  );
  const [accomodations, setAccomodations] = useState<
    Accomodation[] | undefined
  >(undefined);
  const [activities, setActivities] = useState<Activity[] | undefined>(
    undefined
  );
  const [attractions, setAttractions] = useState<Attraction[] | undefined>(
    undefined
  );
  const [bookings, setBookings] = useState<Booking[] | undefined>(undefined);
  const data = [
    tours,
    accomodations,
    activities,
    attractions,
    trips,
    itineraries,
  ];
  const sortedData = useMemo(() => {
    const sortedData: sortedData[] = [];
    Countries.forEach((country) => {
      const countryData: sortedData = {
        country,
        data: [],
      };
      data.forEach((data) => {
        if (data) {
          data.forEach((item) => {
            if (item.country === country.name) {
              countryData.data.push(item as any);
            }
          });
        }
      }
      );
      sortedData.push(countryData);
    });

    return sortedData;
  }, [data]);




  const { data: tourRes } = useQuery(
    "Tours",
    async () => {
      const res = await apiController(TourApiCalls.getTourList);
      return res as unknown as Tour[] | ErrorResponse | undefined;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
    }
  );
  const { data: tripRes } = useQuery(
    "Trips",
    async () => {
      const res = await apiController(TourApiCalls.getTripList);
      return res as unknown as Trip[] | ErrorResponse | undefined;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
    }
  );
  const { data: accomodationRes } = useQuery(
    "Accomodations",
    async () => {
      const res = await apiController(TourApiCalls.getAccomodationList);
      return res as unknown as Accomodation[] | ErrorResponse | undefined;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
    }
  );
  const { data: activityRes } = useQuery(
    "Activities",
    async () => {
      const res = await apiController(TourApiCalls.getActivityList);
      return res as unknown as Activity[] | ErrorResponse | undefined;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
    }
  );
  const { data: attractionRes } = useQuery(
    "Attractions",
    async () => {
      const res = await apiController(TourApiCalls.getAttractionList);
      return res as unknown as Attraction[] | ErrorResponse | undefined;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
    }
  );

  const TOURS = tourRes as Tour[] | undefined;
  const TRIPS = tripRes as Trip[] | undefined;
  const ACCOMODATIONS = accomodationRes as Accomodation[] | undefined;
  const ACTIVITIES = activityRes as Activity[] | undefined;
  const ATTRACTIONS = attractionRes as Attraction[] | undefined;

  const ERROR = {
    tours: tourRes as ErrorResponse | undefined,
    trips: tripRes as ErrorResponse | undefined,
    accomodations: accomodationRes as ErrorResponse | undefined,
    activities: activityRes as ErrorResponse | undefined,
    attractions: attractionRes as ErrorResponse | undefined,
  };
  useEffect(() => {
    if (TOURS && TRIPS && ACCOMODATIONS && ACTIVITIES && ATTRACTIONS) {
      setTours(TOURS);
      setTrips(TRIPS);
      setAccomodations(ACCOMODATIONS);
      setActivities(ACTIVITIES);
      setAttractions(ATTRACTIONS);
    }
  }, [TOURS, TRIPS, ACCOMODATIONS, ACTIVITIES, ATTRACTIONS]);

  useEffect(() => {
    if (tourView && tourView.id) {
      const itinerary = async () => {
        try {
          const res = await apiController(
            TourApiCalls.getItinerary(
              tourView.itinerary ? tourView.itinerary : ""
            )
          );
          const itinerary = res as unknown as
            | Itinerary
            | ErrorResponse
            | undefined;
          setTourViewItinerary(itinerary as unknown as Itinerary);
        } catch (error) {
          console.log(error);
        }
      };
      itinerary();
    }
  }, [tourView]);

  return (
    <DataContext.Provider
      value={{
        tours,
        tourView,
        tourViewItinerary,
        trips,
        itineraries,
        accomodations,
        activities,
        attractions,
        bookings,
        sortedData,
        countries: Countries,
        setTours,
        setTourView,
        setTrips,
        setItineraries,
        setAccomodations,
        setActivities,
        setBookings,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

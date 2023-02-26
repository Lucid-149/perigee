import { Trip } from "../../data/api/models";
import tripTypeIcons from "../util/icons/tripTypeIcons";
interface TripCardProps {
  trip: Trip;
}

const TripCard = ({ trip }: TripCardProps) => {
    type tripType = "Flight" | "Train Ride" | "Bus" | "Drive" | "Boat" | "Walk" | "Bike" | "Other";
  return (
    <div className="trip-card flex flex-col mx-3 group slide-in-blurred-top cursor-none relative glass hover:shadow-2xl transition-all duration-500 ease-in-out backdrop-blur-lg justify-center items-start  p-3 max-w-xs rounded-xl">
      <div className="trip-card__content-container flex flex-col justify-center items-start">
        <div className="trip-card__title-container flex  justify-center items-center">
          <h1 className="trip-card__title text-sm font-bold">
            {trip.start_location}
          </h1>
          <span className="trip-card__arrow text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
          <h1 className="trip-card__title text-sm font-bold">
            {trip.end_location}
          </h1>
        </div>
          <h4 className="trip-card__date text-lg ">{trip.distance}Km</h4>
          <h4 className="trip-card__date uppercase text-xs font-bold">{trip.country}</h4>
        <div className="trip-card__date-container flex gap-2 justify-center items-center">
        </div>
        <p className="trip-card__description text-lg leading-tight ease-in-out  transition-all pt-2">{trip.description}</p>
      </div>
      <div className="trip-card__type-icons-container absolute right-1 -z-10 top-1">

     {tripTypeIcons({type: trip.type as tripType})}
      </div>
    </div>
  );
};

export default TripCard;

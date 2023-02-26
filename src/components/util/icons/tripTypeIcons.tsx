import Airplane from "./Airplane";
import Bike from "./Bike";
import Drive from "./Drive";
import Train from "./Train";
import Walk from "./Walk";
import Bus from "./Bus";
import Boat from "./Boat";
export interface TripIcon {
  type:
    | "Flight"
    | "Train Ride"
    | "Bus"
    | "Drive"
    | "Boat"
    | "Walk"
    | "Bike"
    | "Other"
    | null
    | undefined
    | string;

}

export default function TripTypeIcons(props: TripIcon) {
  const { type } = props;
  return (
    <div className="trip-type-icons flex flex-col justify-center items-center">
      {type === "Flight" ? (
        <Airplane/>
      ) : type === "Train Ride" ? (
        <Train/>
      ) : type === "Bike" ? (
       <Bike />
      ) : type === "Other" ? (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ) : type === "Boat" ? (
        <Boat/>
      ) : type === "Walk" ? (
        <Walk/>
      ) : type === "Drive" ?(
       <Drive/>
      ) : type === "Bus" ? (  
        <Bus/>
      ) : (
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>)
      }
        
    </div>
  );
}

// Path: src/Components/Containers/Itinerary.tsx

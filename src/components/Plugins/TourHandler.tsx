import usePlanner, {
  PlannerProvider,
  Day,
  Itinerary,
} from "../../app/config/hooks/usePlanner";
import StageSequence from "../Containers/MultiStage";
import { useAuth } from "../../app/config/hooks/useAuth";
import { useData } from "../../app/config/hooks/useData";
import { useTheme } from "../../Theme/ThemeContext";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useMemo, useTransition } from "react";
import { TripCard } from "../Containers";
import {
  Tour,
  Trip,
  Accomodation,
  Activity,
  Attraction,
} from "../../data/api/models";
import { Country } from "../../app/model/CountryHandler";
import { useQuery } from "react-query";
import DateSelector from "../Forms/lib/Date/DateSelector";
import CountrySelector from "./lib/CountrySelector";
export default function TourHandler() {
  const { user } = useAuth();
  const { sortedData, countries } = useData();
  const { pathname } = useLocation();
  const { darkTheme } = useTheme();
  const {
    state,
    addTrip,
    addItinerary,
    addDay,
    addActivity,
    addAccomodation,
    removeTrip,
    removeItinerary,
    removeDay,
    removeActivity,
    removeAccomodation,
  } = usePlanner();
  type ItineraryCreatorState =
    | "start"
    | "idle"
    | "loading"
    | "error"
    | "success";
  type ItineraryCreatorStage =
    | "select"
    | "create"
    | "edit"
    | "view"
    | "delete"
    | "save";

type itinerariesState = "Set Start Date" | "Set End Date" | "Set Itineraries";

  const [itineraryCreatorState, setItineraryCreatorState] =
    useState<ItineraryCreatorState>("start");
  const [itineraryCreatorStage, setItineraryCreatorStage] =
    useState<ItineraryCreatorStage>("select");

  const [isPending, startTransition] = useTransition();

  function handleItineraryCreatorState(state: ItineraryCreatorState) {
    startTransition(() => {
      setItineraryCreatorState(state);
    });
  }

  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    undefined
  );

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  function itineraryCreator() {
    return (
      <div className="flex flex-col items-center justify-center glass rounded-xl p-5">
        <h1 className="text-2xl font-bold">Create an itinerary</h1>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h4>
            {selectedCountry?.name} - {selectedCountry?.code}
          </h4>

          <DateSelector
            date={startDate}
            dateRange={{
              start: new Date(),
              end: new Date(
                new Date().getTime() + 1000 * 60 * 60 * 24 * 365 * 2
              ),
            }}
          />
        </div>
      </div>
    );
  }

  function itineraryEditor() {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl font-bold text-gray-800">Edit an itinerary</h1>
        <div className="flex flex-row items-center justify-center w-full h-full"></div>
      </div>
    );
  }

  function itineraryViewer() {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl font-bold text-gray-800">View an itinerary</h1>
        <div className="flex flex-row items-center justify-center w-full h-full"></div>
      </div>
    );
  }

  function itineraryDeleter() {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl font-bold text-gray-800">
          Delete an itinerary
        </h1>
        <div className="flex flex-row items-center justify-center w-full h-full"></div>
      </div>
    );
  }

  function itinerarySaver() {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl font-bold text-gray-800">Save an itinerary</h1>
        <div className="flex flex-row items-center justify-center w-full h-full"></div>
      </div>
    );
  }

  return (
    <PlannerProvider>
      {itineraryCreatorState === "start" && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          {itineraryCreatorStage === "select" && (
            <CountrySelector
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              setItineraryCreatorStage={setItineraryCreatorStage}
            />
          )}
          {itineraryCreatorStage === "create" && itineraryCreator()}
          {itineraryCreatorStage === "edit" && itineraryEditor()}
          {itineraryCreatorStage === "view" && itineraryViewer()}
          {itineraryCreatorStage === "delete" && itineraryDeleter()}
          {itineraryCreatorStage === "save" && itinerarySaver()}
        </div>
      )}

      {itineraryCreatorState === "loading" && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold text-gray-800">Loading...</h1>
          <div className="flex flex-row items-center justify-center w-full h-full"></div>
        </div>
      )}

      {itineraryCreatorState === "error" && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold text-gray-800">Error</h1>
          <div className="flex flex-row items-center justify-center w-full h-full"></div>
        </div>
      )}

      {itineraryCreatorState === "success" && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold text-gray-800">Success</h1>
          <div className="flex flex-row items-center justify-center w-full h-full"></div>
        </div>
      )}
    </PlannerProvider>
  );
  type CardState = "selected" | "unselected";
  type Regions =
    | "Africa"
    | "Asia"
    | "Europe"
    | "North America"
    | "South America"
    | "Oceania";
  interface CountryCardProps {
    country: Country;
    state: CardState;
    onClick: (country: Country) => void;
  }

  function CountryCard({ country, state, onClick }: CountryCardProps) {
    const handleClick = () => {
      onClick(country);
    };

    const getCardClass = () => {
      switch (state) {
        case "selected":
          return " outline-green-500 hover:outline-red-700 p-2 glass";
        case "unselected":
          return " outline-transparent";
      }
    };

    return (
      <div
        className={`flex flex-col slide-in-blurred-top drop-shadow-xl relative w-full  cursor-pointer ease-in-out duration-300 items-center max-w-[10rem] justify-center gap-1 overflow-hidden rounded-xl ${getCardClass()} outline   `}
        onClick={handleClick}
      >
        <div className="flex flex-col justify-center items-start gap-2 p-1 w-full h-full">
          <h4 className=" text-xl uppercase font-bold">{country.name}</h4>
          <span className="text-xl capitalize">{country.capital}</span>
        </div>
        <div className=" absolute -z-10 right-2 bottom-2">
          <div className=" w-10 relative flex justify-center items-center overflow-hidden rounded-xl h-fit aspect-square">
            {country.flag}
          </div>
        </div>
      </div>
    );
  }
}

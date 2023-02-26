import { useState, useLayoutEffect } from "react";
import { Accomodation, Activity, Tour, Trip } from "../../../data/api/models";
import {
  TripCard,
  AccomodationCard,
  ActivityCard,
} from "../../../components/Containers";
import ImageLoader from "../../../components/util/ImageLoader";
import { useData } from "../../config/hooks/useData";
import { PrimaryBtn } from "../../../components/Containers";
import { useNavigate } from "react-router-dom";
import { DropMenu } from "../../../components/Containers";
const TourViewPage = () => {
  const { tourView, tourViewItinerary } = useData();
  const [tourData, setTourData] = useState<Tour>();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (tourView) {
      setTourData(tourView);
    } else {
      navigate("/tours");
    }
  }, [tourView]);
  function handleback() {
    navigate("/tours");
  }

  return (
    <div className=" w-screen h-screen bg-black/50 grid place-items-center pt-12">
      <div className="flex flex-col gap-2 h-[80vh] rounded-xl overflow-hidden relative w-11/12 shadow-2xl    ">
        <ImageLoader
          src={tourData?.image}
          alt={tourData?.name || "Tour Image"}
          className="object-cover absolute top-0 left-0  h-[86vh] rounded-xl  overflow-hidden w-full"
        />
        <div className="flex flex-col  p-2 glass h-5/6  rounded-r-xl px-5 min-w-[340px] w-1/3 drop-shadow-lg shadow-xl">
          <h2 className="w-full text-4xl uppercase font-semibold">
            {tourData?.name}
          </h2>
          <p className="w-full   h-2/3  overflow-auto text-2xl font-semibold  ">
            {tourData?.description}
          </p>
          <h3 className="w-full">
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(tourData?.price ? tourData.price : 0)}
          </h3>
          <h4 className="w-full text-3xl">{tourViewItinerary?.name}</h4>
          <div className="flex gap-2 justify-center items-center p-4 glass rounded-xl overflow-hidden">
            <div className="flex flex-col gap-0 justify-center items-center w-1/2">
            <h3 className="w-full text-base uppercase font-semibold flex gap-1 justify-center items-center">
              Activities
            </h3>
            <p className=" font-semibold text-5xl justify-center items-center">
              {tourViewItinerary?.activities?.length}
            </p>

            </div>
            <div className="flex flex-col gap-0 justify-center items-center w-1/2">
            <h3 className="w-full text-base uppercase font-semibold flex gap-1 justify-center items-center">
              Trips
            </h3>
            <p className=" font-semibold text-5xl justify-center items-center">
              {tourViewItinerary?.trips?.length}
            </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2 glass   rounded-r-xl px-5 min-w-[340px] w-1/3 drop-shadow-lg shadow-xl">
          <PrimaryBtn Text="BACK" Type="secondary" onClick={handleback} />
        </div>
      </div>
    </div>
  );
};

export default TourViewPage;

export const ItineraryView = () => {
  const { tourViewItinerary, activities, accomodations, trips } = useData();
  const navigate = useNavigate();

  const [tourTrips, setTourTrips] = useState<Trip[]>();
  const [tourAccomodations, setTourAccomodations] = useState<Accomodation[]>();
  const [tourActivities, setTourActivities] = useState<Activity[]>();

  useLayoutEffect(() => {
    if (tourViewItinerary) {
      activities?.forEach((activity) => {
        if (
          tourViewItinerary.activities?.includes(activity.id ? activity.id : "")
        ) {
          setTourActivities((prev) => [...(prev || []), activity]);
        }
      });
      accomodations?.forEach((accomodation) => {
        if (
          tourViewItinerary.accomodations?.includes(
            accomodation.id ? accomodation.id : ""
          )
        ) {
          setTourAccomodations((prev) => [...(prev || []), accomodation]);
        }
      });
      trips?.forEach((trip) => {
        if (tourViewItinerary.trips?.includes(trip.id ? trip.id : "")) {
          setTourTrips((prev) => [...(prev || []), trip]);
        }
      });
    } else {
      console.log("No Tour");
    }
  }, [tourViewItinerary]);

  function handleback() {
    navigate("/tours");
  }

  return (
    <div className=" w-screen h-screen bg-black/50 grid place-items-center justify-center">
      <div className="flex flex-col gap-2  rounded-xl overflow-hidden relative w-11/12 ">
          <h3 className="w-full  overflow-auto">
            {tourViewItinerary?.country}
          </h3>
        <div className="flex flex-wrap justify-center items-center gap-2 w-full max-w-7xl">
            <DropMenu name="Activities">
            <div className="flex flex-wrap justify-center h-full items-center w-full p-5 gap-2">
                {tourActivities?.map((activity) => (
                  <ActivityCard key={activity.id} activity={activity} />
                ))}
              </div>
            </DropMenu>

            <DropMenu name="Trips">
            <div className="flex flex-wrap justify-center h-full items-center w-full p-5 gap-2">
                {tourTrips?.map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </div>
            </DropMenu>
            <DropMenu name="Accomodations">
            <div className="flex flex-wrap justify-center h-full items-center w-full p-5 gap-2">
                {tourAccomodations?.map((accomodation) => (
                  <AccomodationCard
                    key={accomodation.id}
                    accomodation={accomodation}
                  />
                ))}
              </div>
            </DropMenu>
        </div>
      
      </div>
    </div>
  );
};

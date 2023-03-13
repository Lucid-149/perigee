import CardComponent from "../Layout/CardComponet";
import { useData } from "../../app/config/hooks/useData";
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryBtn } from "../Containers";

const DropMenu = lazy(() => import("../Containers/DropMenu"));
const TourCard = lazy(() => import("../Containers/TourCard"));
const ToursComponent = () => {
  const { tours, accomodations, activities, trips, setTourView } = useData();
  const navigate = useNavigate();

  return (
    <div
      title="Welcome to the Tours Page"
      className="w-11/12 h-full max-h-[90vh] flex flex-col justify-center items-center gap-2 overflow-hidden"
    >
      <div className="flex flex-wrap justify-center max-h-[80vh] overflow-auto h-full items-center  p-5 gap-2">
        <div className="flex flex-wrap justify-center h-full items-center w-full p-5 gap-2 ">
          <Suspense fallback={<div>Loading...</div>}>
            {tours?.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onClick={() => {
                  setTourView(tour);
                  navigate("/tours/" + tour.id);
                }}
              />
            ))}
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <DropMenu
             name="Create Tour"
            >
              <PrimaryBtn Type="primary" Text="Create Tour" LinkTo="/tours/itinerary-planner" />
            </DropMenu>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ToursComponent;

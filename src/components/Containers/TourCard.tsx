import { Tour } from "../../data/api/models";
import ImageLoader from "../util/ImageLoader";
import PrimaryBtn from "./PrimaryBtn";
interface TourCardProps {
  tour: Tour;
  onClick?: () => void;
}

export default function TourCard({ tour, onClick }: TourCardProps) {
  return (
    <div className="glass max-w-xs slide-in-blurred-top  hover:shadow-2xl relative flex flex-col m-1 overflow-hidden justify-center items-center p-1 rounded-xl">
      <ImageLoader
        src={tour.image}
        alt={tour.name}
  
        className=" rounded-xl shadow-sm brightness-90 h-[480px] w-full object-cover"
      />
      <div className="flex flex-col w-full p-5  h-full group rounded-xl ease-in-out duration-300 justify-center items-center absolute">
        <h5 className="card-title absolute top-0 p-5 glass w-full text-3xl">
          {tour.name}
        </h5>
        <div className="group-hover:h-full h-0 overflow-hidden flex flex-col justify-center items-center p-4 py-20 glass absolute w-full rounded-xl -z-10 group-hover:z-10 ease-in-out duration-500 ">
          <p className=" line-clamp font-semibold text-4xl">{tour.description}</p>
          <p className="card-text">
            <small className="text-muted">
              {tour.duration_in_days} days from ${tour.price}
            </small>
          </p>
          <h5 className=" text-4xl">
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(tour.price ? tour.price : 0)}
          </h5>
      <PrimaryBtn Text="View" Type={"primary"} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

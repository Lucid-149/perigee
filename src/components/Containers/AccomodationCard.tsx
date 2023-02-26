import { Accomodation } from "../../data/api/models";
import IconManager from "../util/IconManager";
import ImageLoader from "../util/ImageLoader";
interface AccomodationCardProps {
  accomodation: Accomodation;
}
const AccomodationCard = ({ accomodation }: AccomodationCardProps) => {
  return (
    <div className="  shadow-sm max-w-sm overflow-hidden  hover:shadow-emerald-600 hover:shadow-2xl transition-all duration-500 ease-in-out flex gap-3 h-fit relative m-1 rounded-xl w-full justify-center items-center">
      <ImageLoader
        src={accomodation.cover_image}
        alt={accomodation.name}

        className=" w-full rounded-xl glass  h-[420px] object-cover"
      />
      <div className="flex flex-col  rounded-xl overflow-hidden absolute top-0 left-0 w-full h-full justify-center items-center">
        <div className="w-full h-full overflow-hidden rounded-xl group  flex justify-end items-end relative">
          <h1 className="text-2xl glass py-7 px-5 z-30  overflow-hidden rounded-t-xl w-full leading-tight capitalize absolute top-0 font-semibold">
            {accomodation.name}
          </h1>
          <div className="flex flex-col translate-y-full pt-2 overflow-hidden rounded-b-xl transition-all ease-in-out glass duration-500 group-hover:translate-y-0 justify-center items-center  h-fit">
            <h4 className=" w-full p-5  uppercase font-black inline-flex justify-between">
              {accomodation.location}
            <IconManager name="map" className="w-8" />
            </h4>
            <p className="px-5 leading-tight text-lg">
              {accomodation.description}
            </p>
            <h4 className=" px-5 pb-5 font-bold w-full">
              {accomodation.type} {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(accomodation.price)} / <small>night
              </small>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccomodationCard;

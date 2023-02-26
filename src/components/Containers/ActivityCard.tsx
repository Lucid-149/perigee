import { Activity } from "../../data/api/models";

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  return (
    <div className="relative flex glass shadow-sm max-w-sm hover:shadow-2xl transition-all duration-500 ease-in-out m-1 rounded-xl overflow-hidden  p-1 flex-col gap-1 justify-start items-start">
      <div className="flex flex-col gap-1 justify-center items-start w-full glass rounded-xl overflow-hidden p-4">
        <h4 className=" w-11/12 font-semibold">{activity.name}</h4>
        <p className="text-xl w-11/12 font-semibold">
          {activity.description}
        </p>
        <h4 className="text-3xl font-semibold px-3  w-full">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(activity.price)}
        </h4>
      </div>
      <div className="activity-card__duration opacity-60 absolute justify-center items-center right-4 font-black flex  flex-col bottom-4 ">
        <div className="flex flex-col gap-0 justify-center items-center">
          <h4 className=" text-3xl font-bold leading-0">
            {activity.duration_in_hours}
          </h4>
          <small className="text-base  font-bold">
            {activity.duration_in_hours > 1 ? ` Hrs` : `Hr`}
          </small>
        </div>
        <small className=" uppercase w-full text-center border-t">
          Duration
        </small>
      </div>
    </div>
  );
};

export default ActivityCard;

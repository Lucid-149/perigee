import { useState } from "react";
import LazyImage from "../../../../util/ImageLoader";
interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, image, link }: CardProps) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={` overflow-hidden rounded-xl hover:mx-1 flex flex-col col-span-1 hover:z-20 hover: transition-all ease-in-out duration-300 justify-center items-center h-full relative w-1/6 group hover:w-1/2 hover:min-w-[280px]  $ 
   p-1`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <LazyImage
        src={image}
        alt={title}
        height={840}
        width={400}
        className={`w-full aspect-square object-cover rounded-xl group-hover:h-1/2 absolute top-0 h-full transition-all ease-in-out duration-300 shadow-sm hover:shadow-lg `}
      />
      <div
        className={`
        absolute top-0 w-full rounded-xl  h-full flex glass justify-center items-center z-10
        ${hover ? "hidden" : " visible"}
         }`}
      >
        <h3 className="text-vertical uppercase font-bold">{title}</h3>
      </div>

      {hover && (
        <div className=" w-full h-full flex flex-col justify-center items-center z-10">
          <h3 className="mt-4 text-2xl font-bold text-center">{title}</h3>
          <p className="mt-2 text-lg text-center">{description}</p>
          <a
            href={link}
            className={`mt-4 px-4 py-2 text-lg font-bold text-center glass rounded-xl ${
              hover ? "hover:scale-105" : "hover:scale-100"
            }`}
          >
            Learn More
          </a>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;

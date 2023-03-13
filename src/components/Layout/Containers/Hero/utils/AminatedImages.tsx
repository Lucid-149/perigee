import { useState,Component,useEffect } from "react";
import LazyImage from "../../../../util/ImageLoader";
import styles from "./utils.module.css";
interface Props {
  images: string[];
  delay: number;
}
const AnimatedImages: React.FC<Props> = (props) => {
  const [imagesAnimated, setImagesAnimated] = useState<string[]>([]);
  const [device, setDevice] = useState<string>("desktop");
  // each images is loaded one by one and not all at once the images slide in from the left on desktop and from the top on mobile
 

  const desktop = styles.slideinleft;
  const mobile = styles.slideintop;

  useEffect(() => {
    const images = props.images;
    const delay = props.delay;
    const imagesAnimated = images.map((image, index) => {
      return image;
    });
    setImagesAnimated(imagesAnimated);
    if (window.innerWidth < 768) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
  }, []);


  return (
    <div className="flex  flex-wrap justify-center items-center w-full h-full absolute -z-20  pt-32">
 
        {imagesAnimated.map((image, index) => (
          <div
            key={index}
            className={` w-fit h-fit ${device === "desktop" ? desktop : mobile} 
             m-2 group-hover:rounded-xl `}
          >
            <LazyImage
              src={image}
              alt="image"
              className={` object-cover kenburns-right shadow-xl  rounded-xl
              ${device === "desktop" ? " w-56 h-96" : " w-32 h-64"}
              `}
            
            />
          </div>
        ))}

    </div>
  );
};

export default AnimatedImages;

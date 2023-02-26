import React, { lazy, Suspense } from "react";
//import ImageLoader from "../../Tools/ImageLoader";
import { useTheme } from "../../../Theme/ThemeContext";
interface Props {
  images: string[];
  children: React.ReactNode;
}
const ImageLoader = lazy(() => import("../../util/ImageLoader"));

const Hero: React.FC<Props> = ({ images, children }) => {
  // load imagessh
  const heroImages = images.map((image, index) => {
    return (
      <Suspense
        key={index}
        fallback={
          <div>
            {" "}
            <div className="m-auto text-4xl text-white">
              <svg
                className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-2"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            </div>
          </div>
        }
      >
        <ImageLoader
          src={image}
          alt="hero"
          width={200}
          height={480}
          className=" rounded-xl object-cover w-full h-full filter brightness-10 hover:opacity-100 ease-in-out duration-300 transition-all slide-top shadow-2xl"
        />
      </Suspense>
    );
  });

  const goToNextSection = () => {
    const element = document.getElementsByTagName("section")[1];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const downArrow = (
    <svg
      onClick={goToNextSection}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 animate-bounce"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );

  return (
    <>
      <div className="relative w-screen flex justify-center items-center ease-in-out duration-300 transition-all motion-reduce:animate-bounce ">
        <div className=" left-0 w-full h-screen  overflow-auto flex flex-wrap gap-3 justify-center items-center">
          {heroImages}
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-center  bg-gradient-to-b from-transparent ${
            useTheme().darkTheme ? "to-black" : "to-slate-300/90"
          }`}
        ></div>
        <div className="absolute top-0 left-0 w-full h-screen py-10   flex flex-col justify-end items-center">
          {children}
        </div>
        
      </div>
    </>
  );
};
export default Hero;

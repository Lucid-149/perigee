import ImageLoader from "../util/ImageLoader";
import VideoPlayer from "../Plugins/VideoComponent";
import { Attraction } from "../../data/api/models";
interface AttractionsComponent {
  attraction?: Attraction;
}
function AttractionsComponent({ attraction }: AttractionsComponent) {
  if (attraction) {

  return (
        <div className=" flex flex-wrap  w-full justify-center items-center overflow-auto h-screen">
            <div
              className="flex flex-col gap-2 overflow-hidden justify-center items-center  relative h-screen w-screen "
            >
                <div className=" w-screen overflow-hidden absolute  glass top-0 left-0 h-screen">
                <ImageLoader
                  src="https://images.unsplash.com/photo-1516822671976-480ad5131e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt={attraction? attraction.name : "Attraction"}
                  className=" w-screen h-screen object-cover"
                />
              </div>
              <div className="flex flex-wrap  gap-2 w-full justify-between items-center absolute ">
                <div className=" w-full  justify-between items-center p-20">
                  <VideoPlayer
                    url="41tnjGqtaLc"
                    className="rounded-xl brightness-90 w-screen max-w-3xl shadow-2xl hover:shadow-emerald-600/30 aspect-video frame object-cover"
                  />
                </div>
                  <div className="flex gap-3 justify-center items-center glass p-5 py-20 w-11/12 rounded-xl shadow-2xl ml-6 flex-wrap">
                    <h2 className="text-5xl w-full font-semibold max-w-md">{attraction?.name}</h2>
                    <p className="card-text max-w-3xl text-2xl w-full font-semibold">{attraction?.description}</p>
                  </div>
              </div>
              
            </div>
        </div>
  );
  } else {
    return <div>loading...</div>;
  }
}

export default AttractionsComponent;
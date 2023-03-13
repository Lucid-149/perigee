import { PrimaryBtn } from "../../../Containers";
import LazyImage from "../../../util/ImageLoader";
const Pricing = () => {
  return (
    <div className={` h-screen py-20  px-3 w-screen overflow-hidden flex justify-center  items-center`}>
      <div className="flex flex-col justify-center items-center max-w-xl p-5 glass bg-inherit h-full  rounded-l-xl">

        <LazyImage
            src="https://images.unsplash.com/photo-1560866623-465412e43e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="Pricing"
            height={840}
          className=" object-cover rounded-xl h-full w-full"
            
        />
      </div>

      <div className="flex flex-col justify-center items-center max-w-3xl p-5 glass bg-inherit h-full  rounded-r-xl">
        <h2 className="text-4xl font-bold text-center">Pricing</h2>
          <hr className=" border w-full" />
        <p>
          Get ready for an adventure! Our tour packages and custom tours start
          at [price range]. We know, we know - you're probably thinking "what's
          the catch?" Well, here it is - there's a teeny-tiny 5% processing fee
          for all bookings. But don't worry, it's just a small price to pay for
          the trip of a lifetime. <br className="" />
          Now, here's the exciting part - our prices are like a roller coaster
          ride, flexible and always changing based on demand. That means you'll
          always get the best possible price, just like riding the front row of
          a roller coaster. So buckle up and get ready for a wild ride! <br />
          Ready to book your adventure? Hit that button and let's goooooo! Or if
          you want to know more, just give us a shout. We're always here to
          answer any questions you may have. Let's make some memories!
        </p>
      <PrimaryBtn Type="primary" Text="Book Now" LinkTo="/tours" />
      </div>
    </div>
  );
};

export default Pricing;

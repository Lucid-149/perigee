import { Page } from "../../model/app";
import ToursComponent from "../../../components/Plugins/ToursComponent";
import TourViewPage,{ItineraryView} from "./TourPage";


const TourPage: Page = {
  name: "Tours",
  image: "/images/tourspage.webp",
  head: {
    title: "",
    description: "",
    keywords: "",
  },
  url: "/tours",
  protected: false,
  sections: [
    {
      index: 0,
      name: "Tour",
      component: <ToursComponent />,
    },
  ],
  dynamicPages: [
    {
      name: "Tour View",
      url: "/tours/:id",
      image: "/images/tourspage.webp",
      head: { 
        title: "",
        description: "",
        keywords: "",
      },
      protected: false,
      sections: [
        {
          index: 0,
          name: "Tour View",
          component: <TourViewPage />,
        },
        {
          index: 1,
          name: "Itinerary View",
          component: <ItineraryView />,
        }
      ]

    },

  ]
};

export default TourPage;

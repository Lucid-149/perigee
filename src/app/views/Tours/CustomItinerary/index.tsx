import { Page } from "../../../model/app";

import TourHandler from "../../../../components/Plugins/TourHandler";

const ItineraryPlannerPage: Page = {
    name: "Itinerary Planner",
    image: "/images/tourspage.webp",
    head: {
        title: "",
        description: "",
        keywords: "",
    },
    url: "/tours/itinerary-planner",
    protected: false,
    sections: [
        {
            index: 0,
            name: "Itinerary Planner",
            component: <TourHandler />,
        },
    ],
};

export default ItineraryPlannerPage;
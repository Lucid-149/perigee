import { Page } from "../model/app";

const CarRentalPage: Page = {
    name: "Car Rental",
    image: "/images/home.webp",
    head: {
        title: "",
        description: "",
        keywords: "",
    },
    url: "/carrental",
    protected: false,
    sections: [
        {
            index: 0,
            name: "Car Rental",
            component: <></>,
        },
    ],
};

export default CarRentalPage;

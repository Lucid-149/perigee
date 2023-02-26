import CreateComponent from "./utils/CreateComponent";
import { Page } from "../../model/app";
import { Trip } from "../../../data/api/models";




const DashboardPage: Page = {
    name: "Dashboard",
    image: "/images/faq.webp",
    head: {
        title: "Dashboard",
        description: "Dashboard",
        keywords: "Dashboard",
    },
    url: "/dashboard",
    protected: true,
    sections: [
        {
            index: 0,
            name: "Dashboard",
            component: <CreateComponent name="Trip"/>,
        },
    ],
};

export default DashboardPage;
import { Page, Section } from "../model/app";
import { useData } from "../config/hooks/useData";
import { PrimaryBtn } from "../../components/Containers";
import AttractionsComponent from "../../components/Containers/AttractionComponent";
const SectioRender = (): Section[] => {
  const SectionComponent = (section: Section) => {
    const { attractions } = useData();
    const sections = attractions?.map((attraction, index) => {
      return {
        index: index,
        name: attraction.name,
        component: <AttractionsComponent attraction={attraction} />,
      };
    });

    if (sections) {
      return sections as Section[];
    } else {
      return [
        {
          index: 0,
          name: "Attractions",
          component: (
            <div className=" glass flex flex-col justify-center items-center">
              {" "}
              <h1>
                {" "}
                There are no attractions to display at this time. Please check
                back later.
              </h1>
              <PrimaryBtn
                Text="Go Back"
                type="button"
                Type="primary"
                onClick={() => {
                  window.history.back();
                }}
              />
            </div>
          ),
        },
      ];
    }
  };
  return SectionComponent as unknown as Section[];
};

const AttractionsPage: Page = {
  name: "Attractions",
  image: "/images/blogpage.webp",
  head: {
    title: "Attractions",
    description: "",
    keywords: "",
  },
  url: "/attractions",
  protected: false,
  sections: SectioRender(),
};

export default AttractionsPage;

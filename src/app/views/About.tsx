import { Page } from "../model/app";
import AppInfo from "../../data/content/info";
import IconManager from "../../components/util/IconManager";
const AboutPage: Page = {
  name: "About",
  image: "/images/about.webp",
  head: {
    title: "",
    description: "",
    keywords: "",
  },
  url: "/about",
  protected: false,
  sections: [
    {
      index: 0,
      name: "About",
      component: <About />,
    },
    {
      index: 1,
      name: "Our Values",
      component: <OurValues />,
    },
  ],
};

export default AboutPage;

function About() {
  return (
    <div className="glass pt-24 flex flex-col items-center justify-center w-full h-full">
      <h1 className=" uppercase text-5xl w-full text-center p-5 font-semibold">
        About
      </h1>
      <div className=" flex flex-wrap p-10 py-20  gap-4 max-w-6xl max-h-[80vh] overflow-auto">
        {AppInfo.about.map((item, index) => (
          <p
            className=" first-letter:text-7xl font-semibold text-2xl"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function OurValues() {
  return (
    <div className="glass pt-24 flex flex-col items-center justify-center w-full h-full">
      <h1 className=" uppercase text-5xl w-full text-center p-5  font-semibold">
        Our Values
      </h1>
      <div className=" flex flex-wrap p-10 py-20  gap-4 max-w-6xl max-h-[80vh] overflow-auto">
        <ol className=" first-letter:text-7xl font-semibold text-2xl">
          {AppInfo.ourvalues.map((item, index) => (
            <li key={index} className="flex flex-col gap-2">
              <div className="flex gap-10 items-center flex-wrap justify-between">
                <IconManager name="trip" className="w-32" />
                <h4 className=" first-letter:text-7xl font-semibold text-4xl max-w-3xl">
                  {item.title}
                </h4>
              </div>
              {item.list.map((item, i) => (
                <div key={i} className="flex gap-10 items-center">
                  <IconManager name="next" className=" w-12" />
                  <p className="first-letter:text-7xl">{item}</p>
                </div>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

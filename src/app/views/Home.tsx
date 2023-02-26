import React, { lazy,Suspense } from "react";
import { Page, Section } from "../model/app";
const Hero = lazy(() => import("../../components/Layout/sections/Hero"));
import Images from "../../data/content/Images";
import AppInfo from "../../data/content/info";
import TextAnimation from "../../components/animations/Text";
function sectionsComponent() {
  return (
    <>
      <h1>home</h1>
    </>
  );
}

const HomePage: Page = {
  name: "Home",
  head: {
    title: "",
    description: "",
    keywords: "",
  },
  url: "/",
  protected: false,
  sections: [
    {
      index: 0,
      name: "home",
      component: (
        <Suspense fallback={<div>Loading...</div>}>
        <Hero
          images={Images}
          children={
            <TextAnimation
              className=" font-semibold w-10/12 text-center"
              text={AppInfo.description}
            />
          }
        />
        </Suspense>
      ),
    },
    {
      index: 1,
      name: "our story",
      component: <>{sectionsComponent()}</>,
    },
  ],
  subPages: [],
};

export default HomePage;

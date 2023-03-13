import React, { lazy, Suspense } from "react";
import { Page, Section } from "../model/app";
const Hero = lazy(() => import("../../components/Layout/Containers/Hero"));
const Pricing = lazy(
  () => import("../../components/Layout/Containers/Pricing")
);
const Services = lazy(
  () => import("../../components/Layout/Containers/Services")
);
const Testimonials = lazy(
  () => import("../../components/Layout/Containers/Testimonials")
);

const HomePage: Page = {
  name: "Home",
  head: {
    title: "Home",
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
          <Hero />
        </Suspense>
      ),
    },
    {
      index: 1,
      name: "our story",
      component: (
        <Suspense fallback={<div>Loading...</div>}>
          <Services />
        </Suspense>
      ),
    },
    {
      index: 2,
      name: "pricing",
      component: (
        <Suspense fallback={<div>Loading...</div>}>
          <Pricing />
        </Suspense>
      ),
    },
    {
      index: 3,
      name: "testimonials",
      component: (
        <Suspense fallback={<div>Loading...</div>}>
          <Testimonials />
        </Suspense>
      ),
    },
  ],
  subPages: [],
};

export default HomePage;

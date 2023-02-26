import React, { useLayoutEffect } from "react";
import {} from "react";
import { Helmet } from "react-helmet-async";
import { Page, Head, Section } from "../../app/model/app";
import ImageLoader from "../util/ImageLoader";
import Navbar from "./NavBarComponent";
import { useAuth } from "../../app/config/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import IconManager from "../util/IconManager";
import PageSectioNav from "./PageSectionNav";
interface PageProps {
  page: Page;
}

const PageComponent: React.FC<PageProps> = ({ page }) => {
  const [sections, setSections] = React.useState<Section[]>([]);
  const [openSection, setOpenSection] = React.useState<number>(0);
  const [protectedPage, setProtectedPage] = React.useState<boolean>(false);
  const { user } = useAuth();
  const navigator = useNavigate();
  React.useEffect(() => {
    setProtectedPage(page.protected);
  }, [page.protected]);
  React.useLayoutEffect(() => {
    setSections(page.sections);
  }, [page.sections]);
  const srcrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head head={page.head} />
      <Navbar />
      <main className=" w-screen h-screen glass relative overflow-hidden z-10 flex justify-center items-center">
        <PageImage image={page.image ? page.image : "./images/home.webp"} />
        <div className="absolute top-0 left-0 w-full  overflow-y-auto overflow-x-hidden  justify-end items-center bg-black/30 h-screen">
          {sections.map((section, i) => {
            return <PageSection key={i} section={section} />;
          })}
        </div>
        {sections.length > 1 ? (
          <div className="absolute w-full rounded-t-xl p-3 bottom-0 flex flex-wrap mx-auto  gap-1 glass translate-y-[90%] transition-all duration-300 ease-in-out hover:translate-y-0 justify-center items-center z-50  pt-20">
            {sections.map((section, i) => {
              return (
                <PageSectioNav
                  key={i}
                  name={section.name}
                  onClick={() => srcrollToSection(i)}
                />
              );
            })}
          </div>
        ) : null}
        {protectedPage ? (
          user ? null : (
            <div className="absolute top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden  justify-center items-center glass">
              <div className=" h-full flex flex-col justify-center items-center">
                <IconManager
                  name="lock"
                  className="w-20 h-20 text-red-500/95"
                />
                <h3 className=" font-bold text-center first-letter:text-8xl w-4/5">
                  You need to be logged in to view this page
                </h3>
                <button onClick={() => navigator("/login")}>Login</button>
              </div>
            </div>
          )
        ) : null}

        {user ? (
          <div className="absolute bottom-0 left-0 m-5">
            <p className="">{user.name}</p>
          </div>
        ) : null}
      </main>
    </>
  );
};

export default PageComponent;
function Head({ head }: { head: Head }) {
  return (
    <Helmet>
      <title>{head.title}</title>
      <meta name="description" content={head.description} />
      <meta name="keywords" content={head.keywords} />
      <meta name="style" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Kenakare" />
      <link href={head.url} rel="stylesheet"></link>
      <meta property="og:title" content={head.title} />
      <meta property="og:description" content={head.description} />
      <meta property="og:image" content={head.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={head.title} />
      <meta name="twitter:description" content={head.description} />
    </Helmet>
  );
}

function PageImage({ image }: { image: string }) {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <ImageLoader
      src={image}
      className="w-full h-full object-cover fixed top-0 left-0 "
      alt="page image"
      width={dimensions.width}
      height={dimensions.height}
    />
  );
}

export function PageSection({ section }: { section: Section }) {
  return (
    <section
      id={`section-${section.index}`}
      className={`w-full h-screen flex flex-col justify-end  items-center z-10 ${section.name}`}
    >
      {section.component}
    </section>
  );
}

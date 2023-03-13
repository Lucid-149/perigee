import { Link } from "react-router-dom";
import WebPages from "../../app/views/@index";
import { useTheme } from "../../Theme/ThemeContext";
import { useState, useEffect } from "react";
import { Theme } from "../../Theme/Theme";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState("");
  const { darkTheme } = useTheme();
  useEffect(() => {
    const Interval = setInterval(() => {
      const current = WebPages.find(
        (page) => page.url === window.location.pathname
      );
      if (current) {
        setIsActive(current.url);
      }
    }, 100);
    return () => clearInterval(Interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // outside click

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className=" slide-in-blurred-top fixed left-0 right-0 mx-auto top-0 shadow-xl  flex justify-between  items-center  w-[95%] max-w-7xl glass  z-50 hover:shadow-2xl ease-in-out duration-300 rounded-b-xl">
      <div className="flex items-center gap-4 p-5">
        <Link className=" flex gap-3 justify-center items-center" to="/">
          <Icon /> <h3 className=" text-4xl font-semibold">PERIGEE</h3>
        </Link>
      </div>
      <ul
        className={`flex uppercase text-base items-center  px-8 justify-center gap-4  ${
          isMobile ? " hidden" : "flex-row"
        }`}
      >
        {WebPages.map((page, index) => {
          if (page.url !== "*") {
            return (
              <li key={index} className="h-full flex-grow">
                <Link
                  className={` border-yellow-500 border-opacity-50 h-full py-7 transition-all font-semibold ease-in-out duration-500 ${
                    isActive === page.url ? "border-b-4 px-6 " : ""
                  }`}
                  to={page.url}
                >
                  {page.name}
                </Link>
              </li>
            );
          }
          return null;
        })}
        <Link
          className={` border-yellow-500 border-opacity-50 h-full py-7 transition-all font-semibold ease-in-out duration-500 ${
            isActive === "/login" ? "border-b-4 px-6 " : ""
          }`}
          to="/login"
        >
          Login
        </Link>
      </ul>
      <div
        className={` h-full p-3 ${isMobile ? "flex" : "hidden"} cursor-pointer`}
      >
        <div
          title="Toggle Menu"
          onClick={() => toggleMenu()}
          className="flex flex-col justify-center items-center group gap-2 h-14 w-14 rounded-xl ease-in-out duration-300                                                                                                            "
        >
          <span
            className={`w-10 h-[2px] rounded-3xl flex justify-center group-hover:translate-y-1  bg-current items-center transition-all ease-in-out duration-500 `}
          />
          <span
            className={`w-10 h-[2px] rounded-3xl flex justify-center group-hover:translate-y-1  bg-current items-center transition-all ease-in-out duration-500 `}
          />
          <span
            className={`w-10 h-[2px] rounded-3xl flex justify-center group-hover:translate-y-1  bg-current items-center transition-all ease-in-out duration-500 `}
          />
        </div>
      </div>
      {open && isMobile ? (
        <div className="absolute  top-24 left-0 right-0 flex justify-center items-center">
          <div className="flex flex-col glass swing-in-top-fwd w-full overflow-hidden rounded-xl">
            {WebPages.map((page, index) => {
              if (page.url !== "*") {
                return (
                  <Link
                    key={index}
                    onClick={() => toggleMenu()}
                    className="text-2xl p-5  text-center slide-in-blurred-top glass shadow-md hover:bg-transparent ease-in-out duration-300 w-full font-semibold"
                    to={page.url}
                  >
                    {page.name}
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </div>
      ) : null}
    </nav>
  );
  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        className=" w-10 h-10"
        viewBox="0 0 1024 1024"
      >
        <path
          fill={darkTheme ? Theme.Colors.Tertiary : Theme.Colors.Primary}
          d="M512 982.426c-258.79 0-469.33-210.54-469.33-469.33S253.21 43.78 512 43.78s469.33 210.524 469.33 469.315S770.79 982.426 512 982.426zm0-920.587c-248.827 0-451.256 202.435-451.256 451.257 0 248.837 202.43 451.271 451.256 451.271s451.256-202.434 451.256-451.271c0-248.817-202.43-451.257-451.256-451.257z"
        ></path>
        <path
          fill={darkTheme ? Theme.Colors.Tertiary : Theme.Colors.Primary}
          d="M906.1020000000001 473.4a42.527 42.527 0 1085.053 0 42.527 42.527 0 10-85.053 0z"
        ></path>
        <path
          fill={darkTheme ? Theme.Colors.Tertiary : Theme.Colors.Primary}
          d="M948.628 524.948c-28.426 0-51.563-23.116-51.563-51.548s23.132-51.563 51.563-51.563 51.564 23.132 51.564 51.563-23.132 51.548-51.564 51.548zm0-85.048c-18.462 0-33.484 15.032-33.484 33.5 0 18.458 15.022 33.485 33.484 33.485s33.485-15.032 33.485-33.485a33.526 33.526 0 00-33.485-33.5z"
        ></path>
        <path
          fill={darkTheme ? Theme.Colors.Primary : Theme.Colors.Secondary}
          d="M140.887 497.705a281.216 281.216 0 10562.432 0 281.216 281.216 0 10-562.432 0z"
        ></path>
        <path
          fill={darkTheme ? Theme.Colors.Tertiary : Theme.Colors.Primary}
          d="M422.108 787.948c-160.046 0-290.258-130.197-290.258-290.248s130.212-290.248 290.258-290.248S712.366 337.65 712.366 497.7 582.15 787.948 422.108 787.948zm0-562.438c-150.082 0-272.179 122.107-272.179 272.19s122.102 272.19 272.18 272.19S694.286 647.781 694.286 497.7 572.186 225.51 422.108 225.51z"
        ></path>
        <path
          fill="none"
          d="M224.497 525.66a13.414 13.414 0 1026.828 0 13.414 13.414 0 10-26.828 0z"
        ></path>
        <path
          fill="none"
          d="M237.906 546.611a20.972 20.972 0 01-20.94-20.956 20.966 20.966 0 0120.94-20.94 20.972 20.972 0 0120.951 20.94 20.977 20.977 0 01-20.951 20.956zm0-26.839a5.888 5.888 0 10.005 11.776 5.888 5.888 0 00-.005-11.776zM410.87 717.645c-29.107 0-52.798-23.685-52.798-52.833 0-29.108 23.685-52.798 52.798-52.798 29.122 0 52.823 23.685 52.823 52.792 0 29.149-23.7 52.839-52.823 52.839zm0-67.666c-8.172 0-14.833 6.635-14.833 14.833s6.661 14.868 14.833 14.868c8.197 0 14.843-6.671 14.843-14.868s-6.646-14.833-14.843-14.833z"
        ></path>
        <path
          fill="none"
          d="M631.015 479.626a10.921 10.921 0 1021.841 0 10.921 10.921 0 10-21.842 0z"
        ></path>
        <path
          fill="none"
          d="M641.94 498.068c-10.168 0-18.447-8.279-18.447-18.442s8.28-18.442 18.447-18.442 18.443 8.279 18.443 18.442-8.274 18.442-18.443 18.442zm0-21.826a3.39 3.39 0 00-3.389 3.384c0 3.738 6.774 3.738 6.774 0a3.39 3.39 0 00-3.385-3.384z"
        ></path>
        <path
          fill="none"
          d="M277.924 378.49a6.144 6.144 0 1012.288 0 6.144 6.144 0 10-12.288 0z"
        ></path>
        <path
          fill="none"
          d="M270.387 378.486a13.676 13.676 0 1027.351 0 13.676 13.676 0 10-27.35 0z"
        ></path>
        <path
          fill="none"
          d="M615.409 590.044a6.144 6.144 0 1012.288 0 6.144 6.144 0 10-12.288 0z"
        ></path>
        <path
          fill="none"
          d="M621.548 603.72a13.69 13.69 0 01-13.67-13.676c0-7.531 6.133-13.66 13.67-13.66s13.67 6.134 13.67 13.66a13.69 13.69 0 01-13.67 13.676z"
        ></path>
        <path
          fill="none"
          d="M377.068 664.832a33.818 33.818 0 1067.635 0 33.818 33.818 0 10-67.635 0z"
        ></path>
      </svg>
    );
  }
};

export default Navbar;

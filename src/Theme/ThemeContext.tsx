import { Theme } from "./Theme";
import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  darkTheme: false,
  setDarkTheme: (darkTheme: boolean) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const darkTheme = localStorage.getItem("darkTheme") === "true";
    setDarkTheme(darkTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkTheme", darkTheme.toString());
  }, [darkTheme]);

  const stylessheet = document.createElement("style");
  stylessheet.innerHTML = `
  body {
      background-color: ${
        darkTheme ? Theme.Colors.Primary : Theme.Light.Background
      };
      color: ${darkTheme ? Theme.Dark.Text : Theme.Light.Text};
      min-height: 100vh;
      font-size: ${Theme.Font.Size};
    }
    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      background: ${
        darkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.3)"
      };
      height: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      width: 15rem;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: ${darkTheme ? Theme.Light.Background : Theme.Dark.Background};
      cursor: pointer;
    }
    input[type="range"]::-moz-range-thumb {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: ${darkTheme ? Theme.Light.Background : Theme.Dark.Background};
      cursor: pointer;
    }
    input[type="range"]::-ms-thumb {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: ${darkTheme ? Theme.Light.Background : Theme.Dark.Background};
      cursor: pointer;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      width: 100%;
      height: 0.3rem;
      cursor: pointer;
      background: ${
        darkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.3)"
      };
      border-radius: 0.5rem;
    }
    input[type="range"]::-moz-range-track {
      width: 100%;
      height: 0.3rem;
      cursor: pointer;
      background: ${
        darkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.3)"
      };
      border-radius: 0.5rem;
    }
    input[type="range"]::-ms-track {
      width: 100%;
      height: 0.3rem;
      cursor: pointer;
      background: ${
        darkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.3)"
      };
      border-radius: 0.5rem;
    }
    input[type="range"]::-ms-fill-lower {
      background: ${
        darkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.3)"
      };
      border-radius: 0.5rem;
    }

    .glass {
      background: ${
        darkTheme ? "rgba(0, 0, 0,0.5)" : "rgba(239, 239, 239, 0.5);"
      };
     }

    .glass::-webkit-scrollbar {
      width: 0.5rem;
      margin: 0.5rem;
    }
    .glass::-webkit-scrollbar-track {
      background: ${
        darkTheme ? "rgba(0, 0, 0,0.5)" : "rgba(255, 255, 255,0.7)"
      };
      border-radius: 0.5rem;
    }

    .glass::-webkit-scrollbar-thumb {
      background: ${
        darkTheme ? "rgba(255, 255, 255,0.7)" : "rgba(0, 0, 0,0.5)"
      };
      border-radius: 0.5rem;
    }

    .glass::-webkit-scrollbar-thumb:hover {
      background: ${
        darkTheme ? "rgba(255, 255, 255,0.7)" : "rgba(0, 0, 0,0.5)"
      };
    }

    
   a {
      text-decoration: none;
    }

  `;
  document.body.appendChild(stylessheet);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  };

  function ThemeBtn() { 
    return (
      <div
        onClick={() => toggleTheme()}
        className={`${
          darkTheme ? "pl-7" : "bg-gray-200"
        } transition-all duration-300 ease-in-out flex  w-16 items-center glass p-1  rounded-full fixed bottom-4 right-4  z-50`}
      >
        <div
          className={`${
            darkTheme ? "" : ""
          }   text-lg glass w-8 h-8 cursor-pointer rounded-full flex justify-center items-center transform transition-all duration-300 ease-in-out`}
        >
          {darkTheme ? "🌙" : "☀️"}
        </div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
   
        {children}

        <ThemeBtn />
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

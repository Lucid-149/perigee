import { Country } from "../../app/model/CountryHandler";
type CardState = "selected" | "unselected";
type Regions =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania";
interface CountryCardProps {
  country: Country;
  state: CardState;
  onClick: (country: Country) => void;
}

function CountryCard({ country, state, onClick }: CountryCardProps) {
  const handleClick = () => {
    onClick(country);
  };

  const getCardClass = () => {
    switch (state) {
      case "selected":
        return " outline-green-500 hover:outline-red-700 p-2 glass";
      case "unselected":
        return " outline-transparent";
    }
  };

  return (
    <div
      className={`flex flex-col slide-in-blurred-top drop-shadow-xl relative w-full  cursor-pointer ease-in-out duration-300 items-center max-w-[10rem] justify-center gap-1 overflow-hidden rounded-xl ${getCardClass()} outline   `}
      onClick={handleClick}
    >
      <div className="flex flex-col justify-center items-start gap-2 p-1 w-full h-full">
        <h4 className=" text-xl uppercase font-bold">{country.name}</h4>
        <span className="text-xl capitalize">{country.capital}</span>
      </div>
      <div className=" absolute -z-10 right-2 bottom-2">
        <div className=" w-10 relative flex justify-center items-center overflow-hidden rounded-xl h-fit aspect-square">
          {country.flag}
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
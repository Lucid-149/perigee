import Countries, { Country } from "../../../app/model/CountryHandler";
import CountryCard from "../../Containers/CountryCard";
type ItineraryCreatorStage =
  | "select"
  | "create"
  | "edit"
  | "view"
  | "delete"
  | "save";
interface CountrySelectorProps {
  selectedCountry: Country | undefined;
  setSelectedCountry: (country: Country) => void;
  setItineraryCreatorStage: (stage: ItineraryCreatorStage) => void;
}

function CountrySelector({
  selectedCountry,
  setSelectedCountry,
  setItineraryCreatorStage,
}: CountrySelectorProps) {
  const countries = Countries;
  return (
    <div className="flex flex-col items-center justify-center rounded-xl p-5 glass gap-6 py-10 overflow-hidden">
      <h1 className="text-2xl font-bold">Select a country</h1>
      <div className="flex flex-wrap max-w-3xl items-center justify-center w-full gap-5 p-3 overflow-hidden ">
        {countries?.map((country) => {
          return (
            <CountryCard
              key={country.name}
              country={country}
              state={
                country.name === selectedCountry?.name
                  ? "selected"
                  : "unselected"
              }
              onClick={() => {
                setSelectedCountry(country);
                setItineraryCreatorStage("create");
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CountrySelector;

import { useState, useLayoutEffect } from "react";
import { useAuth } from "../../../config/hooks/useAuth";
import FormGenerator from "./FormGenerator";
import { useData } from "../../../config/hooks/useData";
interface Model {
  name:
    | "Tour"
    | "Trip"
    | "Accomodation"
    | "Activity"
    | "Itinerary"
    | "Booking"
    | "Car"
    | "Attraction"
    | null;
}
const CreateComponent = ({ name }: Model) => {

  return (
        <FormGenerator name={name} />
    
  );
};

export default CreateComponent;

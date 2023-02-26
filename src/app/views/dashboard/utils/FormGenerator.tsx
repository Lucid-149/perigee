import { useState } from "react";
import {
  Form,

} from "../../../../components/util/FormManager";
import TripCreateForm from "./Plugins/TripCreate";
import TourApiCalls from "../../../../data/api/routes";
import { useData } from "../../../config/hooks/useData";
import { TripIcon } from "../../../../components/util/icons/tripTypeIcons";
import {
  Accomodation,
  Activity,
  Attraction,
  Booking,
  Car,
  Itinerary,
  Tour,
  Trip,
} from "../../../../data/api/models";

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
export default function FromGenerator({ name }: Model) {
  const [newModel, setNewModel] = useState(name);
  const [newModelName, setNewModelName] = useState("");
  const { trips, attractions } = useData();
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    price: "",
  });

  if (newModel === "Tour") {
    return (
      <div className=" flex flex-co gap-2">
        <h6>From Generator</h6>
        <Form
          initialValues={{ initialValues }}
          onSubmit={(values: any) => {
            console.log(values);
          }}
          Inputs={<></>}
        />
      </div>
    );
  } else if (newModel === "Trip") {
    return (
     <TripCreateForm/>
    );
  } else if (newModel === "Accomodation") {
    return (
      <div className=" flex flex-co gap-2l">
        <h6>From Generator</h6>
        <Form
          initialValues={{ initialValues }}
          onSubmit={(values: any) => {
            console.log(values);
          }}
          Inputs={<></>}
        />
      </div>
    );
  } else if (newModel === "Activity") {
    return (
      <div className=" flex flex-co gap-2l">
        <h6>From Generator</h6>
        <Form
          initialValues={{ initialValues }}
          onSubmit={(values: any) => {
            console.log(values);
          }}
          Inputs={<></>}
        />
      </div>
    );
  } else if (newModel === "Itinerary") {
    return (
      <div className=" flex flex-co gap-2l">
        <h6>From Generator</h6>
        <Form
          initialValues={{ initialValues }}
          onSubmit={(values: any) => {
            console.log(values);
          }}
          Inputs={<></>}
        />
      </div>
    );
  } else if (newModel === "Car") {
    return (
      <div className=" flex flex-co gap-2l">
        <h6>From Generator</h6>
        <Form
          initialValues={{ initialValues }}
          onSubmit={(values: any) => {
            console.log(values);
          }}
          Inputs={<></>}
        />
      </div>
    );
  } else if (newModel === "Attraction") {
    return (
      <div className=" flex flex-co gap-2l">
        <h6>From Generator</h6>
        <Form
          initialValues={{ initialValues }}
          onSubmit={(values: any) => {
            console.log(values);
          }}
          Inputs={<></>}
        />
      </div>
    );
  } else if (newModel === "Booking") {
    return (
      <div className=" flex flex-co gap-2l">
        <h6>From Generator</h6>
        <Form
          initialValues={{ initialValues }}
          onSubmit={(values: any) => {
            console.log(values);
          }}
          Inputs={<></>}
        />
      </div>
    );
  } else if (newModel === "Car") {
    return (
      <div className=" flex flex-co gap-2l">
        <h6>From Generator</h6>
        <Form
          initialValues={{ initialValues }}
          onSubmit={(values: any) => {
            console.log(values);
          }}
          Inputs={<></>}
        />
      </div>
    );
  } else if (newModel === null) {
    return <div></div>;
  }

  return <div></div>;
}

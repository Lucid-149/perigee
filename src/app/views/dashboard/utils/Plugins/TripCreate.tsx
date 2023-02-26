import {
  SelectInput,
  TextInput,
  NumberInput,
  TextAreaInput,
  MultiSelectInput,
  SubmitButton,
  Form,
} from "../../../../../components/util/FormManager";
import Icons from "../../../../../components/util/IconManager";
import { PrimaryBtn } from "../../../../../components/Containers";
import TourApiCalls from "../../../../../data/api/routes";

import { useData } from "../../../../config/hooks/useData";

import TypeIcon, {
  TripIcon,
} from "../../../../../components/util/icons/tripTypeIcons";
import { useState } from "react";

import { Trip } from "../../../../../data/api/models";
import CardComponent from "../../../../../components/Layout/CardComponet";
export default function TripCreateForm() {
  type Stages = "Location" | "Attractions" | "Details" | "Review" | "Complete";
  const { trips, attractions } = useData();
  const [stage, setStage] = useState<Stages>("Location");
  const [tripValues, setTripValues] = useState<Trip>({
    name: "",
    description: "",
    start_location: "",
    end_location: "",
    distance: 0,
    type: "",
    country: "",
    attractions: [],
  });

  function handleNext() {
    if (stage === "Location") {
      setStage("Attractions");
    } else if (stage === "Attractions") {
      setStage("Details");
    } else if (stage === "Details") {
      setStage("Review");
    } else if (stage === "Review") {
      setStage("Complete");
    }
  }
  function handleBack() {
    if (stage === "Attractions") {
      setStage("Location");
    } else if (stage === "Details") {
      setStage("Attractions");
    } else if (stage === "Review") {
      setStage("Details");
    } else if (stage === "Complete") {
      setStage("Review");
    }
  }

  return (
    <CardComponent
      className=" py-10 h-[80vh] w-4/5 max-w-7xl mb-5 overflow-auto"
      title={"Trip Create"}
      state={{
        type:
          stage === "Location"
            ? "info"
            : stage === "Attractions"
            ? "info"
            : stage === "Details"
            ? "success"
            : stage === "Review"
            ? "warning"
            : stage === "Complete"
            ? "success"
            : "info",
        state: "normal",
      }}
    >
      <Form
        initialValues={{ tripValues }}
        onSubmit={(values: any) => {
          console.log(values);
        }}
        Inputs={
          <div className=" justify-center items-center w-4/5 h-[65vh] overflow-auto flex-grow flex gap-5 flex-wrap">
            {stage === "Location" && (
              <div className=" w-full relative  h-full flex justify-between items-center  py-10 flex-col gap-2">
                <TextInput
                  name="name"
                  label="Trip Name"
                  value={tripValues.name}
                  onChange={(event: any) => {
                    setTripValues({ ...tripValues, name: event.target.value });
                  }}
                />
                <TextInput
                  name="country"
                  label="Country"
                  value={tripValues.country}
                  onChange={(event: any) => {
                    setTripValues({
                      ...tripValues,
                      country: event.target.value,
                    });
                  }}
                />

                <div className=" flex gap-2 w-full flex-wrap justify-center items-center">
                  <TextInput
                    name="start_location"
                    label="Start Location"
                    value={tripValues.start_location}
                    onChange={(event: any) => {
                      setTripValues({
                        ...tripValues,
                        start_location: event.target.value,
                      });
                    }}
                  />
                  <TextInput
                    name="end_location"
                    label="End Location"
                    value={tripValues.end_location}
                    onChange={(event: any) => {
                      setTripValues({
                        ...tripValues,
                        end_location: event.target.value,
                      });
                    }}
                  />
                  <NumberInput
                    name="distance"
                    label="Distance"
                    units="km"
                    value={tripValues.distance}
                    onChange={(event: any) => {
                      setTripValues({
                        ...tripValues,
                        distance: event.target.value,
                      });
                    }}
                  />
                </div>
                <div className=" absolute bottom-0 left-0 opacity-30 -z-20">
                  <Icons name="map" className="w-20 " />
                </div>
              </div>
            )}
            {stage === "Attractions" && (
              <div className=" w-full flex-wrap flex justify-center items-center gap-1 ">
                <div className=" max-w-xs flex flex-col gap-3">
                  <SelectInput
                    name="type"
                    label="Type"
                    value={tripValues.type}
                    onChange={(event: any) => {
                      setTripValues({
                        ...tripValues,
                        type: event.target.value,
                      });
                    }}
                    options={[
                      { lable: "Drive", value: { type: "Drive" } },
                      { lable: "Flight", value: { type: "Flight" } },
                      { lable: "Train", value: { type: "Train Ride" } },
                      { lable: "Bus", value: { type: "Bus" } },
                      { lable: "Boat", value: { type: "Boat" } },
                      { lable: "Walk", value: { type: "Walk" } },
                    ]}
                  />
                </div>
                <div className=" max-w-xs flex flex-col gap-3">
                  <MultiSelectInput
                    name="attractions"
                    label="Attractions"
                    value={tripValues.attractions}
                    onChange={(event: any) => {
                      setTripValues({
                        ...tripValues,
                        attractions: event.target.value,
                      });
                    }}
                    options={attractions?.map((attraction) => {
                      return {
                        lable: attraction.name,
                        value: attraction.id,
                        country: attraction.country,
                        des: attraction.exerpt,
                      };
                    })}
                  />
                </div>
              </div>
            )}
            {stage === "Details" && (
              <TextAreaInput
                name="description"
                label="Description"
                value={tripValues.description}
                onChange={(event: any) => {
                  setTripValues({
                    ...tripValues,
                    description: event.target.value,
                  });
                }}
              />
            )}
            {stage === "Review" && (
              <div className=" w-full h-full  rounded-xl overflow-auto">
                <h3 className=" text-3xl uppercase border-b  p-3">
                  <small>Review your trip</small>
                </h3>
                <div className=" flex gap-4 flex-wrap p-3 w-fit justify-center items-center">
                  <h3>
                    <small>Name:</small>
                    {tripValues.name}
                  </h3>
                </div>
                <div className=" flex gap-4 flex-wrap p-3 w-fit justify-center items-center">
                  <h4>
                    Country:
                    <small>{tripValues.country}</small>
                  </h4>
                </div>
                <div className=" flex gap-4 flex-wrap p-3 w-fit justify-center items-center">
                  <h3 className="text-base">
                    <small>Start Location: </small> {tripValues.start_location}
                  </h3>
                  <h3 className="text-base">
                    <small>End Location: </small> {tripValues.end_location}
                  </h3>
                </div>
                <div className=" flex gap-4 flex-col p-3 w-fit justify-start items-start">
                  <h4>Distance: {tripValues.distance} Km</h4>
                  <TypeIcon type={tripValues.type} />
                </div>
                <div className=" flex gap-4 flex-col p-3 w-fit justify-start items-start">
                  <h5>Description:</h5>
                  <p>{tripValues.description}</p>
                </div>
                <div className=" flex gap-4 flex-col p-3 w-fit justify-start items-start">
                  <h5>
                    Attractions:{" "}
                    {attractions
                      ?.filter((attraction) => {
                        return tripValues.attractions?.includes(
                          attraction.id as any
                        );
                      })
                      .map((attraction) => {
                        return attraction.name;
                      })}
                  </h5>
                </div>
              </div>
            )}
            {stage === "Complete" && (
              <div className=" w-full flex justify-center items-center gap-3 h-full py-32 drop-shadow-xl min-h-[320px] ">
                <div className=" w-full max-w-mdflex flex-col gap-3">
                  <p>All done! Push to the server</p>
                  <SubmitButton label="Complete" />
                  <PrimaryBtn
                    Type="primary"

                    onClick={() => {
                      setStage("Location");
                    } } Text={"Start"}                    />
                
                </div>
              </div>
            )}
            {stage !== "Location" && (
              <div className=" glass rounded-full bottom-2 aspect-square flex justify-center items-center w-20 hover:shadow-lg absolute  left-2">
                <button
                  name="back"
                  title="back"
                  onClick={handleBack}
                  className="  w-fit p-4 hover:p-5 z-40 bottom-0 rounded-full overflow-hidden glass backdrop-blur-md "
                >
                  <Icons name="prev" />
                </button>
              </div>
            )}
            {stage !== "Complete" && (
              <div className=" glass rounded-full bottom-2 aspect-square flex justify-center items-center w-20 hover:shadow-lg absolute  right-2">
                <button
                  name="next"
                  title="next"
                  onClick={handleNext}
                  className="  w-fit p-4 hover:p-5 z-40 bottom-0 rounded-full overflow-hidden glass backdrop-blur-md "
                >
                  <Icons name="next" className="w-6" />
                </button>
              </div>
            )}
          </div>
        }
      />
    </CardComponent>
  );
}

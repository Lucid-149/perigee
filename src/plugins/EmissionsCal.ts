import { Trip } from '../data/api/models';
export type tripType =
| "Flight"
| "Train Ride"
| "Bus"
| "Drive"
| "Boat"
| "Walk"
| "Bike"
| "Other";
const getCarbonFootprintStringWithUnit = (type: tripType,trip:Trip) => {
const transportEmissions = [
  // emissions in kg per km
  { mode: "Flight", emissions: 0.12 },
  { mode: "Train ride", emissions: 0.04 },
  { mode: "Bus", emissions: 0.089 },
  { mode: "Drive", emissions: 0.255 },
  { mode: "Boat", emissions: 0.0025 },
  { mode: "Walk", emissions: 0 },
  { mode: "Bike", emissions: 0 },
];
const getEmissions = (type: tripType) => {
  const emissions = transportEmissions.find((item) => item.mode === type);
  return emissions?.emissions;
};
const getCarbon = (type: tripType,trip:Trip) => {
  const emissions = getEmissions(type);
  const carbon = emissions ? emissions *  trip.distance : 0;
    return carbon;
};
const getCarbonFootprintString = (type: tripType,trip:Trip) => {
    const carbon = getCarbon(type,trip);
    const carbonFootprintString = carbon ? `${carbon} kg` : "No data";
    return carbonFootprintString;

};
return getCarbonFootprintString(type,trip);
};
export default function EmissionsCalPlugin() {
  return {
    name: "EmissionsCalPlugin",
    getCarbonFootprintStringWithUnit,
  };
}
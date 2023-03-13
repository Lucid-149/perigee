import EmissionsCalPlugin, { tripType } from "./EmissionsCal";

type offsetType =
  | "Tree Planting"
  | "Environmental Cleanup"
  | "Renewable Energy";

import { Trip } from "../data/api/models";

const getOffsetStringWithUnit = (
  offset: offsetType,
  trip: Trip,
  type: tripType
) => {
  const TotalEmissions = EmissionsCalPlugin().getCarbonFootprintStringWithUnit(
    type,
    trip
  );

  // turn string into number
  const TotalEmissionsNumber = Number(TotalEmissions.replace(/[^0-9.-]+/g, ""));

  // get offset
  const distributionOfOffsetWork = [
    { offset: "Tree Planting", offsetWork: 0.5 },
    { offset: "Environmental Cleanup", offsetWork: 0.3 },
    { offset: "Renewable Energy", offsetWork: 0.2 },
  ];

  const getOffset = () => {
    if (TotalEmissionsNumber === 0) {
      return 0;
    } else if (TotalEmissionsNumber !== 0) {
      // get how much of the offset is Tree Planting
      const Trees =
        TotalEmissionsNumber * distributionOfOffsetWork[0].offsetWork;
      // get how much of the offset is Environmental Cleanup
      const Cleanup =
        TotalEmissionsNumber * distributionOfOffsetWork[1].offsetWork;
      // get how much of the offset is Renewable Energy
      const Energy =
        TotalEmissionsNumber * distributionOfOffsetWork[2].offsetWork;
      return [Trees, Cleanup, Energy];
    }
  };
  function getTotalTrees() {
    const Trees = getOffset();
    return Trees ? Trees[0] : 0;
  }
  function getTotalCleanup() {
    const Cleanup = getOffset();
    return Cleanup ? Cleanup[1] : 0;
  }
  function getTotalEnergy() {
    const Energy = getOffset();
    return Energy ? Energy[2] : 0;
  }
  const TotalTreesPlanted = () => {
    const Trees = getTotalTrees();
    // number of trees planted at 20kg per tree (https://www.footprintnetwork.org/our-work/footprint-calculator/)
    if (Trees === 0) {
      return "No data";
    } else if (Trees !== 0 && Trees < 21) {
      return "1 tree planted";
    } else if (Trees !== 0 && Trees > 21) {
      const TreesPlanted = Trees / 20;
      return `${TreesPlanted} trees planted`;
    }
  };
  const TotalCleanup = () => {
    const Cleanup = getTotalCleanup();
    // number of cleanup at 10kg per cleanup
    const CleanupDone = Cleanup / 10;
    return CleanupDone;
  };
  return [TotalTreesPlanted(), TotalCleanup(), getOffset()];
};

export default function OffsetCalPlugin() {
  return {
    name: "OffsetCalPlugin",
    getOffsetStringWithUnit,
  };
}

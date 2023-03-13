import React from 'react'
type stage = "Set Year" | "Set Month" | "Set Day" | "Set Date";

interface YearSelectorProps {
  years: number[];
  selectedYear: number;
 setYear: React.Dispatch<React.SetStateAction<number>>;
 setStage: React.Dispatch<React.SetStateAction<stage>>;
 }
 
const YearSelector:React.FC<YearSelectorProps> = (props) => {

    return (
        <div className=' flex flex-col font-semibold'>
            <h4>Set year you wish to vist</h4>
            <p>
              Select the year you want to travel in. If you are not sure, select
              the current year.
            </p>
            <div className=" flex flex-wrap gap-3 justify-center items-center">
              {props.years.map((year) => (
                <button
                className={`aspect-square text-base uppercase font-semibold hover:bg-green-800 hover:bg-gradient-to-br from-green-900/90 to-green-700/70 hover:text-white hover:rotate-12 ${
                  props.selectedYear === year ? " border-none p-10" : ""
                }`}
                  onClick={() => {
                    props.setYear(year);
                    props.setStage("Set Month");
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
    )
    
}

export default YearSelector
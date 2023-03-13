import React from 'react'
type stage = "Set Year" | "Set Month" | "Set Day" | "Set Date";

interface MonthSelectorProps {
  months: number[];
  selectedMonth: number;
 setMonth: React.Dispatch<React.SetStateAction<number>>;
 setStage: React.Dispatch<React.SetStateAction<stage>>;
 }
 
const YearSelector:React.FC<MonthSelectorProps> = (props) => {
  function monthName(month: number) {
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[month - 1];
  }

    return (
      <div className=" grid rounded-xl overflow-hidden">
      <h4>Set Month</h4>
      <p>
        Select the month you would like to travel in. You can change this later.
      </p>
      <div className=" grid grid-cols-6 gap-1 p-6 justify-center items-center max-w-3xl">
        {props.months.map((month) => (
          <button
          className={`aspect-square text-base uppercase font-semibold hover:bg-green-800 hover:bg-gradient-to-br from-green-900/90 to-green-700/70 hover:text-white hover:rotate-12 ${
            props.selectedMonth === month ? " border-none p-10 outline" : ""
          }`}

            onClick={() => {
              props.setMonth(month);
              props.setStage("Set Day");
            }}
          >
            {monthName(month)}
          </button>
        ))}
      </div>
    </div>
    )
    
}

export default YearSelector
import React from "react";
type stage = "Set Year" | "Set Month" | "Set Day" | "Set Date";
type Days =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

interface DaySelectorProps {
  month: number;
  year: number;
  selectedDay: number;
  setDay: React.Dispatch<React.SetStateAction<number>>;
  setStage: React.Dispatch<React.SetStateAction<stage>>;
}

const DaySelector: React.FC<DaySelectorProps> = (props) => {
  function dayName(year: number, month: number, day: number) {
    let dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return dayNames[new Date(year, month - 1, day).getDay()];
  }

  function getDaysInMonth(month: number, year: number) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  type Days = {
    day: number;
    dayName:
      | "Sunday"
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday";
  }[];
  const [Days, setDays] = React.useState<Days>([]);
  React.useEffect(() => {
    const days = getDaysInMonth(props.month, props.year);
    const daysWithDayNames = days.map((day) => {
      return {
        day: day.getDate(),
        dayName: dayName(props.year, props.month, day.getDate()),
      };
    });
    setDays(daysWithDayNames as Days);
  }, [props.month, props.year]);

  return (
    <div className="">
      <h6 className=" uppercase font-semibold">Set Day</h6>
      {Days.length > 0 ? (
        <div className=" flex gap-1 justify-center items-start p-1">
          <div className=" flex flex-col h-full items-center gap-0 rounded-xl n p-1">
            <h6 className=" uppercase font-semibold">Sun</h6>
            {Days.map((day) => {
              if (day.dayName === "Sunday") {
                return (
                  <button
                    className={` p-2 aspect-square text-base uppercase font-semibold hover:bg-green-800 hover:bg-gradient-to-br from-green-900/90 to-green-700/70 hover:text-white hover:rotate-12 w-full m-2 ${
                      props.selectedDay === day.day ? " outline":""
                    }`}
                    onClick={() => {
                      props.setDay(day.day);
                      props.setStage("Set Date");
                    }}
                  >
                    {day.day}
                  </button>
                );
              }
            })}
          </div>
          <div className=" flex flex-col h-full items-center gap-0 rounded-xl n p-1">
            <h6 className=" uppercase font-semibold">Mon</h6>
            {Days.map((day) => {
              if (day.dayName === "Monday") {
                return (
                  <button
                    className={` p-2 aspect-square text-base uppercase font-semibold hover:bg-green-800 hover:bg-gradient-to-br from-green-900/90 to-green-700/70 hover:text-white hover:rotate-12 w-full m-2 ${
                      props.selectedDay === day.day ? " outline":""
                    }`}
                    onClick={() => {
                      props.setDay(day.day);
                      props.setStage("Set Date");
                    }}
                  >
                    {day.day}
                  </button>
                );
              }
            })}
          </div>
          <div className=" flex flex-col h-full items-center gap-0 rounded-xl n p-1">
            <h6 className=" uppercase font-semibold">Tue</h6>
            {Days.map((day) => {
              if (day.dayName === "Tuesday") {
                return (
                  <button
                    className={` p-2 aspect-square text-base uppercase font-semibold hover:bg-green-800 hover:bg-gradient-to-br from-green-900/90 to-green-700/70 hover:text-white hover:rotate-12 w-full m-2 ${
                      props.selectedDay === day.day ? " outline":""
                    }`}
                    onClick={() => {
                      props.setDay(day.day);
                      props.setStage("Set Date");
                    }}
                  >
                    {day.day}
                  </button>
                );
              }
            })}
          </div>
          <div className=" flex flex-col h-full items-center gap-0 rounded-xl n p-1">
            <h6 className=" uppercase font-semibold">Wed</h6>
            {Days.map((day) => {
              if (day.dayName === "Wednesday") {
                return (
                  <button
                    className={` p-2 aspect-square text-base uppercase font-semibold hover:bg-green-800 hover:bg-gradient-to-br from-green-900/90 to-green-700/70 hover:text-white hover:rotate-12 w-full m-2 ${
                      props.selectedDay === day.day ? " outline":""
                    }`}
                    onClick={() => {
                      props.setDay(day.day);
                      props.setStage("Set Date");
                    }}
                  >
                    {day.day}
                  </button>
                );
              }
            })}
          </div>
          <div className=" flex flex-col h-full items-center gap-0 rounded-xl n p-1">
            <h6 className=" uppercase font-semibold">Thur</h6>
            {Days.map((day) => {
              if (day.dayName === "Thursday") {
                return (
                  <button
                    className={` p-2 aspect-square text-base uppercase font-semibold hover:bg-green-800 hover:bg-gradient-to-br from-green-900/90 to-green-700/70 hover:text-white hover:rotate-12 w-full m-2 ${
                      props.selectedDay === day.day ? " outline":""
                    }`}
                    onClick={() => {
                      props.setDay(day.day);
                      props.setStage("Set Date");
                    }}
                  >
                    {day.day}
                  </button>
                );
              }
            })}
          </div>
          <div className=" flex flex-col h-full items-center gap-0 rounded-xl n p-1">
            <h6 className=" uppercase font-semibold">Fri</h6>
            {Days.map((day) => {
              if (day.dayName === "Friday") {
                return (
                  <button
                    className={` p-2 aspect-square text-base uppercase font-semibold hover:bg-green-800 hover:bg-gradient-to-br from-green-900/90 to-green-700/70 hover:text-white hover:rotate-12 w-full m-2 ${
                      props.selectedDay === day.day ? " outline":""
                    }`}
                    onClick={() => {
                      props.setDay(day.day);
                      props.setStage("Set Date");
                    }}
                  >
                    {day.day}
                  </button>
                );
              }
            })}
          </div>
          <div className=" flex flex-col h-full items-center gap-0 rounded-xl n p-1">
            <h6 className=" uppercase font-semibold">Sat</h6>
            {Days.map((day) => {
              if (day.dayName === "Saturday") {
                return (
                  <button
                    className={` p-2 aspect-square text-base uppercase font-semibold hover:bg-green-800 hover:bg-gradient-to-br from-green-900/90 to-green-700/70 hover:text-white hover:rotate-12 w-full m-2 ${
                      props.selectedDay === day.day ? " outline":""
                    }`}
                    onClick={() => {
                      props.setDay(day.day);
                      props.setStage("Set Date");
                    }}
                  >
                    {day.day}
                  </button>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <div className=" min-w-[320px] bg-red-500/25 rounded-xl border-red-600/30 border-2  flex justify-center items-center aspect-video">
          <h4 className=" uppercase font-semibold">No Days available</h4>
          <p>
            <span className=" text-red-600 font-semibold">!</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DaySelector;

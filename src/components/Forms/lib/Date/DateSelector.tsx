import { useState, useEffect, SetStateAction } from "react";
import StageSequence, { Stage } from "../../../Containers/MultiStage";
import YearSelector from "./lib/YearSelector";
import MonthSelector from "./lib/MonthSelector";
import DaySelector from "./lib/DaySelector";
import IconManager from "../../../util/IconManager";
interface DateSelectorProps {
  date: Date;
  maxDays?: number;
  minDays?: number;
  dateRange?: {
    start: Date;
    end: Date;
  };
}
type stage = "Set Year" | "Set Month" | "Set Day" | "Set Date";

export default function DateSelector(props: DateSelectorProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(props.date);
  const [year, setYear] = useState<number>(
    props.dateRange?.start?.getFullYear() || new Date().getFullYear()
  );
  const [month, setMonth] = useState<number>(
    props.dateRange?.start?.getMonth() || new Date().getMonth()
  );
  const [day, setDay] = useState<number>(
    props.dateRange?.start?.getDate() || new Date().getDate()
  );
  const [stage, setStage] = useState<stage>("Set Year");
  /// all  months with dateRange if not set month with the one year of current date
  type Year = {
    name: string;
    leap: boolean;
  };
  type month = {
    year: Year;
    name: string;
    days: number;
  };
  type day = {
    month: month;
    name: string;
    date: number;
  };

  class monthsConstructor {
    year: Year;
    name: string;
    days: number;
    constructor(year: Year, name: string, days: number) {
      this.year = year;
      this.name = name;
      this.days = days;
    }
  }

  class daysConstructor {
    month: month;
    name: string;
    date: number;
    constructor(month: month, name: string, date: number) {
      this.month = month;
      this.name = name;
      this.date = date;
    }
  }

  class yearsConstructor {
    name: string;
    leap: boolean;
    constructor(name: string, leap: boolean) {
      this.name = name;
      this.leap = leap;
    }
  }

  const [months, setMonths] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  const [days, setDays] = useState<number>(0);
  const [years, setYears] = useState<number[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<month>(
    new monthsConstructor(new yearsConstructor("2021", false), "January", 31)
  );
  const [selectedYear, setSelectedYear] = useState<Year>(
    new yearsConstructor("2021", false)
  );
  const [selectedDay, setSelectedDay] = useState<day>(
    new daysConstructor(
      new monthsConstructor(new yearsConstructor("2021", false), "January", 31),
      "Monday",
      1
    )
  );

  function getDaysInMonth(month: number, year: number) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  function getYearsInDateRange(start: Date, end: Date) {
    var years = [];
    for (var i = start.getFullYear(); i <= end.getFullYear(); i++) {
      years.push(i);
    }
    return years;
  }

  useEffect(() => {
    if (props.dateRange) {
      setYears(getYearsInDateRange(props.dateRange.start, props.dateRange.end));
    } else {
      setYears([new Date().getFullYear()]);
    }
  }, []);

  useEffect(() => {
    if (props.dateRange) {
      if (
        year === props.dateRange.start.getFullYear() &&
        month === props.dateRange.start.getMonth()
      ) {
        setDays(getDaysInMonth(month, year).length);
      } else {
        setDays(new Date().getDate());
      }
    }
  }, [month]);
  function getSelectedDate(year: number, month: number, day: number) {
    return new Date(year, month, day);
  }
  const SequencedStages: Stage[] = [
    {
      name: "Set Year",
      component: () => (
        <YearSelector years={years} setYear={setYear} setStage={setStage} selectedYear={year} />
      ),
      next: "Set Month",
    },
    {
      name: "Set Month",
      component: () => (
        <MonthSelector

          months={months}
          setMonth={setMonth}
          selectedMonth={month}
          setStage={setStage}
        />
      ),
      next: "Set Day",
    },
    {
      name: "Set Day",
      component: () => (
        <DaySelector
          month={month}
          year={year}
          selectedDay={day}
          setDay={setDay}
          setStage={setStage}
        />
      ),
      next: "Set Date",
    },
    {
      name: "Set Date",
      component: () => (
        <div>
          <h1>{getSelectedDate(year, month, day).toDateString()}</h1>
          <button
            className="flex w-full justify-between items-center hover:px-12 hover:to-green-800 bg-gradient-to-br font-semibold hover:from-emerald-600 hover:text-white"
            onClick={() => setSelectedDate(getSelectedDate(year, month, day))}
          >
            <h4>Confrim</h4>
            <IconManager name="check" className="w-12" />
          </button>
        </div>
      ),
      next: null,
    },
  ];
  return (
    <div>
      <div className=" font-semibold flex w-full justify-between ">
        <div className="flex flex-row gap-1">

        <div className=" flex flex-col justify-center items-center glass w-24 rounded-xl overflow-hidden aspect-square">
          <h5>Day</h5>
          <p>{selectedDate?.getDate()}</p>
        </div>
        <div className=" flex flex-col justify-center items-center glass w-24 rounded-xl overflow-hidden aspect-square">
          <h5>Month</h5>
          <p>{selectedDate?.getMonth()}</p>
        </div>
        <div className=" flex flex-col justify-center items-center glass w-24 rounded-xl overflow-hidden aspect-square">
          <h5>Year</h5>
          <p>{selectedDate?.getFullYear()}</p>
        </div>
        </div>
      </div>
      <StageSequence stages={SequencedStages} />
    </div>
  );
}

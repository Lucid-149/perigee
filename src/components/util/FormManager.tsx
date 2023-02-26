import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import IconManager, { TripIcon } from "./icons/tripTypeIcons";
import { PrimaryBtn } from "../Containers";
function TextInput({ name, label, value, onChange }: any) {
  return (
    <div className=" flex flex-col gap-2 w-full max-w-md">
      <label
        className=" px-3  uppercase text-xs font-semibold opacity-0 hidden"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
        className="placeholder:first-letter:text-8xl hover:p-7 transition-all duration-300 ease-in-out w-full backdrop-blur"
      />
    </div>
  );
}
function MultiSelectInput({ name, label, value, onChange, options }: any) {
  return (
    <div className=" flex flex-col gap-2 mt-3  relative overflow-auto p-2 rounded-xl">
      <label
        className=" mb-1 glass p-4 rounded-xl overflow-hidden uppercase text-xl font-semibold"
        htmlFor={name}
      >
        {label}
      </label>
      <ul className=" flex flex-wrap p-2 max-h-[50vh] overflow-auto justify-center items-center gap-2 ">
        {options?.map(
          (
            option: {
              country:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              value: string | number | readonly string[] | undefined;
              lable:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              des:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            },
            i: Key | null | undefined
          ) => (
            <li
              key={i}
              className="flex relative flex-row gap-2 group rounded-xl justify-center items-center w-full"
            >
              <input
                type="checkbox"
                name={name}
                value={option.value}
                onChange={onChange}
                checked={value.includes(option.value)}
                className=" opacity-0 peer absolute z-10 w-full h-full"
              />

              <label className="flex peer-checked:bg-sky-500/10 overflow-hidden transition-all ease-in-out duration-300 flex-col items-start justify-start p-2 -500 glass outline h-28 w-full outline-transparent  rounded-xl cursor-pointer peer-checked:outline-emerald-500  peer-checked: hover:bg-gray-50/5 ">
                <h4 className="text-xl font-semibold w-11/12">
                  {option.lable}
                </h4>
                <span className="text-xs flex items-center border-r border-l rounded-b-xl justify-center glass font-semibold  ease-in-out duration-300 border-b border-slate-800/10 transition-all group-hover:bg-inherit group-hover:text-sky-500 absolute -right-6 text-center uppercase top-9 w-20  h-8 rotate-90 overflow-hidden z-20 text-current/20">
                  {option.country}
                </span>

                <p className=" text-lg text-ellipsis overflow-hidden h-2/3 leading-tight w-11/12 ">
                  {option.des}
                </p>
              </label>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
function SelectInput({ name, label, value, onChange, options }: any) {
  return (
    <div className=" flex flex-col gap-2 mt-3  relative overflow-auto p-2 rounded-xl">
      <label
        className=" mb-1 glass p-4 rounded-xl overflow-hidden uppercase text-xl font-semibold"
        htmlFor={name}
      >
        Choose {label}
      </label>
      <ul className=" flex flex-wrap p-2 max-h-[50vh] overflow-auto justify-center drop-shadow-lg to-transparent items-center gap-2 ">
        {options?.map(
          (
            option: {
              country:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              value: TripIcon;
              lable:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              des:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            },
            i: Key | null | undefined
          ) => (
            <li
              key={i}
              className="flex flex-col relative gap-2  rounded-xl group  justify-center items-center w-24"
            >
              <input
                type="checkbox"
                name={name}
                value={option.value.type?.toString()}
                onChange={onChange}
                checked={value.includes(option.value.type)}
                className=" opacity-0 peer absolute z-30 w-full h-full"
              />
              <div className=" peer-checked:drop-shadow-2xl  shadow-emerald-600 absolute z-20 peer-checked:bg-emerald-600/25 w-full h-full flex justify-center items-center flex-col">
                <IconManager type={option.value.type} />
                <h5 className="text-xs mt-1 font-semibold">{option.lable}</h5>
              </div>
              <label className="flex flex-col items-start justify-start p-4 w-full aspect-square glass outline outline-transparent  rounded-xl cursor-pointer peer-checked:outline-emerald-500  peer-checked: hover:bg-gray-50/5 ">
                <span className=" text-lg text-ellipsis overflow-hidden h-2/3">
                  {option.des}
                </span>
              </label>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
function NumberInput({ name, label, value, onChange, units }: any) {
  function handleAdd() {
    onChange({ target: { name, value: value + 1 } });
  }
  function handleSub() {
    onChange({ target: { name, value: value - 1 } });
  }

  return (
    <div className=" flex glass px-20 flex-col gap-2 mt-1 w-fit max-w-sm p-1 rounded-xl overflow-hidden justify-center items-center">
      <label
        className=" px-3  uppercase text-xl font-semibold flex justify-center items-center flex-col"
        htmlFor={name}
      >
        {label}
        <input
          type="number"
          className="backdrop-blur-0  w-fit max-w-[10rem] h-20 text-5xl border-none text-center outline-none"
          name={name}
          value={value}
          onChange={onChange}
        />
        {units}
      </label>
      <div className="flex flex-row gap-2 w-full justify-center items-center">
        <button
          className=" text-xl h-12 bg-gray-50/10 rounded-xl flex justify-center items-center"
          onClick={handleSub}
        >
          +
        </button>
        <button
          className=" text-xl h-12 bg-gray-50/10 rounded-xl flex justify-center items-center"
          onClick={handleAdd}
        >
          -
        </button>
      </div>
    </div>
  );
}

function DateInput({ name, label, value, onChange }: any) {
  return (
    <div className=" flex flex-col gap-2 mt-3">
      <label className=" px-3  uppercase text-xs font-semibold" htmlFor={name}>
        {label}
      </label>
      <input type="date" name={name} value={value} onChange={onChange} />
    </div>
  );
}
function CheckboxInput({ name, label, value, onChange }: any) {
  return (
    <div className=" flex flex-col gap-2 mt-3">
      <label className=" px-3  uppercase text-xs font-semibold" htmlFor={name}>
        {label}
      </label>
      <input type="checkbox" name={name} value={value} onChange={onChange} />
    </div>
  );
}
function RadioInput({ name, label, value, onChange, options }: any) {
  return (
    <div className=" flex flex-col gap-2 mt-3">
      <label className=" px-3  uppercase text-xs font-semibold" htmlFor={name}>
        {label}
      </label>
      {options.map((option: any) => (
        <div key={option.value}>
          <label
            className=" px-3  uppercase text-xs font-semibold"
            htmlFor={option.value}
          >
            {option.label}
          </label>
          <input type="radio" name={name} onChange={onChange} />
        </div>
      ))}
    </div>
  );
}
function TextAreaInput({ name, label, value, onChange }: any) {
  return (
    <div className=" flex flex-col gap-2 mt-3 w-full">
      <label className=" px-3  uppercase text-xs font-semibold" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="  p-5 bg-none outline-none bg-transparent text-lg "
        placeholder={`Enter ${label}...`}
        rows={12}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
function SubmitButton({ label,onClick }: any) {
  return <PrimaryBtn type="submit" Type="Success" Text={label} onClick={onClick} />
}

function Form({ initialValues, onSubmit, Inputs }: any) {
  const [values, setValues] = useState(initialValues);
  function handleChange(event: any) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    onSubmit(values);
  }

  return <form onSubmit={handleSubmit}>{Inputs}</form>;
}

export {
  TextInput,
  MultiSelectInput,
  SelectInput,
  NumberInput,
  DateInput,
  CheckboxInput,
  RadioInput,
  TextAreaInput,
  SubmitButton,
  Form,
};

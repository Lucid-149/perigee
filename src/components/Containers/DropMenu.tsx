import { useState } from "react";

interface Props {
  name: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const DropMenu = ({ name, children, onClick }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative w-full flex flex-col p-2 rounded-xl  glass"
      onClick={onClick}
    >
      <button
        onClick={() => setOpen(!open)}
        className="text-xl backdrop-blur-md p-8 flex justify-between  w-full  rounded-xl font-semibold"
      >
        <p>{name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`
          }
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className=" h-full flex flex-col p-1 rounded-xl swing-in-top-fwd  max-h-[65vh] overflow-auto">
          {children}
        </div>
      )}
    </div>
  );
};

export default DropMenu;

import { Link } from "react-router-dom";

type BtnTypes = "primary" | "secondary" | "Danger" | "Success";

interface Props {
  Type: BtnTypes;
  LinkTo?: string;
  type?: "submit" | "button" | "reset";
  Text: string;
  onClick?: () => void;
}

export default function PrimaryBtn(props: Props) {
  const { Type, LinkTo, Text, onClick, type } = props;

  return (
    <div className="flex  w-full ">
      {LinkTo ? (
        <Link
          to={LinkTo || "/"}
          className={`${
            Type === "primary"
              ? "bg-blue-500/10 glass hover:bg-sky-500/20"
              : Type === "secondary"
              ? "bg-gray-500/30 hover:bg-gray-700/20"
              : Type === "Danger"
              ? "bg-red-500/30 hover:bg-red-700/20"
              : Type === "Success"
              ? "bg-green-500/30 hover:bg-green-700/20"
              : ""
          } p-3 w-full rounded-xl m-2 shadow-sm hover:shadow-2xl glass ease-in-out duration-300 transition-all flex justify-center items-center`}
        >
          <span className="text-[calc(0.8rem+1vw)]">{Text}</span>
        </Link>
      ) : (
        <button
        title={Text}
        type={type}

          onClick={onClick}
          className={`${
            Type === "primary"
              ? " glass outline outline-transparent hover:outline-blue-700/80 "
              : Type === "secondary"
              ? " glass outline outline-transparent hover:outline-gray-700/80 "
              : Type === "Danger"
              ? " glass outline outline-transparent hover:outline-red-700/80"
              : Type === "Success"
              ? " glass outline outline-transparent hover:outline-green-700/800"
              : ""
          }  p-5 w-full rounded-xl m-2 shadow-sm hover:shadow-2xl ease-in-out duration-300 transition-all flex justify-center items-center`}
        >
          <h3 className="text-[calc(1rem+1vw)] font-semibold  ">{Text}</h3>
        </button>
      )}
    </div>
  );
}

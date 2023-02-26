interface CardSate {
  type: "success" | "error" | "warning" | "info" | "loading" | undefined;
  state: "normal" | "danger" | undefined;
}

interface CardProps {
  title: string;
  className?: string;
  children: any;
  state?: CardSate;
}

const CardComponent = ({ title, children, state, className }: CardProps) => {
  if (state?.state === "danger") {
    return (
      <div
        className={` rounded-xl p-5 outline-2 border-none outline outline-red-600/95 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-20 before:animate-pulse before:rounded-xl before:bg-red-500/50 glass ${className}  relative`}
      >
        <div className="card-header">
          <h5>{title}</h5>
        </div>
        <div className=" max-h-[60vh] overflow-auto ">{children}</div>
   
      </div>
    );
  } else {
    return (
      <div
        className={`glass ${className}  relative ${
          state?.type === "success"
            ? "outline-2 border-none outline outline-emerald-700/95 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-20  before:bg-green-700/10"
            : ""
        }
        ${
          state?.type === "error"
            ? "outline-2 border-none outline outline-red-600/95 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-20 before:animate-pulse before:rounded-xl before:bg-red-500/20 "
            : ""
        }
        ${
          state?.type === "warning"
            ? "outline-2 border-none outline outline-yellow-600/95 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-20 overflow-hidden before:rounded-xl before:bg-yellow-500/5 "
            : ""
        }
        ${
          state?.type === "info"
            ? "outline-2 border-none outline before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-20 before:bg-sky-700/10 outline-sky-600/95"
            : ""
        }
        rounded-xl m-1 p-5 border shadow-sm border-slate-800/50`}
      >
        <div className="card-header">
          <h3 className="text-lg font-semibold uppercase">{title}</h3>
        </div>
        <div className=" overflow-auto ">{children}</div>
      </div>
    );
  }
};

export default CardComponent;

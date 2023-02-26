import React from "react";

interface Props {
    name: string;
    onClick?: () => void;
}

const PageSectioNav = ({ name, onClick }: Props) => {
    return (
        <div className="flex flex-col overflow-hidden w-full max-w-[260px]">
            <button
                onClick={onClick}
                className="flex flex-col justify-center items-center w-full h-full rounded-xl p-3 hover:p-3 bg-none"
            >
                <h4 className="text-xs uppercase font-semibold">{name}</h4>
            </button>
        </div>
    );
};

export default PageSectioNav;
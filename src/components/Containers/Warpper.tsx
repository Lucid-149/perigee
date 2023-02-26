interface Props {
    children: React.ReactNode[];
}
import { useTheme } from "../../Theme/ThemeContext";
export default function Warpper(props: Props) {
    return (
        <div className={` w-full ${
            useTheme().darkTheme ? "bg-black/50" : "bg-white/5"
        }`}>
            <div className="mx-auto relative  scroll-smooth max-w-7xl">
                {props.children}
            </div>
        </div>
    );
}
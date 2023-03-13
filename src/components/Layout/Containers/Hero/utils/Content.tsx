interface ContentProps {
    title: string;
    description: string;
    callToAction: (action : string) => void;
    }
import styles from "./utils.module.css";
export default function Content(props: ContentProps) {
    return (
        <div className={` max-w-xl glass rounded-xl mx-5 slide-in-elliptic-top-fwd ${styles.card}}`}>
            <div className="hero__content__text h-full flex flex-col gap-3">
            <h2 className="hero__content__text__title px-5 pt-5">
                {props.title}
            </h2>
            <p className="hero__content__text__description h-1/2 p-5 ">
                {props.description}
            </p>
            <button className="hero__content__text__button p-5 glass text-3xl capitalize w-1/2 rounded-r-xl shadow-md hover:w-2/3 transition-all ease-in-out duration-300" onClick={() => props.callToAction("Get Started")}>
                Get Started
            </button>

            </div>
        </div>
    )
    }
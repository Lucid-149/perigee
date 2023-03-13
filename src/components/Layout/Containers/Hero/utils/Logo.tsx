import styles from "./utils.module.css";
export default function Logo() {
  return (
    <div className={`p-5 bouncetop max-w-[400px] w-full bg-emerald-900/70 backdrop-blur-lg aspect-square rounded-full justify-center items-center flex hover:drop-shadow-2xl ${styles.bouncetop}`}>
    <svg
      width="62"
      height="59"
      viewBox="0 0 62 59"
      fill="none"
      className=" w-2/3 h-2/3 max-w-lg "
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.3685 13.4311V13.4627M48.3685 35.5365L37.3158 19.7469C36.2518 17.8239 35.7079 15.6565 35.738 13.4589C35.7681 11.2613 36.371 9.10957 37.4872 7.21633C38.6034 5.32309 40.1943 3.75384 42.1026 2.66364C44.0109 1.57343 46.1707 1 48.3685 1C50.5663 1 52.726 1.57343 54.6343 2.66364C56.5427 3.75384 58.1335 5.32309 59.2497 7.21633C60.3659 9.10957 60.9689 11.2613 60.9989 13.4589C61.029 15.6565 60.4852 17.8239 59.4212 19.7469L48.3685 35.5365Z"
        stroke="gold"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg-elem-1"
      ></path>
      <path
        d="M24.6843 9.48367L19.9475 7.11523L1 16.589V57.6418L19.9475 48.1681L38.8949 57.6418L57.8424 48.1681V41.8523M19.9475 7.11523V48.1681M38.8949 41.8523V57.6418"
        stroke="gold"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg-elem-2"
      ></path>
    </svg>
    </div>
  );
}

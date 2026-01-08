import { FadeLoader } from "react-spinners";

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-62.5" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <FadeLoader size={100} color="green" />
    </div>
  );
};

export default LoadingSpinner;

import { FadeLoader } from "react-spinners";

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-62.5" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center bg-green-50 `}
    >
      <FadeLoader size={100} color="green" />
    </div>
  );
};

export default LoadingSpinner;

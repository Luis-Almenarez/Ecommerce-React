import { BounceLoader } from "react-spinners";

export const Loading = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BounceLoader
        color={"#22c55e"}
        loading={loading}
        size={350}
        speedMultiplier={1.5}
      />
    </div>
  );
};

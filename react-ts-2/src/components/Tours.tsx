import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import Tour from "./Tour";

type ToursProps = {
  fetchToursInApp: () => void;
};
const Tours = ({ fetchToursInApp }: ToursProps) => {
  const { tours } = useSelector((state: RootState) => state.tour);

  return (
    <div>
      {tours.length > 0 && (
        <div className="relative flex justify-center mb-20">
          <h1 className=" text-3xl ">Our Tours</h1>
          <div className=" absolute bottom-[-20px] h-1 bg-green-500 w-[80px]"></div>
        </div>
      )}
      {tours.length === 0 && (
        <div className=" justify-center flex flex-col items-center">
          <h1 className=" text-3xl ">No Tours left</h1>
          <button
            className=" hover:text-green-500 hover:bg-white px-4 mt-5 rounded-md border-green-500 border transition-all duration-300 bg-green-500 text-white"
            onClick={fetchToursInApp}>
            Refresh
          </button>
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;

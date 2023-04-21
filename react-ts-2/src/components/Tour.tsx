import React, { useState } from "react";
import { TourType, deleteTours } from "../redux/features/tours/tourSlice";
import { useDispatch } from "react-redux";
const Tour = ({ id, image, info, name, price }: TourType) => {
  const [textType, setTextType] = useState("short");
  const dispatch = useDispatch();
  return (
    <div className=" rounded-md overflow-hidden w-[400px] relative">
      <img src={image} className=" w-full object-cover h-[300px]" alt="" />
      <span className="absolute text-lg text-white top-0 right-0 bg-green-500 px-3 py-1">
        $ {price}
      </span>
      <div className=" bg-white p-5 rounded-b-md">
        <div>
          <h2 className=" text-center text-2xl py-2">{name}</h2>
          {textType == "short" && (
            <p>
              {info.substring(0, 300)}...{" "}
              <span
                className=" text-green-500 cursor-pointer"
                onClick={() => setTextType("long")}>
                Read more
              </span>
            </p>
          )}
          {textType == "long" && (
            <p>
              {info}
              <span
                className=" text-green-500 cursor-pointer"
                onClick={() => setTextType("short")}>
                Show less
              </span>
            </p>
          )}
        </div>
        <button
          className=" w-full mt-10 py-1 text-green-500 rounded-md border-green-500 border transition-all duration-300 hover:bg-green-500 hover:text-white"
          onClick={() => dispatch(deleteTours(id))}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;

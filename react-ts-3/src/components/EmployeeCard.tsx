import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const EmployeeCard = () => {
  const { employeeInfo } = useSelector((state: RootState) => state.employee);
  const [index, setIndex] = useState(0);

  const nextIndex = () => {
    if (index !== employeeInfo.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  const prevIndex = () => {
    if (index !== 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(employeeInfo.length - 1);
    }
  };

  const randomIndex = () => {
    const random = Math.floor(Math.random() * employeeInfo.length);
    if (random == index) {
      randomIndex();
    } else {
      setIndex(random);
    }
  };

  return (
    <div className="md:w-[70%] w-[90%] lg:w-[45%] bg-white p-10 rounded-md hover:shadow-md transition-all duration-500">
      <div className=" relative flex justify-center">
        <img
          src={employeeInfo[index].image}
          className="w-32 h-32 object-cover rounded-full relative z-10"
          alt=""
        />
        <div className="w-32 h-32 bg-purple-400 rounded-full absolute z-0 top-0 translate-x-2 translate-y-[-3px]"></div>
        <span className=" w-8 h-8 flex items-center justify-center text-white bg-purple-400 rounded-full absolute z-20 pt-3 text-4xl translate-x-[-40px]">
          "
        </span>
      </div>
      <div className=" text-center mt-5 space-y-3">
        <div className=" space-y-1">
          <h2 className=" text-3xl">{employeeInfo[index].name}</h2>
          <h3 className=" text-purple-400">{employeeInfo[index].job}</h3>
        </div>
        <p>{employeeInfo[index].desc}</p>
        <div className=" flex gap-8 justify-center py-2">
          <BsChevronLeft
            className=" text-purple-400 hover:text-purple-600 transition-all duration-100 cursor-pointer"
            size={20}
            onClick={prevIndex}
          />
          <BsChevronRight
            className=" text-purple-400 hover:text-purple-600 transition-all duration-100 cursor-pointer"
            size={20}
            onClick={nextIndex}
          />
        </div>
        <button
          className=" bg-purple-200 text-purple-500 px-4 py-1 rounded-md hover:text-purple-300 hover:bg-purple-900 transition-all duration-500"
          onClick={randomIndex}>
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;

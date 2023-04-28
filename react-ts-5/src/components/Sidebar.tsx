import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { changeEmployee } from "../redux/features/employee/employeeSlice";

const Sidebar = () => {
  const { employeeInfos, currentEmployee } = useSelector(
    (state: RootState) => state.employeeInfo
  );
  const dispatch = useDispatch();
  return (
    <div className="flex lg:flex-col flex-row gap-10 w-[20%]">
      {employeeInfos?.map((employee) => (
        <div
          key={employee.id}
          className="relative w-full text-center group "
          onClick={() => dispatch(changeEmployee(employee.order))}>
          <button
            className={`transition-all duration-300 hover:text-teal-400 ml-3 lg:ml-0 ${
              currentEmployee == employee.order && "text-teal-400"
            }`}>
            {employee.company}
          </button>
          <div
            className={`absolute top-0 left-0 w-1 h-full transition-all duration-300 bg-teal-400 opacity-0 group-hover:opacity-100 ${
              currentEmployee == employee.order && "opacity-100"
            }`}></div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

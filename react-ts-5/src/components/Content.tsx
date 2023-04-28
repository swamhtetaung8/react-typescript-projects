import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useEffect, useState } from "react";
const Content = () => {
  const { employeeInfos, currentEmployee } = useSelector(
    (state: RootState) => state.employeeInfo
  );

  interface currentShowEmployeeType {
    company: string;
    data: string;
    duties: string[];
    id: string;
    order: number;
    title: string;
  }

  const [currentShowEmployee, setCurrentShowEmployee] = useState<
    currentShowEmployeeType | undefined
  >(undefined);

  useEffect(() => {
    setCurrentShowEmployee(
      employeeInfos.find((employee) => employee.order === currentEmployee)
    );
  }, [currentEmployee]);

  return (
    <div className=" lg:w-[80%]">
      <h1 className="text-3xl tracking-wide ">{currentShowEmployee?.title}</h1>
      <p className="inline-block px-2 py-1 my-3 text-sm bg-gray-300 rounded ">
        {currentShowEmployee?.company}
      </p>
      <p className="text-gray-400 ">{currentShowEmployee?.dates}</p>
      <div className="my-5 space-y-3 ">
        {currentShowEmployee?.duties.map((duty, idx) => (
          <div className="flex items-center gap-5 " key={duty + idx}>
            <BsChevronDoubleRight
              size={25}
              className="text-teal-500 w-[20px] "
            />
            <p className=" w-[90%]">{duty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;

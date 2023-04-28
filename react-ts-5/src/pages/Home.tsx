import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { getEmployeeInfo } from "../redux/features/employee/employeeSlice";
const Home = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axios.get("https://course-api.com/react-tabs-project");
      dispatch(getEmployeeInfo(res.data));
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CgSpinner className="text-5xl text-teal-400 animate-spin" />
      </div>
    );
  }

  return (
    <main className="m-10 lg:mx-40 lg:my-20">
      <div className="flex flex-col gap-20 lg:flex-row">
        <Sidebar />
        <Content />
      </div>
    </main>
  );
};

export default Home;

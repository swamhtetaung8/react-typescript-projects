import React from "react";
import "./App.css";
import EmployeeCard from "./components/EmployeeCard";
const App = () => {
  return (
    <div className=" min-h-screen bg-slate-200 flex items-center justify-center">
      <EmployeeCard />
    </div>
  );
};

export default App;

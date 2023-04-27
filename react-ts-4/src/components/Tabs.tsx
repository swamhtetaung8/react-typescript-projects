import React from "react";
import TabButton from "./TabButton";

const Tabs = () => {
  const tabNames = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Breakfast",
    },
    {
      id: 3,
      name: "Lunch",
    },
    {
      id: 4,
      name: "Shakes",
    },
  ];
  return (
    <div className=" flex items-center justify-center gap-5">
      {tabNames.map((tab) => (
        <TabButton key={tab.id} {...tab} />
      ))}
    </div>
  );
};

export default Tabs;

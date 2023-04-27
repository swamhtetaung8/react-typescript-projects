import React, { useEffect } from "react";
import Tabs from "../components/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getMenu } from "../redux/features/menu/menuSlice";
import MenuCard from "../components/MenuCard";

const Home = () => {
  const { showMenu } = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();
  console.log(showMenu);
  useEffect(() => {
    dispatch(getMenu());
  }, []);
  return (
    <section className=" py-20">
      <div className=" relative flex justify-center mb-14">
        <h1 className=" text-4xl font-medium tracking-wide">Our Menu</h1>
        <div className=" h-1 bg-amber-400 absolute bottom-[-20px] w-[100px]"></div>
      </div>
      <Tabs />
      <div className=" grid grid-cols-3 gap-y-20 px-20 justify-items-center mt-20">
        {showMenu.map((item) => (
          <MenuCard {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Home;

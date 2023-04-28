import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
type MenuCardProps = {
  id: string;
  name: string;
  detail: string;
  price: number;
  image: string;
  category: string;
};
const MenuCard = ({
  id,
  name,
  detail,
  price,
  image,
  category,
}: MenuCardProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout
        className=" border shadow-md rounded-md overflow-hidden lg:w-[350px] md:w-[300px] w-[350px]">
        <img
          src={image}
          className=" h-[200px] min-w-full object-cover"
          alt=""
        />
        <div className="p-5">
          <div className="flex items-center justify-between ">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="px-2 text-white rounded-sm bg-amber-500">${price}</p>
          </div>
          <p className="mt-5 leading-8 tracking-wide text-gray-500">{detail}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuCard;

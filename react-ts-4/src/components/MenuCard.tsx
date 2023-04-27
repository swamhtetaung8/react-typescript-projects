import React from "react";

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
    <div className=" border shadow-md rounded-md overflow-hidden w-[350px]">
      <img src={image} className=" h-[200px] min-w-full object-cover" alt="" />
      <div className="p-5">
        <div className=" flex justify-between items-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-white bg-amber-500 px-2 rounded-sm">${price}</p>
        </div>
        <p className="text-gray-500 leading-8 tracking-wide mt-5">{detail}</p>
      </div>
    </div>
  );
};

export default MenuCard;

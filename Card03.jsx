import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { BsPlusSquareFill } from "react-icons/bs";

const Card03 = ({ image, name, position }) => {
  return (
    <div className=" h-[5.8rem] w-[8.2rem]  rounded-xl flex flex-col items-center justify-center relative ">
      <img
        className="w-10 h-10 rounded-full absolute bottom-[4.6rem]  border-4 border-white object-cover"
        src={image}
        alt=""
      />
      <p className="absolute right-3 bottom-[4.8rem] text-sm text-gray-600">
        ...
      </p>
      <p className="mt-2 text-sm font-medium">{name}</p>
      <p className="text-xs font-light text-gray-500">{position}</p>
      <div className="flex items-center bg-[#5040a5] rounded-full text-white gap-1 px-2 py-[0.12rem] mt-1">
        <MdShoppingCart className="text-xs" />
        <p className="text-xs">Retail</p>
      </div>
      <select
        className="rounded-full outline-none text-white w-7 h-5 bg-[#0d99fe] absolute top-[5.3rem] left-9"
        name=""
        id=""
      >
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
      </select>
      <BsPlusSquareFill className="text-white bg-gray-500 rounded absolute top-[5.3rem] h-5 w-5 right-9" />
    </div>
  );
};

export default Card03;

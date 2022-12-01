import React from "react";
import { BsPlusSquareFill } from "react-icons/bs";
const Card = ({ country, image, personImage, name, position }) => {
  return (
    <div className="bg-[#f6f6f6] h-[4rem] w-[8.2rem]  rounded-xl flex flex-col items-center justify-center relative ">
      <div className="flex items-center justify-center absolute bottom-24 gap-2 border border-red-600 rounded-full py-[0.15rem] px-1 bg-white z-50">
        <img className="rounded-full w-3 h-3 object-cover" src={image} alt="" />
        <p className="text-xs">{country}</p>
      </div>
      <img
        className="w-10 h-10 rounded-full absolute bottom-[3rem]  border-4 border-white object-cover"
        src={personImage}
        alt=""
      />
      <p className="absolute right-3 bottom-[2.9rem] text-sm text-gray-600">
        ...
      </p>
      <p className="mt-2 text-sm font-medium">{name}</p>
      <p className="text-xs font-light  text-gray-500">{position}</p>
      <BsPlusSquareFill className="text-white bg-gray-500 rounded absolute top-[3.5rem] h-4 w-4" />
    </div>
  );
};

export default Card;

import React from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { BsFilter } from "react-icons/bs";

const SearchBar = () => {
  return (
    <main className=" h-[4rem] flex items-center justify-between gap-40">
      <div className="flex items-center ml-6 gap-2">
        <h1 className="tracking-wide text-xl">People</h1>
        <BsPlusSquareFill className="w-auto h-7" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-[#f6f6f6] py-1 px-3 rounded-md border-[1.5px]  border-gray-300 gap-2">
          <RiSearch2Line className="w-auto h-5" />
          <input
            className="outline-none tracking-wider bg-[#f6f6f6] w-[10rem]"
            placeholder="Search"
            type="text"
          />
        </div>
        <div className="flex items-center bg-[#f6f6f6] py-1 px-3 rounded-md border-[1.5px]  border-gray-300 mr-10 gap-2">
          <BsFilter className="w-auto h-5 " />
          <p>Filter</p>
        </div>
      </div>
    </main>
  );
};

export default SearchBar;

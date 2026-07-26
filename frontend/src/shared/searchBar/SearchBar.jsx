import React, { useRef } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-toastify";
import BASE_URL from "../../utils/config";
import { useNavigate } from "react-router-dom";
import "./SeachhBar.css";

const SearchBar = () => {
  const minPriceRef = useRef(0);
  const maxPriceRef = useRef(0);
  const cityRef = useRef(0);
  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    if (e) e.preventDefault();
    const minPrice = minPriceRef.current.value;
    const maxPrice = maxPriceRef.current.value;
    const searchTerm = cityRef.current.value;

    if (minPrice === "" || maxPrice === "" || searchTerm === "") {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const response = await fetch(
        `${BASE_URL}/tour/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      
      if (!response.ok) {
        toast.error("No Record Found!");
        return;
      }

      const result = await response.json();

      navigate(
        `/tours/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
        { state: result.data }
      );
    } catch (error) {
      toast.error("Error connecting to server");
    }
  };

  return (
    <div className="w-full max-w-[800px] mx-auto mt-8 px-4">
      <div className="bg-white rounded-2xl md:rounded-full p-4 md:py-2 md:px-6 shadow-lg border border-gray-100">
        <form onSubmit={SubmitHandler} className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full">
          <div className="flex items-center gap-3 flex-1 pb-3 md:pb-0 border-b md:border-b-0 md:border-r border-gray-200 pr-2">
            <span className="text-red-500 text-2xl">
              <FaPeopleGroup />
            </span>
            <div className="flex-1">
              <h6 className="font-semibold text-xs text-gray-700 uppercase tracking-wider mb-0.5">Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={cityRef}
                className="w-full bg-transparent border-none text-sm text-gray-900 focus:outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-1 pb-3 md:pb-0 border-b md:border-b-0 md:border-r border-gray-200 pr-2">
            <span className="text-red-500 text-2xl">
              <IoIosPricetags />
            </span>
            <div className="flex-1">
              <h6 className="font-semibold text-xs text-gray-700 uppercase tracking-wider mb-0.5">Min Price</h6>
              <input 
                type="number" 
                placeholder="Min. Price" 
                ref={minPriceRef} 
                className="w-full bg-transparent border-none text-sm text-gray-900 focus:outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-1 pb-3 md:pb-0 border-b md:border-b-0 md:pr-4">
            <span className="text-red-500 text-2xl">
              <IoIosPricetags />
            </span>
            <div className="flex-1">
              <h6 className="font-semibold text-xs text-gray-700 uppercase tracking-wider mb-0.5">Max Price</h6>
              <input 
                type="number" 
                placeholder="Max. Price" 
                ref={maxPriceRef} 
                className="w-full bg-transparent border-none text-sm text-gray-900 focus:outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
          
          <button
            className="bg-BaseColor hover:bg-BHoverColor rounded-xl md:rounded-full cursor-pointer py-3 px-4 md:p-3 flex items-center justify-center transition-colors"
            type="submit"
          >
            <IoIosSearch size={24} className="text-white" />
            <span className="md:hidden ml-2 text-white font-semibold">Search Tours</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

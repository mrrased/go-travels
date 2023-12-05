import React, { useState } from "react";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import SearchForm from "./SearchForm";
import useAuth from "../../../Hooks/useAuth";

const ItemsOne = () => {
  const {
    serchData,
    setShowFormData,
    showFormData,
    setShowToData,
    showToData,
  } = useAuth();

  console.log(serchData);
  return (
    <div>
      <div className="flex divide-x">
        <p className="px-2">Flights</p>
        <p className="px-2">Fast Travel</p>
      </div>
      <form>
        <ul className="md:flex md:divide-x  w-full">
          <li className="relative">
            <input
              className="w-full p-5 bg-amber-50"
              type="text"
              placeholder="From"
              onClick={() => {
                setShowToData(false);
                setShowFormData((previous) => !previous);
              }}
            />
            {showFormData && (
              <div className="absolute w-full lg:w-72 z-20">
                <SearchForm />
              </div>
            )}
          </li>
          <li className="relative">
            <input
              className="w-full p-5 bg-amber-50"
              type="text"
              placeholder="To"
              onClick={() => {
                setShowFormData(false);
                setShowToData((previous) => !previous);
              }}
            />
            {showToData && (
              <div className="absolute w-full lg:w-72">
                <SearchForm />
              </div>
            )}
          </li>
          <li>
            <select className="w-full p-5 bg-amber-50" id="cars" name="cars">
              <option value="volvo">Tour Type</option>
              <option value="saab">Adventure Travel</option>
              <option value="fiat">Family Tours</option>
              <option value="audi">Newest Item</option>
              <option value="audi">Nature & wildlife</option>
            </select>
          </li>
          <li>
            <input
              className="w-full p-5 bg-amber-50"
              type="date"
              max="1979-12-31"
            />
          </li>
          <li>
            <input
              className="w-full p-5 bg-amber-50"
              type="text"
              placeholder="1 Passenger, Economy"
            />
          </li>
        </ul>
        <div className="text-right m-2 text-white">
          <button
            type="submit"
            className="px-8 py-2 bg-yellow-600 text-center animate-pulse"
          >
            Show Flight{" "}
            <span>
              <FlightTakeoffOutlinedIcon />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemsOne;

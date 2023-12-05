import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const SearchForm = () => {
  const { setSearchData, setShowFormData, setShowToData } = useAuth();

  const list = [
    {
      city: "Dhaka",
      country: "Bangladesh",
      airportName: "Hazrat Shahjalal international Airport",
      airportCode: "DAC",
    },
    {
      city: "Chittagong",
      country: "Bangladesh",
      airportName: "Shah Amanat International",
      airportCode: "CGP",
    },
    {
      city: "Cox's Bazar",
      country: "Bangladesh",
      airportName: "Cox's Bazar",
      airportCode: "CXB",
    },
    {
      city: "Sylhelt",
      country: "Bangladesh",
      airportName: "Sylhet Civil",
      airportCode: "ZYL",
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      airportName: "Dubai",
      airportCode: "DXB",
    },
  ];

  useEffect(() => {}, []);
  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="search"
          className="w-full p-2 drop-shadow-md border-b border-gray-300"
        />
        <div className="bg-white h-32 px-2 overflow-hidden overflow-y-auto drop-shadow-md">
          {list.map((data) => {
            return (
              <div
                onClick={() => {
                  setSearchData(data);
                  setShowFormData(false);
                  setShowToData(false);
                }}
                className="grid grid-cols-12 mb-3 cursor-pointer"
              >
                <div className="col-span-10">
                  <div className="text-[13px] text-gray-700 font-semibold">
                    <span>{data.city},</span>
                    <span>{data.country}</span>
                  </div>
                  <div className="">
                    <span className="text-[11px]">{data.airportName}</span>
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-end">
                  <div className="text-sm">
                    <span>{data.airportCode}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
